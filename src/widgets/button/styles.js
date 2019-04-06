import { StyleSheet } from "react-native";
import * as colors from "../../commons/colors";

export default StyleSheet.create({
  button: {
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.navBar
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.white
  }
});
