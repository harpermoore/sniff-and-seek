import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="favorite" options={{ headerShown: false }} />
      <Tabs.Screen name="report" options={{ headerShown: false }} />
    </Tabs>
  );
}
