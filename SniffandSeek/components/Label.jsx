import { View, StyleSheet, Text } from "react-native";

export default function Label({ children }) {
  return (
    <View style={styles.label}>
      <Text style={styles.textStyle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    width: 120,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    marginTop: 12,
    borderRadius: 20,
    backgroundColor: "#B50000",
  },
  textStyle: {
    color: "#fff",
  },
});
