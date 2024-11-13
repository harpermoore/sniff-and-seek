import { TextInput, View, StyleSheet, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

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
        placeholder="Enter your ZIP code"
        value={location}
        onChangeText={(input) => setLocation(input)}
      />
      <Pressable
        style={styles.buttonStyle}
        onPress={() => setSubmittedValue(location)}
      >
        <FontAwesome name="search" size={20} color="#ffff" />
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
    width: 300,
    backgroundColor: "#fff",
    borderColor: "#8888",
    padding: 12,
    borderWidth: 1,
    borderRadius: 16,
    borderCurve: "continuous",
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: "#B50000",
    borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 60,
    padding: 12,
  },
  textStyle: {
    color: "#fff",
  },
});
