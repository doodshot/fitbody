import {TouchableOpacity, StyleSheet, Text} from "react-native";

interface LogInBtnProps {
    onPress: () => void
    title: String
}
export default function LogInBtn({onPress, title}:LogInBtnProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.containerBtnLogin}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    containerBtnLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        backgroundColor: '#00000040',
        height: 44,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#FFFFFF'
    },
    text: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        alignItems: 'center',
        color: '#FFFFFF'
    }
})