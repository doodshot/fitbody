import * as React from 'react';
import {registerRootComponent} from "expo";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import OnBoardingMen from "./screens/OnBoardingMen";
import {onBoardingWomen} from "./screens/onBoardingWomen";

enum  Routes {
    home = "Home",
    onBoardingMen = "OnBoardingMen",
    onBoardingWomen = "OnBoardingWomen",
}

type RootStackParamList = {
    Home: undefined;
    OnBoardingMen: undefined;
    OnBoardingWomen: undefined;
};

export default function Index() {
const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="OnBoardingMen"
                    component={OnBoardingMen}
                />
                <Stack.Screen
                    name="onBoardingWomen"
                    component={onBoardingWomen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

registerRootComponent(Index);
