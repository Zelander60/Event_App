import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { upcomingEvents } from "../../constants/data";

const Calendar = () => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(5);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: 3 }, (_, i) => i + 1);

  return (
    <ScrollView
      className="flex-1 bg-background-light dark:bg-background-dark"
      showsVerticalScrollIndicator={false}
    >
      <View className="sticky top-0 z-20 bg-background-light dark:bg-background-dark/95 backdrop-blur-sm px-4 py-3">
        <Text className="text-2xl font-bold leading-tight tracking-tight">
          Calendar
        </Text>
      </View>

      <View className="px-4 pt-2 pb-6">
        <View className="flex-row items-center justify-between mb-6">
          <TouchableOpacity className="w-8 h-8 items-center justify-center rounded-full">
            <MaterialCommunityIcons name="chevron-left" size={20} color="#6B7280" />
          </TouchableOpacity>
          <Text className="text-lg font-bold">October 2023</Text>
          <TouchableOpacity className="w-8 h-8 items-center justify-center rounded-full">
            <MaterialCommunityIcons name="chevron-right" size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-around mb-2">
          <Text className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
            S
          </Text>
          <Text className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
            M
          </Text>
          <Text className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
            T
          </Text>
          <Text className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
            W
          </Text>
          <Text className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
            T
          </Text>
          <Text className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
            F
          </Text>
          <Text className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
            S
          </Text>
        </View>
        <View className="flex-row flex-wrap">
          {emptyDays.map((day) => (
            <View key={`empty-${day}`} className="w-1/7 h-10" />
          ))}
          {days.map((day) => (
            <View key={day} className="w-1/7 h-10 items-center justify-center">
              <TouchableOpacity
                className={`w-9 h-9 items-center justify-center rounded-full ${
                  selectedDate === day ? "bg-primary" : ""
                }`}
                onPress={() => setSelectedDate(day)}
              >
                <Text
                  className={`text-sm font-medium ${
                    selectedDate === day
                      ? "text-white"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  {day}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      <View className="bg-white dark:bg-slate-900 rounded-t-3xl min-h-[500px] shadow-lg pb-10">
        <View className="px-6 py-5 flex-row items-center justify-between sticky top-0 bg-white dark:bg-slate-900 rounded-t-3xl z-10">
          <View>
            <Text className="text-xl font-bold dark:text-white">
              Thursday, Oct {selectedDate}
            </Text>
            <Text className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {upcomingEvents.length} events today
            </Text>
          </View>
        </View>
        <View className="flex-col gap-4 px-4">
          {upcomingEvents.map((event) => (
            <TouchableOpacity
              key={event.id}
              className="flex-row p-3 gap-4 bg-slate-50 dark:bg-surface-dark rounded-2xl shadow-sm"
              onPress={() => router.push(`/event/${event.id}`)}
            >
              <View className="w-24 h-24 rounded-xl bg-cover bg-center" />
              <View className="flex-1 justify-between py-0.5">
                <View>
                  <Text className="text-base font-bold text-slate-900 dark:text-white leading-tight mb-1">
                    {event.title}
                  </Text>
                  <View className="flex-row items-center gap-1 text-slate-500 dark:text-slate-400 text-xs">
                    <MaterialCommunityIcons
                      name="map-marker"
                      size={14}
                      color="#6B7280"
                    />
                    <Text>{event.location}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Calendar;
