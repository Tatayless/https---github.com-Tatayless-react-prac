import { StyleSheet } from "react-native";

export const loginPage = StyleSheet.create({
  loginContainer: {
    backgroundColor: "whitesmoke",
    width: "94%",
    height: "94%",
    borderRadius: 15,
    flexDirection: "column",
  },
  logo: {
    position: "relative",
    top: "15%",
    alignItems: "center",
    gap: 10,
  },
  logoImage: {
    width: 180,
    height: 180,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1fb4a1",
  },
});
