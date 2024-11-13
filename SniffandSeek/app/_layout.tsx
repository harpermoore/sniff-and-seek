import { Tabs } from "expo-router";
import TabBar from "@/components/TabBar";
import { AuthProvider } from "../context/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Tabs tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen name="home" />
        <Tabs.Screen name="favorite" />
        <Tabs.Screen name="report" />
      </Tabs>
    </AuthProvider>
  );
}
