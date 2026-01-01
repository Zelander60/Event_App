import { Stack, useRouter } from "expo-router";
import React, { useEffect } from "react";
import useAuthStore from "../../store/useAuthStore";

const CeoLayout = () => {
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!user || user.role !== "ceo") {
      router.replace("/(app)");
    }
  }, [user]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default CeoLayout;
