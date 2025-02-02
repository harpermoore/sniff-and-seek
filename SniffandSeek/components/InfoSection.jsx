import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
import { useContext, useState } from "react";
import LikeBtn from "../components/LikeBtn";
import BasicInfo from "./BasicInfo";
import Foundation from "@expo/vector-icons/Foundation";
import HistoryCard from "./HistoryCard";
import { AnimalContext } from "../context/AnimalProvider";

export default function InfoSection() {
  const { animalName: name, animalID } = useContext(AnimalContext);

  return (
    <ScrollView>
      <View style={{ alignItems: "center", paddingBottom: 48 }}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{name}</Text>

          <LikeBtn animalID={animalID} />
        </View>

        <BasicInfo />

        {/* Start adoption application button */}
        <Pressable style={styles.btn}>
          <Foundation name="paw" size={24} color="#ffff" />
          <Text style={styles.btnText}>Adopt {name}</Text>
        </Pressable>

        {/*View History of user*/}
        <View>
          <Text style={styles.subHeading}>Viewed History</Text>
          <HistoryCard />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    width: 390,
    paddingHorizontal: 16,
    marginTop: 24,
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 36,
  },
  btn: {
    backgroundColor: "#B50000",
    width: 360,
    paddingHorizontal: 24,
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 24,
    gap: 18,
  },
  btnText: {
    fontSize: 24,
    color: "#ffff",
    fontWeight: "600",
  },
  subHeading: {
    fontSize: 24,
  },
});
