import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import RenderHtml from "react-native-render-html";

export default function ResourceCard({ eventName, eventDescription, imgUrl }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imgStyle} source={imgUrl} />
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{eventName}</Text>
        <Text numberOfLines={3}>{eventDescription}</Text>
      </View>

      <Pressable style={styles.btn}>
        <Text style={{ color: "#ffff", fontSize: 16 }}>Learn more</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: "auto",
    borderWidth: 0.5,
    borderColor: "#e6e6e6",
    borderRadius: 16,
    borderCurve: "continuous",
    alignItems: "center",
    backgroundColor: "#ffff",
    overflow: "hidden",
    paddingBottom: 26,
  },
  textContainer: {
    marginTop: 16,
    paddingHorizontal: 24,
  },
  imgStyle: {
    width: 360,
    height: 180,
    margin: 0,
    padding: 0,
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 8,
  },
  btn: {
    marginTop: 24,
    backgroundColor: "#B50000",
    paddingHorizontal: 48,
    paddingVertical: 12,
    borderRadius: 20,
    borderCurve: "continuous",
  },
});
