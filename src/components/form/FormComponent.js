
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import Checkbox from '../base/checkbox';
import validations from '../../utils/validations';
import ConfirmationModal from '../base/Modal'
import { Tnc } from '../../utils/constants';

export default function FormComponent({ styles }) {
    const [text, setText] = useState({ name: '', contact: '', email: '', termsAndConditions: false, isModal: false })
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
                {!finalDetails ? 'Details' : 'Entered Details'}
            </Text>
            {!finalDetails ?
                <View>

                    <View style={styles.inputContainer}>
                        <Text htmlFor="name">Name</Text>
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
                        <Text htmlFor="contact-number">Contact Number</Text>
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
                        <Text htmlFor="email-address">Email Address</Text>
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
                    <View style={styles.checkboxContainer} >
                        <Checkbox
                            label={
                                <Text> I agree to the {' '}
                                    <Text
                                        style={{ color: 'blue' }}
                                        onPress={() => { setText({ ...text, isModal: true }); }}
                                    >
                                        terms and conditions
                                    </Text>
                                    .
                                </Text>
                            }
                            value={text.termsAndConditions}
                            onSelect={() => { setText({ ...text, termsAndConditions: !text.termsAndConditions }) }}
                            isSelected={text.termsAndConditions}
                            disabled={false}
                        />
                    </View>
                    {text?.isModal &&
                        <ConfirmationModal
                            visible={text?.isModal}
                            isDesktop={true}
                            title={"Terms and Conditions"}
                            description={Tnc}
                            onPrimaryButtonPress={() => { setText({ ...text, isModal: false }); }}
                            primaryButtonText={'Close'}
                        />
                    }
                    <Error value={error.termsAndConditions} styles={styles} />
                    <View style={styles.checkboxContainer}>
                        <Button title='Submit'
                            onPress={() => { validatedOthers(text); }}
                            style={styles.inputButton}
                        />
                    </View>
                </View>
                : <View id='lala'>
                    <View style={styles.resultContainer}>
                        <Text htmlFor="name">Name :</Text>
                        <Text style={styles.resultText}>{finalDetails?.name}</Text>
                    </View>
                    <View style={styles.resultContainer}>
                        <Text htmlFor="contact-name">Contact Number :</Text>
                        <Text style={styles.resultText}>{finalDetails?.contact}</Text>
                    </View>
                    <View style={styles.resultContainer}>
                        <Text htmlFor="contact-name">Email Address :</Text>
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