import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { loginForm } from "../stylesheets/loginForm";
import React from "react";
import { logOut } from "./Login";

export function Home() {
  return (
    <View style={styles.background}>
      <Text>Home</Text>
      <TouchableOpacity onPress={logOut} style={loginForm.button}>
        <Text style={loginForm.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "98%",
    height: "94%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
  },
});
