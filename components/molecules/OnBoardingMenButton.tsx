import { TouchableOpacity, View, Text } from 'react-native'; // Aggiungi Text
import styles from './OnBoardingMenButtonStyle';


interface OnBoardingMenButtonProps {
    title: string;
    onPress: () => void;
}

const OnBoardingMenButton = ({title, onPress} : OnBoardingMenButtonProps) => {
    return (
         <TouchableOpacity onPress={onPress}>

             <View style={styles.container}>
                 <Text style={styles.title}> {title} </Text>
             </View>
         </TouchableOpacity>
    )
}

export default OnBoardingMenButton;