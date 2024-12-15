import {View, Text, Image, StyleSheet, TextInput} from "react-native";
import LogInBtn from "@/components/molecules/btn/LogInBtn";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "@/app";
import {OnBoardingStackParamList} from "@/app/Navigation/OnBoarding";


export default function  Login() {

    const navigation = useNavigation<NavigationProp<OnBoardingStackParamList>>();

    const onLogin = () => {
         navigation.navigate('OnBoardingWomen')
    }
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
            <Image source={require('../../assets/images/icona-freccia.png')}
            resizeMode='contain'
            >
            </Image>
                <Text style={styles.textTitle}>
                    Log In
                </Text>
            </View>
            <View style={styles.containerTextWelcome}>
                <Text style={styles.textWelcomeStyle}>
                    Welcome
                </Text>
                <Text style={styles.loremIpsium}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
            </View>
            <View style={styles.containerForm}>

                {/* email insert */}
                <View>
                    <Text style={styles.textEmailPassword}>
                        Email
                    </Text>
                    <TextInput style={styles.input} placeholder={"Email"} />
                </View>
                {/* password insert */}
                <View>
                    <Text style={styles.textEmailPassword}>
                     Password
                    </Text>
                    <TextInput style={styles.input} placeholder={"Password"} secureTextEntry={true} />
                </View>
                {/* Forgot insert */}
                <View style={styles.forgotElement}>
                    <Text>
                        Forgot Password?
                    </Text>
                </View>
            </View>
            {/* finish container form*/}
            <View style={styles.loginBtn}>
                <LogInBtn onPress={onLogin} title={"Log In"}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#232323',
        alignItems: 'flex-start',
        paddingTop: 100
    },
    containerTitle: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 24
    },
    textTitle: {
        color: '#E2F163',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold',
        position: 'absolute',
        left: '47%',
    },
    containerTextWelcome: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 80
    },
    textWelcomeStyle: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold',
    },
    loremIpsium: {
        color: '#ffffff',
        paddingTop: 20,
        fontSize: 14,
        fontWeight: 'regular',
        fontFamily: 'league-spartan',
        textAlign: 'center',
        width: 323,
    },
    containerForm: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B3A0FF',
        width: '100%',
        height: 180,
        position: 'absolute',
        top: '50%',
    },
    textEmailPassword: {
        textAlign: 'left',
        fontWeight: 500,
        fontFamily: 'poppins',
        padding: 5
    },
    input: {
        padding: 10,
        backgroundColor: 'white',
        width: 300,
        borderRadius: 15
    },
    forgotElement: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '70%',
        paddingTop: 8,
    },
    loginBtn: {
    }
})