import React from "react";
import CustomText from "./CustomText";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { numberWithCommas } from "../../utils/price";

const Card = ({ title, price, teacher, time, image, courseInfo = null }) => {
    return (
        <View style={styles.card}>
            <Image
                resizeMode="contain"
                source={{
                    uri: `${image}`,
                }}
                style={styles.courseImage}
            />
            <View style={{ padding: 20 }}>
                <CustomText fontFamily="yekan" size="2" styles={styles.title}>
                    {title}
                </CustomText>
                <View style={styles.courseDetails}>
                    <CustomText fontFamily="yekan" size="1.5">
                        قیمت کتاب :
                        {price === 0
                            ? " رایگان"
                            : ` ${numberWithCommas(price)} تومان`}
                    </CustomText>

                </View>
            </View>
            {courseInfo ? (
                <View style={{ flex: 1 }}>
                    <CustomText fontFamily="yekan" size="2.5">
                        توضیحات کتاب :
                    </CustomText>
                    <ScrollView>
                        <CustomText
                            fontFamily="ih"
                            size="1.7"
                            styles={styles.courseInformation}
                        >
                            {courseInfo}
                        </CustomText>
                    </ScrollView>
                </View>
            ) : null}
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderRadius: 15,
        backgroundColor: "white",
        marginBottom: 20,
    },
    courseImage: {
        width: "100%",
        height: 300,
    },
    courseDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    container: {
        flexDirection: "row",
        marginVertical: 20,
        padding: 15,
    },
    courseInformation: {
        textAlign: "justify",
        marginVertical: 10,
        lineHeight: 25,
    },
    screen: {
        backgroundColor: "#f8f4f4",
    },
    userContainer: {
        marginVertical: 10,
    },
    title: {
        marginBottom: 7,
        alignSelf: "center",
    },
    teacher: {
        alignSelf: "center",
    },
});
