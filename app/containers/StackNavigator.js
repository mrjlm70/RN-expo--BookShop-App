import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
    WelcomeScreen,
    LoginScreen,
    RegisterScreen,
    CourseDetailsScreen,
} from "../screens";
import TabsNavigator from "./TabsNavigator";

const StackNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                initialParams={{ successRegister: false }}
            />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Home" component={TabsNavigator} />
            <Stack.Screen
                name="CourseDetails"
                component={CourseDetailsScreen}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
