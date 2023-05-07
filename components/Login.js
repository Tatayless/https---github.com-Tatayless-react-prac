import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import {
  AuthErrorCodes,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../firebaseConfig";
import { loginForm } from "../stylesheets/loginForm";

export const auth = getAuth(app);

export const logOut = async () => {
  await signOut(auth);
};

export function Login() {
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passInputValue, setPassInputValue] = useState("");
  const [notifOpacityValue, setNotifOpacityValue] = useState(0);
  const [notifMessageValue, setNotifMessageValue] = useState("");
  const [notifColorValue, setNotifColorValue] = useState("");

  const loginEmailPass = async () => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        emailInputValue,
        passInputValue
      );
      setNotifColorValue("lightgreen");
      setNotifMessageValue("User logged in!");
      setNotifOpacityValue(1);
      monitorAuthState();
    } catch (error) {
      if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
        setNotifColorValue("red");
        setNotifMessageValue("Wrong Password!");
        setNotifOpacityValue(1);
      } else {
        setNotifColorValue("red");
        setNotifMessageValue("Error!");
        setNotifOpacityValue(1);
      }
    }
  };

  const signUpEmailPass = async () => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        emailInputValue,
        passInputValue
      );
      setNotifColorValue("lightgreen");
      setNotifMessageValue("User created!");
      setNotifOpacityValue(1);
    } catch (error) {
      setNotifColorValue("red");
      setNotifMessageValue("Error!");
      setNotifOpacityValue(1);
    }
  };

  return (
    <View style={loginForm.container}>
      <TextInput
        value={emailInputValue}
        onChangeText={(email) => setEmailInputValue(email)}
        style={loginForm.input}
        placeholder="Email"
      />

      <TextInput
        secureTextEntry={true}
        value={passInputValue}
        onChangeText={(pass) => setPassInputValue(pass)}
        style={loginForm.input}
        placeholder="Password"
      />

      <Text
        style={[
          loginForm.wrongPassText,
          { opacity: notifOpacityValue },
          { color: notifColorValue },
        ]}
      >
        {notifMessageValue}
      </Text>

      <TouchableOpacity onPress={loginEmailPass} style={loginForm.button}>
        <Text style={loginForm.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={signUpEmailPass} style={loginForm.button}>
        <Text style={loginForm.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
