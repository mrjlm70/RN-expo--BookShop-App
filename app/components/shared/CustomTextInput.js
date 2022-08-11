import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomTextInput = ({ icon, ...otherProps }) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.text} {...otherProps} />
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color="#6e6969"
                    style={styles.icon}
                />
            )}
        </View>
    );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightgray",
        borderRadius: 20,
        flexDirection: "row",
        width: "90%",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginLeft: 10,
        alignSelf: "center",
    },
    text: {
        fontSize: RFPercentage(2),
        fontFamily: "yekan",
        color: "#0c0c0c",
        textAlign: "center",
        width: "90%",
    },
});
