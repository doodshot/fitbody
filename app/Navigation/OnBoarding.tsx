import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/app/screens/Home";
import OnBoardingMen from "@/app/screens/OnBoardingMen";
import { OnBoardingWomen } from "@/app/screens/onBoardingWomen";
import { OnBoardingCommunity } from "@/app/screens/OnBoardingCommunity";
import * as React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export enum OnBoardingRoutes {
    Home = "Home",
    OnBoardingMen = "OnBoardingMen",
    OnBoardingWomen = "OnBoardingWomen",
    OnBoardingCommunity = "OnBoardingCommunity"
}

export type OnBoardingStackParamList = {
    Home: undefined;
    OnBoardingMen: undefined;
    OnBoardingWomen: undefined;
    OnBoardingCommunity: undefined;
};

const Stack = createNativeStackNavigator<OnBoardingStackParamList>();

const OnBoarding = () => {
    return (
        <Stack.Navigator
            initialRouteName={OnBoardingRoutes.Home}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name={OnBoardingRoutes.Home}
                component={Home}
            />
            <Stack.Screen
                name={OnBoardingRoutes.OnBoardingMen}
                component={OnBoardingMen}
            />
            <Stack.Screen
                name={OnBoardingRoutes.OnBoardingWomen}
                component={OnBoardingWomen}
            />
            <Stack.Screen
                name={OnBoardingRoutes.OnBoardingCommunity}
                component={OnBoardingCommunity}
            />
        </Stack.Navigator>
    );
};

export default OnBoarding;