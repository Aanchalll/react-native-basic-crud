
import { Pressable, StyleSheet, Text } from 'react-native';

export default function ButtonBase({ onPress, text }) {

    return (
        <Pressable style={styles.button}
            onPress={() => { onPress() }
            }>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create(
    {
        button: {
            backgroundColor: 'lightblue',
            maxWidth: 100,
            borderRadius: 5,
            padding: 4,
            margin: 4,
            onPress: {
                backgroundColor: 'blue',
                color: 'white'
            }
        },
        text: {
            textAlign: 'center',
            letterSpacing: 1
        }
    }

)