import { Stack, useRouter } from "expo-router";
import React, { useEffect } from "react";
import useAuthStore from "../../store/useAuthStore";

const ProtectedLayout = () => {
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/(app)");
    }
  }, [user]);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ProtectedLayout;
