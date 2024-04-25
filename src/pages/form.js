import FormComponent from "../components/form/FormComponent";
import { StyleSheet, View } from 'react-native';

export default function FormPage() {

    return (
        <View style={styles.container}>
            <FormComponent styles={styles} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    resultContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 12,
    },
    checkboxContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 12,
    },

    input1: {
        height: 40,
        minWidth: 200,
        margin: 12,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 8,
    },

    inputButton: {
        fontSize: 4,
        height: 40,
    },

    item: {
        margin: 12,
        fontSize: 16
    },

    error: {
        color: 'red'
    },

    resultText: {
        marginLeft: 5,
        // marginTop: 5
    },

    formHeading: {
        color: "brown",
        paddingTop: 8,
        paddingBottom: 8,
        textAlign: 'center', fontSize: 20, margin: 20
    }

});
