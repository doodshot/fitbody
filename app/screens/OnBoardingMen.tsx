import React from 'react';
import {Image, ImageBackground, Text, View, StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import {useFonts} from "expo-font";
import OnBoardingMenuButton from '../../components//molecules/OnBoardingMenButton';
import { RootStackParamList } from '@/app'
import OnBoardingBtnSkip from "@/components/molecules/btn/OnBoardingBtnSkip";
import {OnBoardingStackParamList} from "@/app/Navigation/OnBoarding";

export default function OnBoardingMen() {
    const navigation = useNavigation<NavigationProp<OnBoardingStackParamList>>();
    const navigation2 = useNavigation<NavigationProp<RootStackParamList>>();

    //font
    const [loaded, error] = useFonts({
        'LeagueSpartan-Bold': require('../../assets/fonts/LeagueSpartan-Bold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Italic': require('../../assets/fonts/Poppins-Italic.ttf'),
    });

    if (!loaded) {
        return (
            <View style={styles.container}>
                <Text>Loading fonts...</Text>
            </View>
        );
    }
     const OnPressNavigation = () => {
        return navigation.navigate('OnBoardingWomen')
     }
    const onSkip = () => {
        return navigation2.navigate('Login')
    }

    return (
        <ImageBackground
            style={styles.container}
            source={require('../../assets/images/sfondo-2-men.png')}>
            <OnBoardingBtnSkip onPress={onSkip} title={"Skip >"}>

            </OnBoardingBtnSkip>

            <View style={styles.containerText}>
                <Image
                    source={require('../../assets/images/img-Run-icon.png')}
                    style={styles.icon}
                    resizeMode="contain"
                />
                <Text style={styles.text}>
                    Start Your Journey Towards
                </Text>
                <Text style={styles.text}>
                    A More Active Lifestyle
                </Text>
            </View>
            <OnBoardingMenuButton onPress={OnPressNavigation} title={"Next"}>

            </OnBoardingMenuButton>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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