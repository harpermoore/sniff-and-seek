import { ScrollView, View, StyleSheet, Pressable, Text } from "react-native";
import { useState } from "react";
import Card from "@/components/Card";

export default function HomePageList({ list, species }) {
  return (
    <>
      <ScrollView
        style={styles.listStyle}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.cardContainer}>
          {list.map((animal) => {
            const hasImage =
              animal.animalPictures[0] && animal.animalPictures[0].small.url;

            return (
              <Card
                key={animal.animalID}
                animalID={animal.animalID}
                animalName={animal.animalName}
                animalBreed={animal.animalBreed}
                imgUri={hasImage ? animal.animalPictures[0].small.url : null}
                haveImg={hasImage}
              />
            );
          })}
        </View>
        <Pressable style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Go to adoptable {species} list</Text>
        </Pressable>
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
    backgroundColor: "#333",
    padding: 16,
    borderRadius: 40,
  },
  textStyle: {
    color: "#ffff",
  },
});
