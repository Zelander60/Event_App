import { Stack } from "expo-router";

export default function AdminLayout() {
  return (
    <Stack>
      <Stack.Screen name="user-management" options={{ headerShown: false }} />
    </Stack>
  );
}
