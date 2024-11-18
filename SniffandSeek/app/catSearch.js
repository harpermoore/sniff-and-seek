import { FlatList, View, Text, StyleSheet, ScrollView } from "react-native";
import { useState, useEffect } from "react-native";
import LocationInput from "../components/LocationInput";

export default function catSearch() {
  useEffect();

  return (
    <ScrollView>
      <View style={styles.cardContainer}>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 260,
    width: 160,
    borderWidth: 1,
    borderColor: "#8888",
    borderRadius: 24,
    borderCurve: "continuous",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
});
