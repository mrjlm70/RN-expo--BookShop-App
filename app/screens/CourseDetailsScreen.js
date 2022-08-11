import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import Screen from "./../components/shared/Screen";
import Card from "./../components/shared/Card";

const CourseDetailsScreen = ({ navigation, route }) => {
    if (!route.params.course) return null;

    navigation.setOptions({
        headerShown: true,
        title: route.params.course.title,
        headerTitleStyle: {
            fontFamily: "yekan",
            fontSize: RFPercentage(2.5),
            color: "white",
        },
        headerStyle: {
            backgroundColor: "#ff79c6",
        },
    });
    const { _id, title, price, imageUrl, info } = route.params.course;

    return (
        <Screen style={styles.container}>
            <Card
                title={title}
                price={price}
                image={imageUrl}
                courseInfo={info}
            />
        </Screen>
    );
};

export default CourseDetailsScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        backgroundColor: "#f8f4f4",
    },
});
