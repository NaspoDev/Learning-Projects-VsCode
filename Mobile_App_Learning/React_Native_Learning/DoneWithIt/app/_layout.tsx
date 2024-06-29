import { Stack } from "expo-router";

// Routing in React Native with Expo.
export default function RootLayout() {
  return (
    // Wraps your screens and defines the stack navigator. It determines how screens are displayed and transitioned between.
    <Stack>
      {/* Specifies a screen in the stack with the name "index". This maps to the app/index.tsx file, serving as the initial route when the app starts. */}
      <Stack.Screen name="index" />
    </Stack>
  );
}
