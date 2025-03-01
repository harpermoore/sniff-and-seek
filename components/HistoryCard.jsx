import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function HistoryCard() {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        gap: 24,
        paddingLeft: 48,
      }}
    >
      <View style={styles.container}>
        <Text>Name</Text>
      </View>
      <View style={styles.container}>
        <Text>Name</Text>
      </View>
      <View style={styles.container}>
        <Text>Name</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    width: 140,
    height: 180,
    borderRadius: 12,
    shadowColor: "#050505",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
  },
});
