import { View, Dimensions, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";

const { width } = Dimensions.get("screen");

export default function SliderItem({ index, imgUri, scrollX }) {
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.25, 0, width * 0.25],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  console.log(imgUri);

  return (
    <Animated.View style={[style.container, rnAnimatedStyle]}>
      {imgUri ? <Image style={style.image} source={{ uri: imgUri }} /> : null}

      <LinearGradient
        colors={["transparent", "rgba(255, 255, 255, 0.3)"]}
        style={style.background}
      />
    </Animated.View>
  );
}

const style = StyleSheet.create({
  container: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  image: {
    width: 300,
    height: 500,
    borderRadius: 20,
  },
  background: {
    position: "absolute",
    width: 300,
    height: 500,
    borderRadius: 20,
  },
});
