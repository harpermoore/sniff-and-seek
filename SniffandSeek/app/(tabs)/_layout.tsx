import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import TabBar from "@/components/TabBar";

export default function tabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="home"
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
