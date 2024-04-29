import React, { memo } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

function ConfirmationModal(props) {
    const { visible,
        title,
        description,
        onPrimaryButtonPress,
        onSecondaryButtonPress,
        primaryButtonText,
        secondaryButtonText,
        isDesktop } = props;
    const modalStyles = isDesktop ? modalStylesWebsite : modalStylesWebsite;
    const isArray = Array.isArray(description);
    return (
        <Modal visible={visible} transparent>
            <View
                style={[baseStyleSheet.modalEnvelop,
                baseStyleSheet.contentCenter]}
            >
                <View style={modalStyles.wrapper}>
                    <View style={modalStyles.titleWrapper}>
                        <Text style={modalStyles.title}>{title}</Text>
                    </View>
                    <Text style={modalStyles.description}>
                        {!isArray ?
                            description :
                            description?.map((value) => {
                                return (
                                    <View style={{ margin: '4px' }}>{value}</View>
                                )
                            })
                        }
                    </Text>
                    <View style={{ marginTop: 20, flexDirection: 'row', alignSelf: 'flex-end' }}>
                        {secondaryButtonText &&
                            <TouchableOpacity
                                onPress={onSecondaryButtonPress}
                                style={[modalStyles.actionLabelWrapper, isDesktop ? { backgroundColor: 'transparent', marginRight: 10 } : null]}
                            >
                                <Text style={modalStyles.secondaryLabel}>
                                    {secondaryButtonText}
                                </Text>
                            </TouchableOpacity>
                        }
                        {primaryButtonText &&
                            <TouchableOpacity
                                onPress={onPrimaryButtonPress}
                                style={modalStyles.actionLabelWrapper}
                            >
                                <Text style={modalStyles.primaryLabel}>{primaryButtonText}</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default memo(ConfirmationModal);


const modalStylesWebsite = StyleSheet.create({
    wrapper: {
        backgroundColor: 'rgb(255 213 213)',//baseStyleGuide.white,
        borderRadius: 4,
        padding: 20,
        width: 400,
        maxHeight: '100vh',
        maxWidth: '100vh',
        border: 'solid 1px black'
    },
    title: {
        fontSize: 25,
        fontWeight: '700'
    },
    titleWrapper: {
        marginBottom: 10
    },
    description: {
        overflow: 'auto'
    },
    actionLabelWrapper: {
        justifyContent: 'center',
        width: 110,
        height: 40,
        backgroundColor: 'grey',//baseStyleGuide.secondaryColor,
        borderRadius: 4
    },
    primaryLabel: {
        color: 'white',//baseStyleGuide.white,
        textAlign: 'center'
    },
    secondaryLabel: {
        color: 'black',//baseStyleGuide.secondaryColor,
        textAlign: 'center'
    }
});



export const baseStyleGuide = {
    // ...commonBaseStyleGuide,
    primaryColor: '#c30b12',
    primaryBtnBg: '#f7941d',
    primaryColorFirstShade: '#810005',
    secondaryColor: '#f7941d',
    success: '#559b09',
    error: '#dd3734',
    primaryFontColor: '#000000',
    secondaryFontColor: '#ffffff',
    loyaltyColor: '#cb9f41',
    loyaltyColor2: '#e1c16f',
    primaryFontColorWithOpacity: opacity => `rgba(0, 0, 0, ${opacity})`,
    secondaryFontColorWithOpacity: opacity => `rgba(255, 255, 255, ${opacity})`
};

export const baseStyleSheet = {
    fareBreakUpFooter: {
        container: {
            backgroundColor: '#292828'
        },
        titleLabel: {
            color: '#ffffff'
        },
        valueLabel: {
            color: '#ffffff'
        },
        infoIcon: {
            color: '#ffffff'
        }
    },
    loaderIcon: {
        width: 50,
        height: 50
    },
    paymentLoaderIcon: {
        width: 30,
        height: 30
    },
    inlineLoaderWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1
    },
    inlineLoader: {
        backgroundColor: 'white',//baseStyleGuide.white,
        borderRadius: 20,
        boxShadow: 'rgba(255, 0, 0, 0.20) 0 0 10px 2px',
        width: 40,
        height: 40
    }
};
