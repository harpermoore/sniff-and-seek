import {
  Pressable,
  StyleSheet,
  View,
  Animated,
  useAnimatedValue,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useAuth } from "../context/AuthContext";
import { useRef, useState } from "react";

export default function LikeBtn({ animalID, modalVisable, setModalVisible }) {
  const { likedList, setLikedList } = useAuth();
  const btnScale = useRef(new Animated.Value(1)).current;
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPressed, setIsPressed] = useState(false); //control like icon

  // IS LIKED OR NOT LIKED YET?

  const handleLiked = () => {
    setLikedList((prevList) => {
      const updatedList = [...prevList, animalID];
      console.log(updatedList); // Logging the updated list directly
      return updatedList;
    });
    setModalVisible(true);
  };

  const handlePressIn = () => {
    if (!isAnimating) {
      Animated.spring(btnScale, {
        toValue: 1, // 將 scale 從 1 動畫到 2
        friction: 5,
        tension: 100,
        useNativeDriver: true, // 啟用原生驅動
      }).start(() => {
        setIsAnimating(false);
      });
      setIsPressed(true);
      handleLiked();
    }
  };

  const handlePressOut = () => {
    if (!isAnimating) {
      Animated.spring(btnScale, {
        toValue: 1.05, // 將 scale 從 1 動畫到 2
        friction: 5,
        tension: 100,
        useNativeDriver: true, // 啟用原生驅動
      }).start(() => {
        setIsAnimating(false);
      });
      // setIsPressed(false);
    }
  };

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View
        style={[styles.circle, { transform: [{ scale: btnScale }] }]}
      >
        {isPressed ? (
          <Ionicons name="heart-sharp" size={36} color="#ffff" />
        ) : (
          <Ionicons name="heart-outline" size={36} color="#ffff" />
        )}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 64,
    height: 64,
    backgroundColor: "#B50000",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#050505",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 5,
  },
});
