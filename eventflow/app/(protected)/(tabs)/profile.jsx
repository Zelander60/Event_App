import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import useAuthStore from "../../../store/useAuthStore";

const ProfileScreen = () => {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.replace("/(auth)/sign-in");
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold">Welcome, {user?.name}!</Text>
      <Text className="text-lg mt-2">Your role is: {user?.role}</Text>
      <TouchableOpacity
        onPress={handleLogout}
        className="mt-5 p-3 bg-red-500 rounded-lg"
      >
        <Text className="text-white font-bold">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
