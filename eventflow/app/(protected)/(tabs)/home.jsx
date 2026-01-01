import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { events } from "../../../store/mockData";
import EventCard from "../../../components/EventCard";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 dark:bg-gray-900">
      <View className="p-4">
        <Text className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Discover Events
        </Text>
        <FlatList
          data={events}
          renderItem={({ item }) => <EventCard event={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
