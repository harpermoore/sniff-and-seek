import { View, Text, StyleSheet, Pressable } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Link } from "expo-router";

export default function AdoptableNavigation() {
  return (
    <View style={styles.container}>
      <Link href={"catSearch"} asChild>
        <Pressable>
          <View style={styles.btn}>
            <FontAwesome5 name="cat" size={42} color="#ffff" />
            <Text style={styles.btnText}>Cats</Text>
          </View>
        </Pressable>
      </Link>

      <Link href={"dogSearch"} asChild>
        <Pressable>
          <View style={styles.btn}>
            <FontAwesome5 name="dog" size={42} color="#ffff" />
            <Text style={styles.btnText}>Dogs</Text>
          </View>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flexDirection: "row",
    gap: 46,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#B50000",
    width: 120,
    height: 120,
    borderRadius: 32,
    borderCurve: "continuous",
  },
  btnText: {
    fontSize: 20,
    color: "#ffff",
  },
});
