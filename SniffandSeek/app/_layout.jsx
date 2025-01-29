import { AuthProvider } from "../context/AuthContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="[animalID]"
          options={{
            headerTitle: "",
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerBackTitle: "Home",
          }}
        />
      </Stack>
    </AuthProvider>
  );
}
