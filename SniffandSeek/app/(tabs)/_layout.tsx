import { Tabs } from "expo-router";

export default function tabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="favorite" />
      <Tabs.Screen name="report" />
    </Tabs>
  );
}
