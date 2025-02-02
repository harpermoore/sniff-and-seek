import { ScrollView, View, StyleSheet, Pressable, Text } from "react-native";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Card from "@/components/Card";
import { Link } from "expo-router";

export default function HomePageList({ list, species, isLoading }) {
  return (
    <>
      <ScrollView
        style={styles.listStyle}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 12,
        }}
      >
        <View style={styles.cardContainer}>
          {list.map((animal) => {
            const hasImage =
              animal.animalPictures[0] && animal.animalPictures[0].small.url;

            return (
              <Card
                isLoading={isLoading}
                key={animal.animalID}
                animalID={animal.animalID}
                animalName={animal.animalName}
                animalBreed={animal.animalBreed}
                imgUri={hasImage ? animal.animalPictures[0].small.url : null}
                haveImg={hasImage}
                species={species}
                age={animal.animalGeneralAge}
              />
            );
          })}
        </View>

        <Link href={species === "cats" ? "catSearch" : "dogSearch"} asChild>
          <Pressable style={styles.buttonStyle}>
            <AntDesign name="arrowright" size={24} color="#ffff" />
          </Pressable>
        </Link>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  listStyle: {
    elevation: 4,
    marginLeft: 20,
  },
  cardContainer: {
    flexDirection: "row",
    gap: 12,
  },
  buttonStyle: {
    marginLeft: 20,
    backgroundColor: "#B50000",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 40,
  },
  textStyle: {
    color: "#ffff",
  },
});
