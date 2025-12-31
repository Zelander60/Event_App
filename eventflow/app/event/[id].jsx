import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import { featuredEvents, upcomingEvents } from "../../constants/data";

const EventDetails = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const event =
    featuredEvents.find((e) => e.id === id) ||
    upcomingEvents.find((e) => e.id === id);

  const [gaQuantity, setGaQuantity] = useState(0);
  const [vipQuantity, setVipQuantity] = useState(0);

  return (
    <ScrollView
      className="flex-1 bg-background-light dark:bg-background-dark"
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={{ uri: event.image }}
        className="w-full h-80"
      >
        <View className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <View className="absolute top-10 left-4">
          <TouchableOpacity
            className="w-10 h-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md"
            onPress={() => router.back()}
          >
            <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View className="p-5 -mt-12 bg-background-light dark:bg-background-dark rounded-t-3xl">
        <Text className="text-3xl font-extrabold text-gray-900 dark:text-white">
          {event.title}
        </Text>
        <View className="mt-4 flex-row items-center gap-4">
          <View className="flex-row items-center gap-1.5 text-primary">
            <MaterialCommunityIcons name="calendar-clock" size={20} color="#10b981" />
            <Text className="text-sm font-medium text-primary">
              {event.date.month
                ? `Sat, ${event.date.month} ${event.date.day} • 8:00 PM`
                : event.date}
            </Text>
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-lg font-bold text-gray-900 dark:text-white">
            About Event
          </Text>
          <Text className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">
            Get ready for the most electrifying night of the year! Neon Nights
            brings together the world's top DJs for an unforgettable
            experience of light, sound, and energy. Expect immersive light
            shows, state-of-the-art sound systems, and a crowd that knows how
            to party.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-lg font-bold text-gray-900 dark:text-white">
            Select Tickets
          </Text>
          <View className="mt-4 space-y-3">
            <View className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-surface-dark flex-row justify-between items-center">
              <View>
                <Text className="font-bold text-base text-gray-900 dark:text-white">
                  General Admission
                </Text>
                <Text className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  Entry to main floor
                </Text>
                <Text className="text-primary font-bold mt-2">
                  $50.00
                </Text>
              </View>
              <View className="flex-row items-center gap-3">
                <TouchableOpacity
                  className="w-8 h-8 items-center justify-center rounded-md bg-gray-100 dark:bg-white/5"
                  onPress={() => setGaQuantity(Math.max(0, gaQuantity - 1))}
                >
                  <MaterialCommunityIcons name="minus" size={18} color="#9CA3AF" />
                </TouchableOpacity>
                <Text className="font-bold w-4 text-center text-gray-900 dark:text-white">
                  {gaQuantity}
                </Text>
                <TouchableOpacity
                  className="w-8 h-8 items-center justify-center rounded-md bg-primary"
                  onPress={() => setGaQuantity(gaQuantity + 1)}
                >
                  <MaterialCommunityIcons name="plus" size={18} color="white" />
                </TouchableOpacity>
              </View>
            </View>
            <View className="p-4 rounded-xl border-2 border-primary/20 bg-primary/5 flex-row justify-between items-center">
              <View>
                <Text className="font-bold text-base text-gray-900 dark:text-white">
                  VIP Pass
                </Text>
                <Text className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  Sky lounge + Drinks
                </Text>
                <Text className="text-primary font-bold mt-2">
                  $120.00
                </Text>
              </View>
              <View className="flex-row items-center gap-3">
                <TouchableOpacity
                  className="w-8 h-8 items-center justify-center rounded-md bg-gray-100 dark:bg-white/5"
                  onPress={() => setVipQuantity(Math.max(0, vipQuantity - 1))}
                >
                  <MaterialCommunityIcons name="minus" size={18} color="#9CA3AF" />
                </TouchableOpacity>
                <Text className="font-bold w-4 text-center text-gray-900 dark:text-white">
                  {vipQuantity}
                </Text>
                <TouchableOpacity
                  className="w-8 h-8 items-center justify-center rounded-md bg-gray-100 dark:bg-white/5"
                  onPress={() => setVipQuantity(vipQuantity + 1)}
                >
                  <MaterialCommunityIcons name="plus" size={18} color="#9CA3AF" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View className="mt-6">
          <TouchableOpacity
            className="w-full bg-primary py-4 rounded-xl items-center"
            onPress={() => router.push("/(app)/checkout")}
          >
            <Text className="text-white font-bold text-lg">
              Buy Tickets
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default EventDetails;
