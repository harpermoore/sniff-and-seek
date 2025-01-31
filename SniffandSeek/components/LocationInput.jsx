import {
  TextInput,
  View,
  StyleSheet,
  Pressable,
  Text,
  Animated,
} from "react-native";
import { useRef } from "react";
import * as Haptics from "expo-haptics";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function LocationInput({
  location,
  setLocation,
  submittedValue,
  setSubmittedValue,
}) {
  const btnScale = useRef(new Animated.Value(1)).current;

  const handleBtnPress = () => {
    btnScale.setValue(1);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Animated.spring(btnScale, {
      toValue: 0.96,
      friction: 15,
      tension: 10,
      useNativeDriver: true,
    }).start(() => {
      setSubmittedValue(location);
    });
  };

  const handleBtnPressOut = () => {
    Animated.spring(btnScale, {
      toValue: 1,
      friction: 15,
      tension: 10,
      useNativeDriver: true,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoComplete="postal-code"
        style={styles.inputStyle}
        placeholder="Enter your ZIP code"
        value={location}
        onChangeText={(input) => setLocation(input)}
      />

      {/* Search btn */}
      <Pressable onPressIn={handleBtnPress} onPressOut={handleBtnPressOut}>
        <Animated.View
          style={[styles.btnContainer, { transform: [{ scale: btnScale }] }]}
        >
          <Text style={{ color: "#B50000", fontWeight: 600 }}>Search</Text>
          <FontAwesome name="search" size={20} color="#B50000" />
        </Animated.View>
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
  btnContainer: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
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
