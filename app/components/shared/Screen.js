import React from "react";
import Constans from "expo-constants";
import { View, StyleSheet } from "react-native";

const Screen = ({ children, style }) => {
    return <View style={[styles.screen, style]}>{children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
    screen: {
        marginTop: Constans.statusBarHeight,
        flex: 1,
    },
});
