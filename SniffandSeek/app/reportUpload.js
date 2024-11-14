import { View, Text, StyleSheet, Pressable } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function reportUpload() {
  return (
    <View style={styles.container}>
      <Pressable>
        <View style={styles.field}>
          <FontAwesome5 name="cloud-upload-alt" size={64} color="#B50000" />
        </View>
      </Pressable>
      <Text style={styles.heading}>Upload image</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  field: {
    marginTop: 32,
    width: 360,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 8,
    borderColor: "#8888",
    borderStyle: "dotted",
    borderRadius: 16,
  },
  heading: {
    fontSize: 18,
  },
});
