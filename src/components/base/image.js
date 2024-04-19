
import { Image, Pressable, StyleSheet, Text } from 'react-native';

export default function ImageBase({ onPress, text }) {

    return (
        <Image
            source={require('../../../assets/icon.png')}
            style={styles.image}
        />
    );
}

const styles = StyleSheet.create(
    {
        image: {
            width: '10rem',
            height: '10rem',
            resizeMode: 'contain',
            margin: 10,
            backgroundColor: 'lightblue',
        },
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