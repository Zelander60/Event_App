import { Stack } from "expo-router";

export default function CeoLayout() {
  return (
    <Stack>
      <Stack.Screen name="dashboard" options={{ headerShown: false }} />
      <Stack.Screen name="create-event" options={{ headerShown: false }} />
      <Stack.Screen name="manage-attendees" options={{ headerShown: false }} />
      <Stack.Screen name="analytics" options={{ headerShown: false }} />
    </Stack>
  );
}
