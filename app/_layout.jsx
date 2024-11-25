import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnBoardingMen} from "@/app/screens/OnBoardingMen";
import Index from "@/app/index";

const Stack = createNativeStackNavigator();

export default function() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Index">
                <Stack.Screen
                    name="Index"
                    component={Index}
                    options={{title: 'Welcome', headerShown: false}}
                />
                <Stack.Screen
                    name="OnBoardingMen"
                    component={OnBoardingMen}
                    options={{title: 'OnBoardingMen', headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}