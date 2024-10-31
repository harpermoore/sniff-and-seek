import { View, Text, StyleSheet } from "react-native";
import Label from "./Label";

export default function InfoBlock({ label, content }) {
  return (
    <View>
      <Label>{label}</Label>
      <Text style={styles.textStyle}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
  },
});
