import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import useFavoritesStore from "../store/useFavoritesStore";

const EventCard = ({ event }) => {
  const router = useRouter();
  const { favorites, addToFavorites, removeFromFavorites } = useFavoritesStore();
  const isFavorite = favorites.some((fav) => fav.id === event.id);

  const handleFavoritePress = () => {
    if (isFavorite) {
      removeFromFavorites(event.id);
    } else {
      addToFavorites(event);
    }
  };

  return (
    <TouchableOpacity
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-4"
      onPress={() => router.push(`/event/${event.id}`)}
    >
      <Image source={{ uri: event.image }} className="w-full h-40" />
      <View className="p-4">
        <View className="flex-row justify-between items-start">
          <Text className="text-lg font-bold text-gray-900 dark:text-white w-5/6">
            {event.title}
          </Text>
          <TouchableOpacity onPress={handleFavoritePress}>
            <MaterialIcons
              name={isFavorite ? "favorite" : "favorite-border"}
              size={24}
              color={isFavorite ? "#FF0000" : "#9CA3AF"}
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center mt-2">
          <MaterialIcons name="date-range" size={16} color="#9CA3AF" />
          <Text className="text-sm text-gray-600 dark:text-gray-400 ml-2">
            {event.date}
          </Text>
        </View>
        <View className="flex-row items-center mt-1">
          <MaterialIcons name="location-on" size={16} color="#9CA3AF" />
          <Text className="text-sm text-gray-600 dark:text-gray-400 ml-2">
            {event.location}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
