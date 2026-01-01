import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import useFavoritesStore from "../../../store/useFavoritesStore";
import EventCard from "../../../components/EventCard";

const FavoritesScreen = () => {
  const { favorites } = useFavoritesStore();

  return (
    <SafeAreaView className="flex-1 bg-gray-100 dark:bg-gray-900">
      <View className="p-4">
        <Text className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Favorite Events
        </Text>
        {favorites.length > 0 ? (
          <FlatList
            data={favorites}
            renderItem={({ item }) => <EventCard event={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View className="flex-1 justify-center items-center">
            <Text className="text-lg text-gray-600 dark:text-gray-400">
              You haven't added any favorites yet.
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
