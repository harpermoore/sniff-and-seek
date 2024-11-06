import { Redirect } from "expo-router";
import { app } from "@/firebase-config";

export default function Index() {
  return <Redirect href="(auth)/signIn" />;
}
