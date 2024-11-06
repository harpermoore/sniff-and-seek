import { Text, View } from "react-native";
import SignIn from "./(auth)/SignIn";
import { Stack } from "expo-router";

export default function App() {
  return (
    <Stack>
      <Stack.Screen name="SignIn" />
    </Stack>
  );
}
