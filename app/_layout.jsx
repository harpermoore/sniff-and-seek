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
            headerStyle: { backgroundColor: "#B50000" },
            headerTintColor: "#fff",
            headerBackTitleVisible: false,
            headerBackTitle: "Home",
          }}
        />
        <Stack.Screen
          name="catSearch"
          options={{
            headerTitle: "",
            headerTransparent: true,
            headerStyle: { backgroundColor: "#B50000" },
            headerTintColor: "#fff",
            headerBackTitleVisible: false,
            headerBackTitle: "Home",
          }}
        />
        <Stack.Screen
          name="dogSearch"
          options={{
            headerTitle: "",
            headerTransparent: true,
            headerStyle: { backgroundColor: "#B50000" },
            headerTintColor: "#fff",
            headerBackTitleVisible: false,
            headerBackTitle: "Home",
          }}
        />
      </Stack>
    </AuthProvider>
  );
}
