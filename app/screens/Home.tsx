import React, {useEffect} from 'react';
import { ImageBackground, Text, View, Image, Button } from "react-native";
import { styles } from "@/components/Atoms/ViewStyles";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import {useFonts} from "expo-font";
import { RootStackParamList } from '@/app'

export default function Home() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    // useFont
    const [loaded, error] = useFonts({
        'LeagueSpartan-Bold': require('../../assets/fonts/LeagueSpartan-Bold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Italic': require('../../assets/fonts/Poppins-Italic.ttf'),
    });

    /*USE EFFECT*/
    useEffect(() => {
        if (!loaded) {
            const timeout = setTimeout( () => { //setTimout di 3 secondi
                navigation.replace('OnBoardingMen');
            },1500)
            return () => clearTimeout(timeout); // pulizia del timeout
        }
    }, []);

    // caricamento dei font
    if (!loaded) {
        return (
            <View style={styles.container}>
                <Text>Loading fonts...</Text>
            </View>
        );
    }
    return (
        <ImageBackground
            source={require('../../assets/images/sfondo1-img.png')}
            resizeMode={"cover"}
            style={styles.container}>
            <Text style={[styles.text1, {fontFamily: "LeagueSpartan-Bold"}]}>
                Welcome to
            </Text>
            <Image
                source={require('../../assets/images/logo.png')}
                width={10}
                height={10}
            />
            <Text style={[styles.text2, {fontFamily: "Poppins-Bold"}]}>
                FIT<Text style={[styles.text3, {fontFamily: "Poppins-Italic"}]}>BODY</Text>
            </Text>
        </ImageBackground>
    );
}
