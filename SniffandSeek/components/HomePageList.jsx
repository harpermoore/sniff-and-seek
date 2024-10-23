import { ScrollView, View, StyleSheet, Pressable, Text } from "react-native";
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
          {list.map((animal) => (
            <Card
              key={animal.animalID}
              animalID={animal.animalID}
              animalName={animal.animalName}
              imgUri={animal.animalPictures[0].small.url}
            />
          ))}
        </View>
        <Pressable>
          <Text>Go to adoptable {species} list</Text>
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
});
