import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Foundation from "@expo/vector-icons/Foundation";

export default function TabBar({ state, descriptors, navigation }) {
  const icons = {
    home: (props) => <Feather name="home" size={24} color="#ffff" />,
    favorite: (props) => <FontAwesome6 name="heart" size={24} color="#ffff" />,
    report: (props) => (
      <Foundation name="clipboard-notes" size={24} color="#ffff" />
    ),
  };

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if (
          ["_sitemap", "+not-found", "signIn", "[animalID]", "(tabs)"].includes(
            route.name
          )
        )
          return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const IconComponent = icons[route.name];

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.item}
          >
            <IconComponent />

            <Text style={{ color: isFocused ? "#673ab7" : "#fff" }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 25,
    backgroundColor: "#B50000",
    paddingVertical: 16,
    marginHorizontal: 32,
    borderRadius: 36,
    borderCurve: "continuous",
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
