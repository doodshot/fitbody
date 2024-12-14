import * as React from 'react';
import { registerRootComponent } from "expo";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "@/app/screens/Login";
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnBoarding from "@/app/Navigation/OnBoarding";
import {useEffect, useState} from "react";
import {View, Text} from "react-native";

export enum Routes {
    OnBoarding = "OnBoarding",
    Login = "Login"
}

export type RootStackParamList = {
    OnBoarding: undefined;
    Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={Routes.OnBoarding}
                screenOptions={{ headerShown: false }}
            >

                <Stack.Screen
                    name={Routes.OnBoarding}
                    component={OnBoarding}
                />

                <Stack.Screen
                    name={Routes.Login}
                    component={Login}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

registerRootComponent(Index);