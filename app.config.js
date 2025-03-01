import * as dotenv from "dotenv";
dotenv.config();
console.log(
  "Config loading - env value:",
  process.env.EXPO_PUBLIC_FIREBASE_API_KEY
);
export default {
  expo: {
    // ... other expo config
    name: "sniffandseek",
    slug: "sniffandseek",
    version: "1.0.0",
    scheme: "sniffandseek",
    extra: {
      animalApiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
      firebaseApiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId:
        process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
    },
  },
};
