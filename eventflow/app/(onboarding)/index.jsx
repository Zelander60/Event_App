import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { onboarding } from "../../constants/images";
import { useRouter } from "expo-router";

const Onboarding = () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-[#f8fcf9] dark:bg-[#0f1f1a]">
      {/* Header */}
      <View className="items-center pt-8 pb-4">
        <View className="flex-row items-center gap-2">
          <View className="h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
            <MaterialIcons name="confirmation-number" size={24} color="#10b981" />
          </View>
          <Text className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            EventFlow
          </Text>
        </View>
      </View>

      {/* Main Content */}
      <View className="flex-1 pb-32">
        <View className="px-4 py-2">
          <View className="relative w-full overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 shadow-lg aspect-[4/3]">
            <Image
              source={{ uri: onboarding.hero }}
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              resizeMode="cover"
            />
            <View className="absolute inset-0 bg-gradient-to-t from-[#0f1f1a]/90 via-[#0f1f1a]/20 to-transparent" />
            <View className="absolute bottom-0 left-0 w-full p-6 text-center">
              <View className="inline-block px-3 py-1 mb-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                <Text className="text-xs font-semibold tracking-wider text-primary uppercase">
                  Welcome
                </Text>
              </View>
              <Text className="text-3xl font-bold leading-tight text-white mb-2">
                Experience the Hype
              </Text>
              <Text className="text-white/80 text-sm font-medium leading-relaxed max-w-[280px] mx-auto">
                The ultimate platform to discover events, manage sales, and
                oversee operations.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View className="absolute bottom-0 left-0 w-full bg-[#f8fcf9]/90 dark:bg-[#0f1f1a]/95 backdrop-blur-md border-t border-slate-200 dark:border-white/5 pb-8 pt-4 px-6 z-10">
        <View className="flex-col gap-3 max-w-md mx-auto">
          <TouchableOpacity
            className="w-full flex-row items-center justify-center gap-2 rounded-lg bg-primary py-3.5 px-4"
            onPress={() => router.push("/(auth)/sign-up")}
          >
            <Text className="text-sm font-bold text-white">
              Create Account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-full rounded-lg border border-slate-300 dark:border-white/20 bg-transparent py-3.5 px-4"
            onPress={() => router.push("/(auth)/sign-in")}
          >
            <Text className="text-sm font-bold text-slate-700 dark:text-white text-center">
              Log In
            </Text>
          </TouchableOpacity>
          <View className="relative my-2">
            <View className="absolute inset-0 flex-row items-center">
              <View className="w-full border-t border-slate-300 dark:border-white/10" />
            </View>
            <View className="relative flex-row justify-center">
              <Text className="bg-[#f8fcf9] dark:bg-[#0f1f1a] px-2 text-slate-500 text-xs uppercase">
                Or continue with
              </Text>
            </View>
          </View>
          <View className="flex-row justify-center gap-6">
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5">
              <MaterialCommunityIcons
                name="google"
                size={20}
                color="#000"
              />
            </TouchableOpacity>
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5">
              <MaterialCommunityIcons
                name="email"
                size={20}
                color="#000"
              />
            </TouchableOpacity>
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5">
              <MaterialCommunityIcons
                name="apple"
                size={20}
                color="#000"
              />
            </TouchableOpacity>
          </View>
          <Text className="text-center text-[10px] text-slate-400 mt-2">
            By continuing, you agree to our Terms & Privacy Policy.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
