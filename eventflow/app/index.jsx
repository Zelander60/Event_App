import { View, Text, StatusBar, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/(onboarding)");
    }, 3000);
  }, []);

  return (
    <View className="flex-1 justify-between items-center bg-[#021a12] py-10">
      <StatusBar barStyle="light-content" />
      {/* Spacer */}
      <View />

      {/* Logo and Title */}
      <View className="items-center gap-8">
        <View className="w-28 h-28 bg-[#0a2820] border border-white/10 rounded-3xl items-center justify-center">
          <MaterialIcons name="local-activity" size={64} color="#10b981" />
        </View>
        <View className="items-center gap-3">
          <Text className="text-4xl font-extrabold tracking-tight text-white">
            EventFlow
          </Text>
          <Text className="text-base font-medium tracking-wider uppercase text-emerald-100/60">
            Manage. Discover. Attend.
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View className="items-center gap-6">
        <ActivityIndicator size="large" color="#10b981" />
        <Text className="text-xs font-normal text-emerald-100/40">
          Version 1.0.0
        </Text>
      </View>
    </View>
  );
};

export default Index;
