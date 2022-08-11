import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";

const CustomButton = ({ title, onPress, color="#bd93f9" }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color }]}
            onPress={onPress}
        >
            <CustomText fontFamily="ih" size="2" styles={styles.text}>
                {title}
            </CustomText>
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#bd93f9",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 5,
    },
    text: {
        color: "white",
    },
});
