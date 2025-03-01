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
    width: "auto",
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    marginBottom: 12,
    borderRadius: 16,
    backgroundColor: "#B50000",
  },
  textStyle: {
    color: "#fff",
  },
});
