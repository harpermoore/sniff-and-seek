import LottieView from "lottie-react-native";
import { View, StyleSheet, Text } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Loading...</Text>
      </View>
      <LottieView
        source={require("../assets/images/SplashScreen.json")}
        autoPlay={true}
        loop={true}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B50000",
    alignItems: "center",
    justifyContent: "center",
  },
  textWrapper: {
    marginTop: 200,
  },
  text: {
    fontSize: 32,
    fontWeight: 800,
    color: "#ffffff",
  },
});
