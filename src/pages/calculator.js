import CalculatorComp from "../components/calculator/CalculatorComp";
import { StyleSheet, View } from 'react-native';

export default function CalculatorPage() {
    return (
        <View style={styles.container}>
            <CalculatorComp />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});

