import { StyleSheet, View, StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import { LoginContainer } from "./components/LoginContainer";
import { Home } from "./components/Home";

export default function App() {
  return (
    <View style={AppPage.background}>
      <LoginContainer />
    </View>
  );
}

const AppPage = StyleSheet.create({
  background: {
    backgroundColor: "#1fb4a1",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight - 20,
  },
});
