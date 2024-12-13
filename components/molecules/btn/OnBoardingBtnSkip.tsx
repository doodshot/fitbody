import {TouchableOpacity, View, StyleSheet, Text} from "react-native";
import {useFonts} from "expo-font";


interface OnBoardingBtnSkipProps {
    onPress: () => void
    title: String
}
const OnBoardingBtnSkip = ({onPress, title}: OnBoardingBtnSkipProps) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.contrainer}>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default OnBoardingBtnSkip;

const styles = StyleSheet.create({
    contrainer: {
        position: 'absolute',
        top: 50,
        right: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 18,
        textAlign: "center",
        color: '#E2F163',
        fontFamily: 'Poppins-italic',
        fontWeight: 'bold',
    }
})