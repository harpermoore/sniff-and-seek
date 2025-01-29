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
        <View
          style={{
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#B50000", fontWeight: 600 }}>Search</Text>
          <FontAwesome name="search" size={20} color="#B50000" />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
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
    backgroundColor: "#ffff",
    borderRadius: 60,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#050505",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.18,
    shadowRadius: 5,
    marginTop: 16,
  },
});
