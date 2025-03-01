import { Pressable, StyleSheet, View, Animated } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAuth } from "../context/AuthContext";
import { useRef, useState } from "react";
import * as Haptics from "expo-haptics";

export default function LikeBtn({ animalID }) {
  const { likedList, setLikedList } = useAuth();
  const btnScale = useRef(new Animated.Value(1)).current;
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPressed, setIsPressed] = useState(
    likedList.includes(animalID) ? true : false
  ); //control like icon animation

  //Handle the likelist data
  const handleLike = () => {
    if (!likedList.includes(animalID)) {
      setLikedList((prevList) => {
        const updatedList = [...prevList, animalID];
        console.log("added" + updatedList); // Logging the updated list directly
        return updatedList;
      });

      handlePressIn();
    } else {
      setLikedList((prevList) => {
        const updatedList = prevList.filter((id) => id !== animalID);
        console.log("remove" + updatedList);
        return updatedList;
      });
      handlePressIn();
      setIsPressed(false);
    }
  };

  //btn animation when pressing in the btn
  const handlePressIn = () => {
    if (!isAnimating && !isPressed) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      Animated.spring(btnScale, {
        toValue: 1,
        friction: 5,
        tension: 100,
        useNativeDriver: true,
      }).start(() => {
        setIsAnimating(false);
      });
      setIsPressed(true);
    } else {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      Animated.spring(btnScale, {
        toValue: 1,
        friction: 5,
        tension: 100,
        useNativeDriver: true,
      }).start(() => {
        setIsAnimating(false);
      });
      setIsPressed(false);
    }
  };

  //btn animation when pressing out the btn
  const handlePressOut = () => {
    if (!isAnimating) {
      Animated.spring(btnScale, {
        toValue: 1.05,
        friction: 5,
        tension: 100,
        useNativeDriver: true,
      }).start(() => {
        setIsAnimating(false);
      });
    }
  };

  return (
    <Pressable onPressIn={handleLike} onPressOut={handlePressOut}>
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
