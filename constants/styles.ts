import { StyleSheet } from "react-native";
const GlobalStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.light.background,
    padding: 20,
  },
  titleText: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.light.textPrimary,
    textAlign: "center",
    marginBottom: 20,
  },
  buttonPrimary: {
    backgroundColor: Colors.light.accentGreen,
    borderRadius: 12,
    padding: 15,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
});
export default GlobalStyles;
