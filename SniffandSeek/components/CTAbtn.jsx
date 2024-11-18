import { Pressable, Text, StyleSheet } from "react-native";
import Foundation from "@expo/vector-icons/Foundation";

export default function CTAbtn({ children }) {
  return (
    <Pressable style={styles.btn}>
      <Foundation name="paw" size={24} color="#ffff" />
      <Text style={styles.btnText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 24,
    backgroundColor: "#B50000",
    width: 360,
    paddingHorizontal: 24,
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 24,
    gap: 18,
  },
  btnText: {
    fontSize: 24,
    color: "#ffff",
    fontWeight: "600",
  },
});
