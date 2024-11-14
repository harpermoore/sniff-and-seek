import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const width = Dimensions.get("screen");
const reportImg = require("../../assets/images/Report.png");

export default function report() {
  return (
    <View>
      <Image style={styles.img} source={reportImg} />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.heading}>Report Stray animals</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>Report History</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  card: {
    backgroundColor: "#B50000",
    width: 360,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    borderCurve: "continuous",
  },
  heading: {
    fontSize: 32,
    color: "#fff",
  },
  img: {
    width: "100%",
    height: 260,
  },
});
