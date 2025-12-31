import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();

  return (
    <ScrollView
      className="flex-1 bg-background-light dark:bg-background-dark"
      showsVerticalScrollIndicator={false}
    >
      <View className="sticky top-0 z-50 flex-row items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-200 dark:border-gray-800/50">
        <Text className="text-xl font-bold leading-tight tracking-tight flex-1">
          Profile
        </Text>
        <TouchableOpacity className="active:scale-95 transition-transform">
          <Text className="text-primary text-base font-bold leading-normal tracking-wide">
            Edit
          </Text>
        </TouchableOpacity>
      </View>

      <View className="p-6 flex-col items-center gap-6">
        <View className="relative">
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuqVHgSvf_NliIKJWaV4GWyGDVj-Uw5-N09aBZE5YW3BiAohoQrh21IBIL5rFQzjmeRQYhzryV43ERpyHReXyV0CLWpYsUNiYeBR7PDULGfv_coTTJDb2ctZppRLdfnTZS194wKMCyzGn6nHerJyfOz1K8-zz1kjlhCeQxGQBtJuqNgSeTGfwws_0dV-Vg-4UE8hs47S7zyRopuiEWNI3o_VnAQd28uGUpzwsj41a3ohBFmrsvKQqkPT99XLsXrhgLcXB4WDJrV7C4",
            }}
            className="w-32 h-32 rounded-full"
          />
          <TouchableOpacity className="absolute bottom-0 right-0 bg-primary p-2 rounded-full">
            <MaterialCommunityIcons name="camera" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex-col items-center gap-1">
          <Text className="text-2xl font-bold leading-tight tracking-tight">
            Alex Johnson
          </Text>
          <Text className="text-gray-500 dark:text-gray-400 text-base font-medium">
            @alexj_events
          </Text>
          <View className="mt-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30">
            <Text className="text-primary text-xs font-bold uppercase tracking-wider">
              Event CEO
            </Text>
          </View>
        </View>
      </View>

      <View className="px-4 pb-6">
        <View className="h-12 w-full flex-row items-center justify-center rounded-xl bg-gray-200 dark:bg-surface-dark p-1 shadow-inner">
          <TouchableOpacity className="h-full flex-1 items-center justify-center rounded-[10px] bg-white dark:bg-[#1f362a] shadow-sm">
            <Text className="text-sm font-semibold text-primary">
              Settings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="h-full flex-1 items-center justify-center rounded-[10px]">
            <Text className="text-sm font-semibold text-gray-500 dark:text-gray-400">
              My Tickets
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mb-2">
        <Text className="text-gray-900 dark:text-white text-lg font-bold leading-tight px-6 pb-3 pt-2">
          CEO Section
        </Text>
        <View className="flex-col gap-4 px-4">
          <TouchableOpacity
            className="w-full bg-primary py-4 rounded-xl items-center"
            onPress={() => router.push("/(ceo)/dashboard")}
          >
            <Text className="text-white font-bold text-lg">
              Go to Dashboard
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mb-2">
        <Text className="text-gray-900 dark:text-white text-lg font-bold leading-tight px-6 pb-3 pt-2">
          Admin Section
        </Text>
        <View className="flex-col gap-4 px-4">
          <TouchableOpacity
            className="w-full bg-primary py-4 rounded-xl items-center"
            onPress={() => router.push("/(admin)/user-management")}
          >
            <Text className="text-white font-bold text-lg">
              Go to User Management
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
