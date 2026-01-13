import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { tickets } from "../../../constants/data";

const Tickets = () => {
  return (
    <ScrollView
      className="flex-1 bg-background-light dark:bg-background-dark"
      showsVerticalScrollIndicator={false}
    >
      <View className="relative z-10 flex-row items-center justify-between px-6 pt-6 pb-2">
        <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full bg-white/5">
          <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-lg font-bold tracking-tight text-white">
          My Wallet
        </Text>
        <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full bg-white/5">
          <MaterialCommunityIcons name="tune" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="px-8 gap-6 pb-4 pt-2"
        snapToAlignment="center"
        decelerationRate="fast"
        snapToInterval={320}
      >
        {tickets.map((ticket) => (
          <View
            key={ticket.id}
            className="w-[300px] h-[500px] rounded-3xl overflow-hidden bg-[#06382a] border border-white/10 shadow-2xl flex-col"
          >
            <ImageBackground
              source={{ uri: ticket.image }}
              className="h-[55%]"
            >
              <View className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#06382a]" />
            </ImageBackground>
            <View className="p-5 flex-col gap-4">
              <View className="flex-col gap-1">
                <Text className="text-3xl font-extrabold text-white leading-tight">
                  {ticket.event}
                </Text>
                <Text className="text-primary text-sm font-bold tracking-wide uppercase">
                  {ticket.tour}
                </Text>
                <View className="flex-row items-center gap-1 text-white/60 text-xs">
                  <MaterialCommunityIcons
                    name="map-marker"
                    size={14}
                    color="#D1D5DB"
                  />
                  <Text>{ticket.location}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default Tickets;
