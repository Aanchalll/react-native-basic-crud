
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import Checkbox from '../base/checkbox';
import validations from '../../utils/validations';

export default function FormComponent({ styles }) {
    const [text, setText] = useState({ name: '', contact: '', email: '', termsAndConditions: false })
    const [error, setError] = useState('')
    const [finalDetails, setfinalDetails] = useState(null);

    function SubmitFunction() {
        setfinalDetails(text);
        Reset();
    }

    function Reset() {
        setText({ name: '', contact: '', email: '', termsAndConditions: false });
    }
    function ResetFinalDetails() {
        setfinalDetails(null);
    }

    const validatedOthers = () => {
        const { name, contact, email, termsAndConditions, primaryContactDetails } = text;
        let contactNumber;
        let emailAddress;
        let nameError;

        nameError = validations.validateFullName(name);

        contactNumber = validations
            .isMobileValid(contact)
            ? null : 'Please enter a valid mobile number';

        emailAddress = validations
            .isEmailValid(email)
            ? null : 'Please enter a valid email address';

        setError({
            name: nameError,
            contact: contactNumber,
            email: emailAddress,
            termsAndConditions: !termsAndConditions ? 'Please read and agree to terms and conditions.' : ''
        });

        if (!nameError && !contactNumber && !emailAddress && termsAndConditions) {
            SubmitFunction();
        }
    }

    return (
        <View>
            <Text style={styles.formHeading} >
                {!finalDetails ? 'Details Form' : 'Entered Details'}
            </Text>
            {!finalDetails ?
                <form>

                    <View style={styles.inputContainer}>
                        <label htmlFor="name">Name</label>
                        <TextInput
                            style={styles.input1}
                            id='name'
                            placeholder="Name"
                            onChangeText={newText => setText({ ...text, name: newText })}
                            value={text.name}
                        />
                    </View>
                    <Error value={error.name} styles={styles} />
                    <View style={styles.inputContainer}>
                        <label htmlFor="contact-number">Contact Number</label>
                        <TextInput
                            id='contact-number'
                            keyboardType='numeric'
                            style={styles.input1}
                            placeholder="Contact Number"
                            onChangeText={newText => setText({ ...text, contact: newText })}
                            value={text.contact}
                            maxLength={10}
                        />
                    </View>
                    <Error value={error.contact ? error.contact : ''} styles={styles} />
                    <View style={styles.inputContainer}>
                        <label htmlFor="email-address">Email Address</label>
                        <TextInput
                            keyboardType='email-address'
                            id='email-address'
                            style={styles.input1}
                            placeholder="Email Address"
                            onChangeText={newText => setText({ ...text, email: newText })}
                            value={text.email}
                        />
                    </View>
                    <Error value={error.email} styles={styles} />
                    <View style={styles.checkboxContainer}>
                        <Checkbox
                            label={'I agree to the terms and conditions.'}
                            value={text.termsAndConditions}
                            onSelect={() => { setText({ ...text, termsAndConditions: !text.termsAndConditions }) }}
                            isSelected={text.termsAndConditions}
                            disabled={false}
                        />
                    </View>
                    <Error value={error.termsAndConditions} styles={styles} />
                    <View style={styles.checkboxContainer}>
                        <Button title='Submit'
                            onPress={() => { validatedOthers(text); }}
                            style={styles.inputButton}
                        />
                    </View>
                </form>
                : <View id='lala'>
                    <View style={styles.resultContainer}>
                        <label htmlFor="name">Name :</label>
                        <Text style={styles.resultText}>{finalDetails?.name}</Text>
                    </View>
                    <View style={styles.resultContainer}>
                        <label htmlFor="contact-name">Contact Number :</label>
                        <Text style={styles.resultText}>{finalDetails?.contact}</Text>
                    </View>
                    <View style={styles.resultContainer}>
                        <label htmlFor="contact-name">Email Address :</label>
                        <Text style={styles.resultText}>{finalDetails?.email}</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <Button title='Reset Details'
                            onPress={() => { ResetFinalDetails(); }}
                            style={styles.inputButton}
                        />
                    </View>
                </View>}
        </View>
    );
}




const Error = ({ value, styles }) => {

    return (value ?
        <Text style={styles.error
        } > {value} </Text >
        : '')
}