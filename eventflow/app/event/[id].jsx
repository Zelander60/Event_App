import React from "react";
import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { events } from "../../../store/mockData";
import { MaterialIcons } from "@expo/vector-icons";

const EventDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-gray-100 dark:bg-gray-900">
        <Text className="text-lg text-gray-900 dark:text-white">
          Event not found
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-100 dark:bg-gray-900">
      <View>
        <Image source={{ uri: event.image }} className="w-full h-60" />
        <TouchableOpacity
          className="absolute top-10 left-4 bg-white rounded-full p-2"
          onPress={() => router.back()}
        >
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View className="p-4">
          <Text className="text-3xl font-bold text-gray-900 dark:text-white">
            {event.title}
          </Text>
          <View className="flex-row items-center mt-4">
            <MaterialIcons name="date-range" size={20} color="#9CA3AF" />
            <Text className="text-lg text-gray-600 dark:text-gray-400 ml-2">
              {event.date}
            </Text>
          </View>
          <View className="flex-row items-center mt-2">
            <MaterialIcons name="location-on" size={20} color="#9CA3AF" />
            <Text className="text-lg text-gray-600 dark:text-gray-400 ml-2">
              {event.location}
            </Text>
          </View>
          <View className="flex-row items-center mt-2">
            <MaterialIcons name="attach-money" size={20} color="#9CA3AF" />
            <Text className="text-lg text-gray-600 dark:text-gray-400 ml-2">
              {event.price.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
      <View className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-800">
        <TouchableOpacity className="bg-blue-500 rounded-lg py-4">
          <Text className="text-white text-center font-bold text-lg">
            Buy Tickets
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EventDetailScreen;
