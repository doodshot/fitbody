import {ImageBackground, Text, View, Image, StatusBar} from "react-native";
import { styles } from "@/components/Atoms/ViewStyles";
import {useFonts} from "expo-font";
import {SplashScreen} from "expo-router";

export default function Index() {

    //useFont
    const [loaded, error] = useFonts({
        'LeagueSpartan-Bold': require('../assets/fonts/LeagueSpartan-Bold.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Italic': require('../assets/fonts/Poppins-Italic.ttf'),
    });
    if (!loaded && !error) { // ritorna null ogni volta che non carica il font
        return null;
    }
    return (
       <ImageBackground source={require('../assets/images/sfondo1-img.png')}
            resizeMode={"cover"}
            style={styles.container}>
           <StatusBar hidden={true} /> // nascondo la status bar
           <Text style={[styles.text1, {fontFamily: "LeagueSpartan-Bold"}]}>
               Welcome to
           </Text>
           <Image source={require('../assets/images/logo.png')} width={10} height={10} />
           <Text style={[styles.text2, {fontFamily: "Poppins-Bold"}]}>
               FIT<Text style={[styles.text3, {fontFamily: "Poppins-Italic"}]}>BODY</Text>
           </Text>
       </ImageBackground>
    );
}