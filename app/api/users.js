import AsyncStorage from "@react-native-async-storage/async-storage";

import http from "./";

export const registerUser = async (user) => {
    try {
        const { status } = await http.post(
            `${http.url}/register`,
            JSON.stringify(user)
        );
        console.log(status);
        return status;
    } catch (err) {
        console.log(err);
    }
};

export const loginUser = async (user) => {
    try {
        const { data, status } = await http.post(
            `${http.url}/login`,
            JSON.stringify(user)
        );
        await AsyncStorage.setItem("token", JSON.stringify(data.token));
        await AsyncStorage.setItem("userId", JSON.stringify(data.userId));
        return status;
    } catch (err) {
        console.log(err);
    }
};
