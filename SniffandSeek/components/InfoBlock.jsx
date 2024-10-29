import { View, Text, StyleSheet } from "react-native";
import Label from "./Label";

export default function InfoBlock() {
  return (
    <View>
      <Label>Label name</Label>
      <Text style={styles.textStyle}>Text content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 12,
  },
});
