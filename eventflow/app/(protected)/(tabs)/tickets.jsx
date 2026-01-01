import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { tickets } from "../../../store/mockData";
import TicketCard from "../../../components/TicketCard";

const TicketsScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 dark:bg-gray-900">
      <View className="p-4">
        <Text className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          My Tickets
        </Text>
        <FlatList
          data={tickets}
          renderItem={({ item }) => <TicketCard ticket={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default TicketsScreen;
