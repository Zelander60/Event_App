import React from "react";
import { View, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TicketCard = ({ ticket }) => {
  return (
    <View className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-4 p-4 flex-row items-center">
      <View className="flex-1">
        <Text className="text-lg font-bold text-gray-900 dark:text-white">
          {ticket.eventTitle}
        </Text>
        <View className="flex-row items-center mt-2">
          <MaterialIcons name="date-range" size={16} color="#9CA3AF" />
          <Text className="text-sm text-gray-600 dark:text-gray-400 ml-2">
            {ticket.date}
          </Text>
        </View>
        <View className="flex-row items-center mt-1">
          <MaterialIcons name="location-on" size={16} color="#9CA3AF" />
          <Text className="text-sm text-gray-600 dark:text-gray-400 ml-2">
            {ticket.location}
          </Text>
        </View>
      </View>
      <Image source={{ uri: ticket.qrCode }} className="w-20 h-20" />
    </View>
  );
};

export default TicketCard;
