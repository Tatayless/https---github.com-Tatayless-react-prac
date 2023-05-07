import { StyleSheet } from "react-native";

export const loginForm = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
  },
  input: {
    height: 40,
    width: 300,
    marginTop: 22,
    marginBottom: -12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    height: 40,
    width: 150,
    marginTop: 40,
    marginBottom: -30,
    borderWith: 1,
    padding: 10,
    backgroundColor: "#1fb4a1",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "whitesmoke",
  },
  wrongPassText: {
    fontSize: 14,
    marginTop: 25,
    marginBottom: -20,
  },
});
