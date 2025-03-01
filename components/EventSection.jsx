import ResourceCard from "./ResourceCard";
import { View, StyleSheet } from "react-native";

export default function EventSection({ list }) {
  return (
    <View style={styles.container}>
      {list.map((item, index) => (
        <ResourceCard
          key={index}
          eventName={item.name}
          eventDescription={item.description}
          imgUrl={item.imgUrl}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 12,
  },
});
