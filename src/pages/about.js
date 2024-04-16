import AboutComponent from "../components/about/About";
import { StyleSheet, View } from 'react-native';

export default function AboutPage() {

    return (
        <View style={styles.container}>
            <AboutComponent styles={styles} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    image: {
        width: 10,
        height: 10,
        resizeMode: 'contain',
        margin: 10
    },
    textContainer: {
        fontSize: 20,
        margin: 12,
        textAlign: 'justify'
    },

});
