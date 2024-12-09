import * as React from 'react';
import { registerRootComponent } from "expo";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import OnBoardingMen from "./screens/OnBoardingMen";
import {OnBoardingWomen} from "./screens/onBoardingWomen";
import {OnBoardingCommunity} from "@/app/screens/OnBoardingCommunity";

enum Routes {
    Home = "Home",
    OnBoardingMen = "OnBoardingMen",
    OnBoardingWomen = "OnBoardingWomen",
    OnBoardingCommunity = "OnBoardingCommunity",
}

export type RootStackParamList = {
    Home: undefined;
    OnBoardingMen: undefined;
    OnBoardingWomen: undefined;
    OnBoardingCommunity: undefined;
}

const Stack = createNativeStackNavigator();

export default function Index() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={Routes.Home}
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name={Routes.Home}
                    component={Home}
                />
                <Stack.Screen
                    name={Routes.OnBoardingMen}
                    component={OnBoardingMen}
                />
                <Stack.Screen
                    name={Routes.OnBoardingWomen}
                    component={OnBoardingWomen}
                />
                <Stack.Screen
                    name={Routes.OnBoardingCommunity}
                    component={OnBoardingCommunity}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

registerRootComponent(Index);
