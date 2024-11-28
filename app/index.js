import React from 'react';
import { ImageBackground, Text, View, Image, Button } from "react-native";
import { styles } from "@/components/Atoms/ViewStyles";
import { useFonts } from "expo-font";
import { useNavigation } from '@react-navigation/native';

export default function Index() {
    const navigation = useNavigation();

    // useFont
    const [loaded, error] = useFonts({
        'LeagueSpartan-Bold': require('../assets/fonts/LeagueSpartan-Bold.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Italic': require('../assets/fonts/Poppins-Italic.ttf'),
    });

    if (!loaded && !error) {
        return null;
    }

    return (
        <ImageBackground
            source={require('../assets/images/sfondo1-img.png')}
            resizeMode={"cover"}
            style={styles.container}>
            <Text style={[styles.text1, {fontFamily: "LeagueSpartan-Bold"}]}>
                Welcome to
            </Text>
            <Image
                source={require('../assets/images/logo.png')}
                width={10}
                height={10}
            />
            <Text style={[styles.text2, {fontFamily: "Poppins-Bold"}]}>
                FIT<Text style={[styles.text3, {fontFamily: "Poppins-Italic"}]}>BODY</Text>
            </Text>
            <Button title={"Vai next"} onPress={() => {
                console.log('Navigating to Home...');
                navigation.navigate('Home');
            }} />
        </ImageBackground>
    );
}