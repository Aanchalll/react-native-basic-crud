import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { CheckboxOffIconWeb, CheckboxOnIconWeb } from '../../../utils/icons';
// import { CheckboxOnIconWeb, CheckboxOffIconWeb } from 'icons';
// import { baseStyleGuide } from 'partner-style-guides';

const styles = StyleSheet.create({
    itemWrapper: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    iconWrapper: {
        marginRight: 20
    },
    itemLabel: {
        color: 'black',
        fontSize: 16,
        fontWeight: 500
    }
});

function Checkbox(props) {
    const { label, labelEl, value, isSelected, extStyles, disabled, onSelect, testID } = props;

    return (
        <TouchableWithoutFeedback
            onPress = {(e) => {
                e.preventDefault();
                if (onSelect) {
                    onSelect(!isSelected, value);``
                }
            }}
            disabled = {disabled}
            testID = {testID}
        >
            <View style = {[styles.itemWrapper, extStyles && extStyles.itemWrapper, disabled ? { opacity: 0.5 } : null]}>
                <View style = {[styles.iconWrapper, extStyles && extStyles.iconWrapper]}>
                    {
                        isSelected ? (
                            <CheckboxOnIconWeb
                                width = {extStyles && extStyles.iconWidth ? extStyles.iconWidth : 20}
                                height = {extStyles && extStyles.iconHeight ? extStyles.iconHeight : 20}
                                color = {extStyles && extStyles.checkboxOnColor
                                    ? extStyles.checkboxOnColor : "blue"}
                            />
                        ) : (
                            <CheckboxOffIconWeb
                                width = {extStyles && extStyles.iconWidth ? extStyles.iconWidth : 20}
                                height = {extStyles && extStyles.iconHeight ? extStyles.iconHeight : 20}
                                color = {extStyles && extStyles.checkboxOffColor
                                    ? extStyles.checkboxOffColor : "blue"}
                            />
                        )
                    }
                </View>
                <Text style = {[styles.itemLabel, extStyles && extStyles.itemLabel]}>{label}</Text>
                {labelEl}
            </View>
        </TouchableWithoutFeedback>
    );
}

export default memo(Checkbox);



