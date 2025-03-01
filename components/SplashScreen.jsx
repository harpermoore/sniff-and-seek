import LottieView from "lottie-react-native";
import { View, StyleSheet, Text, Image } from "react-native";

const logo = require("../assets/images/LogoText.png");

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={{
          width: 340,
          height: 200,
          resizeMode: "contain",
          position: "absolute",
          top: 120,
        }}
      />
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
      <LottieView
        source={require("../assets/images/LoadingBar.json")}
        autoPlay={true}
        loop={true}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 120,
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
