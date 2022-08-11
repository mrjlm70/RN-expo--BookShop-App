import React, { useEffect } from "react";
import { TouchableOpacity, StyleSheet, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Screen from "./../components/shared/Screen";
import Card from "./../components/shared/Card";
import { useSelector } from "react-redux";
import { decodeToken } from "../utils/token";

const CoursesScreen = ({ navigation }) => {
    const courses = useSelector((state) => state.courses);

    useEffect(() => {
        const myFunc = async () => {
            const token = await AsyncStorage.getItem("token");
            console.log(decodeToken(token));
        };
        myFunc();
    }, []);

    return (
        <Screen style={styles.container}>
            <FlatList
                data={courses}
                keyExtractor={(course) => course._id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("CourseDetails", {
                                course: item,
                            })
                        }
                    >
                        <Card
                            title={item.title}
                            price={item.price}
                            image={item.imageUrl}
                            info={item.info}
                        />
                    </TouchableOpacity>
                )}
            />
        </Screen>
    );
};

export default CoursesScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f8f4f4",
    },
});
