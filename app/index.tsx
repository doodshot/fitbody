import {ImageBackground, Text, View, Image} from "react-native";
import { styles } from "@/components/Atoms/ViewStyles";
import {useFonts} from "expo-font";
import {SplashScreen} from "expo-router";

export default function Index() {

    //useFont
    const [loaded, error] = useFonts({
        'LeagueSpartan-Bold': require('../assets/fonts/LeagueSpartan-Bold.ttf'),
    });
    if (!loaded && !error) { // ritorna null ogni volta che non carica il font
        return null;
    }
    return (
       <ImageBackground source={require('../assets/images/sfondo1-img.png')}
            resizeMode={"cover"}
            style={styles.container}>
           <Text style={[styles.text1, {fontFamily: "LeagueSpartan-Bold"}]}>
               Welcome to
           </Text>
           <Image source={require('../assets/images/logo.png')} width={182} height={84} />
       </ImageBackground>
    );
}