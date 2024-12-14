import {ImageBackground, View, StyleSheet, Text, Image} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/app'
import OnBoardingMenuButton from "@/components/molecules/OnBoardingMenButton";
import React from "react";
import OnBoardingBtnSkip from "@/components/molecules/btn/OnBoardingBtnSkip";
import {OnBoardingStackParamList} from "@/app/Navigation/OnBoarding";


export function OnBoardingWomen() {

    const navigation = useNavigation<NavigationProp<OnBoardingStackParamList>>();
    const navigation2 = useNavigation<NavigationProp<RootStackParamList>>();


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
        return navigation.navigate('OnBoardingCommunity')
    }

    const onSkip = ()  => {
        return navigation2.navigate('Login')
    }

    return (
        <ImageBackground
            source={require("../../assets/images/women-background.png")}
            style={styles.imageBackground}>
            <OnBoardingBtnSkip onPress={onSkip} title={"Skip >"}>
            </OnBoardingBtnSkip>
            <View style={styles.containerText}>
                <Image
                    source={require('../../assets/images/logo-mela.png')}
                    style={styles.icon}
                    resizeMode="contain"
                />
                <Text style={styles.text}>
                    Find Nutrition Tips That Fit
                </Text>
                <Text style={styles.text}>
                    Your Lifestyle
                </Text>
            </View>
            <OnBoardingMenuButton onPress={OnPressNavigation} title={"Next"}>
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
        fontFamily: "Poppins-Bold",
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
