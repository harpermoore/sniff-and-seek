import { View, ScrollView, Text, StyleSheet } from "react-native";
import InfoBlock from "./InfoBlock";

export default function InfoSection({ name }) {
  return (
    <ScrollView>
      <Text style={styles.heading}>{name}</Text>
      <InfoBlock />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 48,
    fontWeight: "600",
  },
});
