import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function tabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerShown: false, tabBarLabelStyle: { color: "#B50000" } }}
      />
      <Tabs.Screen
        name="favorite"
        options={{ headerShown: false, tabBarLabelStyle: { color: "#B50000" } }}
      />
      <Tabs.Screen
        name="report"
        options={{ headerShown: false, tabBarLabelStyle: { color: "#B50000" } }}
      />
    </Tabs>
  );
}
