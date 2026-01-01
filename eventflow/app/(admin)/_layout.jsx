import { Stack, useRouter } from "expo-router";
import React, { useEffect } from "react";
import useAuthStore from "../../store/useAuthStore";

const AdminLayout = () => {
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!user || user.role !== "admin") {
      router.replace("/(app)");
    }
  }, [user]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AdminLayout;
