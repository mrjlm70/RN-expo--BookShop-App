import React from "react";
import { StyleSheet } from "react-native";
import CustomText from "./../shared/CustomText";

const ErrorMessage = ({ error, visible }) => {
    if (!visible || !error) return null;

    return (
        <CustomText fontFamily="ih" size="1.5" styles={styles.error}>
            {error}
        </CustomText>
    );
};

export default ErrorMessage;

const styles = StyleSheet.create({
    error: {
        color: "red",
    },
});
