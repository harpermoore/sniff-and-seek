import { TextInput, View, StyleSheet, Pressable, Text } from "react-native";

export default function LocationInput({
  location,
  setLocation,
  submittedValue,
  setSubmittedValue,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        autoComplete="postal-code"
        style={styles.inputStyle}
        placeholder="Enter your location"
        value={location}
        onChangeText={(input) => setLocation(input)}
      />
      <Pressable
        style={styles.buttonStyle}
        onPress={() => setSubmittedValue(location)}
      >
        <Text style={styles.textStyle}>Search</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  inputStyle: {
    width: 260,
    backgroundColor: "#fff",
    padding: 12,
    borderWidth: 1,
    borderRadius: 16,
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: "#333",
    borderRadius: 40,
    padding: 16,
  },
  textStyle: {
    color: "#fff",
  },
});
