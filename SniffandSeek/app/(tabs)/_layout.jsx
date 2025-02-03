import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState, useEffect } from "react";
import SplashScreen from "../../components/SplashScreen";

export default function TabsLayout() {
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [activated, setActivated] = useState("index");

  useEffect(() => {
    setTimeout(() => {
      setIsFirstLoading(false);
    }, 9000);
  }, []);

  if (isFirstLoading) {
    return <SplashScreen />;
  }

  return (
    <Tabs
      //tab title color
      screenOptions={{
        tabBarActiveTintColor: "#B50000",
        tabBarInactiveTintColor: "#808080",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="#B50000" />
            ) : (
              <AntDesign name="home" size={24} color="#B50000" />
            ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorite",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="heart" size={22} color="#B50000" />
            ) : (
              <AntDesign name="hearto" size={22} color="#B50000" />
            ),
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: "Report",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="file" size={22} color="#B50000" />
            ) : (
              <AntDesign name="file1" size={22} color="#B50000" />
            ),
        }}
      />
    </Tabs>
  );
}
