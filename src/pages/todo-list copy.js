import ToDoComponent from "../components/todo/ToDoComponent";
import { StyleSheet, View } from 'react-native';

export default function ToDoPage() {

    return (
        <View style={styles.container}>
            <ToDoComponent styles={styles} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input1: {
        height: 40,
        minWidth: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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
        color: 'red',
        margin: 12,
        marginTop: 2
    },
    taskHeading: {
        color: "brown",
        fontSize: '20px',
        paddingTop: 8,
        paddingBottom: 8,
        marginLeft: 12,
    }

});
