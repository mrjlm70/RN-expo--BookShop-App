import React from "react";
import Toast from "react-native-tiny-toast";
import { View, StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import Screen from "../components/shared/Screen";
import { registerUser } from "./../api/users";
import {
    CustomForm,
    CustomFormField,
    SubmitButton,
} from "../components/forms";
import { loadingToast, customToast } from "../utils/toasts";

const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
    email: Yup.string()
        .required("این فیلد الزامی می باشد")
        .email("ایمیل معتبر نمی باشد"),
    password: Yup.string()
        .required("این فیلد الزامی می باشد")
        .min(4, "کلمه عبور نباید کمتر از 4 کاراکتر باشد"),
    passwordConfirmation: Yup.string()
        .required("تکرار کلمه عبور الزامی می باشد")
        .oneOf([Yup.ref("password"), null], "کلمه های عبور باید یکسان باشند"),
});

const RegisterScreen = ({ navigation }) => {
    const handleUserRegistration = async (user) => {
        try {
            loadingToast("ثبت نام کاربر...");
            const status = await registerUser(user);

            if (status === 201) {
                //navigation
                Toast.hide();
                navigation.navigate("Login", { successRegister: true });
            } else {
                //show error
                Toast.hide();
                customToast("خطایی رخ داده است");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />
            <CustomForm
                initialValues={{
                    fullname: "",
                    email: "",
                    password: "",
                    passwordConfirmation: "",
                }}
                onSubmit={(user) => {
                    // console.log(user);
                    handleUserRegistration(user);
                }}
                validationSchema={validationSchema}
            >
                <CustomFormField
                    placeholder="نام و نام خانوادگی"
                    autoCorrect={false}
                    icon="account-circle"
                    name="fullname"
                    placeholderTextColor="royalblue"
                />
                <CustomFormField
                    placeholder="ایمیل کاربری"
                    autoCompleteType="email"
                    autoCorrect={false}
                    keyboardType="email-address"
                    icon="email"
                    name="email"
                    placeholderTextColor="royalblue"
                />
                <CustomFormField
                    placeholder="کلمه عبور"
                    autoCorrect={false}
                    icon="onepassword"
                    name="password"
                    placeholderTextColor="royalblue"
                    secureTextEntry
                />
                <CustomFormField
                    placeholder="تکرار کلمه عبور"
                    autoCorrect={false}
                    icon="onepassword"
                    name="passwordConfirmation"
                    placeholderTextColor="royalblue"
                    secureTextEntry
                />
                <View style={{ width: "60%" }}>
                    <SubmitButton title="ثبت نام" />
                </View>
            </CustomForm>
        </Screen>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    logo: {
        width: 270,
        height: 200,
        marginTop: 20,
        marginBottom: 40,
    },
});
