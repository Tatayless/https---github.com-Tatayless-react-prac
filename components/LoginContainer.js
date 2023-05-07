import { View, Image, Text } from "react-native";
import { Login } from "./Login";
import { loginPage } from "../stylesheets/loginPage";
import React from "react";

export function LoginContainer() {
  return (
    <View style={loginPage.loginContainer}>
      <View style={loginPage.logo}>
        <Image
          style={loginPage.logoImage}
          source={require("../assets/logo.png")}
        />
        <Text style={loginPage.logoText}>Satiate</Text>
        <Login />
      </View>
    </View>
  );
}
