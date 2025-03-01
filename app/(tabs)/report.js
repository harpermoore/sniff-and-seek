import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const width = Dimensions.get("screen");

export default function report() {
  return (
    <View>
      <View style={styles.container}>
        <Link href={"reportUpload"}>
          <View style={styles.card}>
            <Text style={styles.heading}>Report Stray Animals</Text>
            <View style={styles.icon}>
              <AntDesign name="arrowright" size={32} color="#ffff" />
            </View>
          </View>
        </Link>

        <View style={styles.card}>
          <Text style={styles.heading}>Report Missing Animals</Text>
          <View style={styles.icon}>
            <AntDesign name="arrowright" size={32} color="#ffff" />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>My Report History</Text>
          <View style={styles.icon}>
            <AntDesign name="arrowright" size={32} color="#ffff" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  card: {
    backgroundColor: "#B50000",
    flexDirection: "row",
    gap: 12,
    width: 380,
    height: 160,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    borderCurve: "continuous",
  },
  heading: {
    fontSize: 28,
    color: "#fff",
  },
  img: {
    width: "100%",
    height: 260,
  },
  icon: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#ffff",
    padding: 3,
    justifyContent: "center",
  },
});
