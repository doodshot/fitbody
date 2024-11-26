import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from "@/app/index";
import OnBoardingMen from "@/app/screens/OnBoardingMen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Index"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="Index"
                    component={Index}
                />
                <Stack.Screen
                    name="Home"
                    component={OnBoardingMen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}