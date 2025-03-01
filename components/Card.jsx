import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useEffect } from "react";
import { Link } from "expo-router";
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import Foundation from "@expo/vector-icons/Foundation";

const placeholderdog = require("../assets/images/placeholderdog.png");
const placeholdercat = require("../assets/images/placeholdercat.png");

export default function Card({
  animalName,
  animalID,
  animalBreed,
  imgUri,
  haveImg,
  species,
  age,
  isLoading,
}) {
  if (isLoading) {
    return (
      <MotiView
        transition={{
          type: "timing",
        }}
        style={styles.motiContainer}
        animate={{ backgroundColor: "#ffffff" }}
      >
        <Skeleton colorMode="light" width={160} height={280} />
      </MotiView>
    );
  }

  return (
    <Link href={`/${animalID}`} asChild>
      <Pressable>
        <View style={styles.container}>
          {haveImg ? (
            <Image
              style={styles.imgStyle}
              source={{ uri: imgUri }}
              resizeMode="cover"
            />
          ) : (
            <Image
              style={styles.imgStyle}
              source={species === "dogs" ? placeholderdog : placeholdercat}
              resizeMode="cover"
            />
          )}

          {/* Animal name */}
          <View style={styles.textContainer}>
            <Text numberOfLines={1}>{animalName}</Text>

            <View
              style={{
                flexDirection: "row",
                gap: 6,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <Foundation name="paw" size={24} color="#B50000" />
              <Text>{age ? age : "unknown"}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
    width: 160,
    height: 280,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#e6e6e6",
    borderWidth: 0.5,
    overflow: "hidden",
    paddingBottom: 12,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  motiContainer: {
    marginTop: 20,
    alignItems: "center",
    width: 160,
    height: 280,
    borderRadius: 10,
  },
  imgStyle: {
    width: "100%",
    height: 200,
    margin: 0,
    padding: 0,
  },
  textContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  buttonStyle: {
    backgroundColor: "#333",
    marginTop: 10,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 20,
    overflow: "hidden",
  },
  textStyle: {
    color: "#fff",
    overflow: "hidden",
  },
});
