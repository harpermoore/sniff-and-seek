import { Tabs } from "expo-router";
import TabBar from "@/components/TabBar";

export default function RootLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="favorite" />
      <Tabs.Screen name="report" />
    </Tabs>
  );
}
