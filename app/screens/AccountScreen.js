import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { StackActions } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Screen from "./../components/shared/Screen";
import Icon from "../components/shared/Icon";
import ItemSeparator from "./../components/shared/ItemSeparator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomText from "./../components/shared/CustomText";

const AccountScreen = ({ navigation }) => {
    const [getImage, setImage] = useState(null);

    useEffect(() => {
        const loadingImage = async () => {
            const imageUri = await AsyncStorage.getItem("Image");
            if (imageUri !== null) {
                setImage(imageUri);
            }
        };
        loadingImage();
    }, []);

    const user = useSelector((state) => state.user);

    const handleLogout = async () => {
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("userId");
        navigation.dispatch(StackActions.replace("Welcome"));
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            await AsyncStorage.setItem("Image", result.uri);
            setImage(result.uri);
        }
    };

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <TouchableOpacity onPress={pickImage}>
                    {getImage ? (
                        <Image
                            source={{ uri: getImage }}
                            style={styles.image}
                        />
                    ) : (
                        <Image
                            style={styles.image}
                            source={require("../assets/favicon.png")}
                        />
                    )}
                </TouchableOpacity>
                <View style={styles.details}>
                    <CustomText fontFamily="ih" size="2">
                        {user.fullname}
                    </CustomText>
                    <CustomText
                        fontFamily="yekan"
                        size="1.5"
                        styles={styles.subTitle}
                    >
                        {user.email}
                    </CustomText>
                </View>
                <TouchableOpacity onPress={() => {}} style={styles.settings}>
                    <Icon name="settings" backgroundColor="#bd93f9" />
                </TouchableOpacity>
            </View>
            <ItemSeparator height={10} />
            <TouchableHighlight underlayColor="#f8f4f4" onPress={handleLogout}>
                <View style={styles.container}>
                    <Icon name="logout" backgroundColor="#bd93f9" />
                    <View style={styles.details}>
                        <CustomText fontFamily="ih" size="2">
                            خروج از حساب کاربری
                        </CustomText>
                    </View>
                </View>
            </TouchableHighlight>
        </Screen>
    );
};

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 20,
        padding: 15,
    },
    screen: {
        backgroundColor: "#f8f4f4",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 35,
    },
    details: {
        marginLeft: 10,
        justifyContent: "center",
    },
    subTitle: {
        color: "#6e6969",
    },
    settings: {
        alignSelf: "center",
        marginLeft: 20,
    },
});
