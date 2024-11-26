import React from 'react';
import { Image, ImageBackground, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OnBoardingMen() {
    const navigation = useNavigation();

    return (
        <ImageBackground
            style={styles.container}
            source={require('../../assets/images/sfondo-2-men.png')}>
            <View style={styles.containerText}>
                <Image
                    source={require('../../assets/images/img-Run-icon.png')}
                    style={styles.icon}
                />
                <Text style={styles.text}>
                    Start your journey towards a more active lifestyle
                </Text>
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerText: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 169,
        width: '100%',
        backgroundColor: '#B3A0FF',
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    text: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
    },
});