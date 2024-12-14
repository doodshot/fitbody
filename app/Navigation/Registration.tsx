import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "@/app/screens/Login";
import * as React from "react";
import {Routes} from "@/app";
import OnBoarding from "@/app/Navigation/OnBoarding";


const Stack = createNativeStackNavigator();


const Registration = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={Routes.Login}
                component={Login}/>
        </Stack.Navigator>
    )

}

export default Registration