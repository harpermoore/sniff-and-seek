import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";

export default function TabsLayout() {
  const [activated, setActivated] = useState("index");

  return (
    <Tabs>
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
