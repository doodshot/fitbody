import {ImageBackground, View, StyleSheet, Text, Image} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/app'
import OnBoardingMenuButton from "@/components/molecules/OnBoardingMenButton";
import React from "react";


export function OnBoardingCommunity() {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    // Caricamento dei font
    const [loaded, error] = useFonts({
        'LeagueSpartan-Bold': require('../../assets/fonts/LeagueSpartan-Bold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Italic': require('../../assets/fonts/Poppins-Italic.ttf'),
    });

    if (!loaded) {
        return (
            <View>
                <Text>Loading fonts...</Text>
            </View>
        );
    }

    const OnPressNavigation = () => {
        return navigation.navigate('Login')
    }

    return (
        <ImageBackground
            source={require("../../assets/images/sport-men-final-community.png")}
            style={styles.imageBackground}>

            <View style={styles.containerText}>
                <Image
                    source={require('../../assets/images/icon-community.png')}
                    style={styles.icon}
                    resizeMode="contain"
                />
                <Text style={styles.text}>
                    A Community For You,
                </Text>
                <Text style={styles.text}>
                    Challenge Yourself
                </Text>
            </View>
            <OnBoardingMenuButton onPress={OnPressNavigation} title={"Get Started"}>
            </OnBoardingMenuButton>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    containerText: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 180,
        width: '100%',
        backgroundColor: '#B3A0FF',

    },
    icon: {

        marginBottom: 10,
    },
    text: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold',
    },
});
