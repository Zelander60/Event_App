import { View, Text, ScrollView, TouchableTouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { analytics } from "../../constants/data";

const Analytics = () => {
  const router = useRouter();

  return (
    <ScrollView
      className="flex-1 bg-background-light dark:bg-zinc-950"
      showsVerticalScrollIndicator={false}
    >
      <View className="sticky top-0 z-50 bg-background-light/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-emerald-100 dark:border-white/5 p-4 flex-row items-center justify-between">
        <Text className="text-xl font-bold leading-tight tracking-tight text-emerald-950 dark:text-emerald-50">
          Analytics
        </Text>
        <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full">
          <MaterialIcons
            name="file-download"
            size={24}
            color="#065f46"
          />
        </TouchableOpacity>
      </View>

      <View className="px-4 mt-4">
        <Text className="block mb-2 text-sm font-medium text-emerald-800 dark:text-emerald-300">
          Select Event
        </Text>
        <View className="relative">
          {/* Replace with Picker component */}
          <Text className="w-full bg-white dark:bg-zinc-900 text-slate-900 dark:text-white border border-emerald-100 dark:border-white/10 rounded-xl px-4 py-3 pr-10">
            Summer Music Fest 2024
          </Text>
          <View className="pointer-events-none absolute inset-y-0 right-0 flex-row items-center px-4">
            <MaterialIcons
              name="expand-more"
              size={24}
              color="#10b981"
            />
          </View>
        </View>
      </View>

      <View className="w-full mt-4">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-3 px-4">
            <TouchableOpacity className="px-4 py-2 bg-primary rounded-full">
              <Text className="text-white text-sm font-medium">
                Last 7 Days
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-2 bg-white dark:bg-zinc-900 border border-emerald-100 dark:border-white/10 rounded-full">
              <Text className="text-slate-600 dark:text-slate-300 text-sm font-medium">
                Last 30 Days
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <View className="w-full mt-4">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-4 px-4">
            <View className="min-w-[240px] flex-1 flex-col gap-3 rounded-xl p-5 bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-emerald-500/20 text-white">
              <Text className="text-emerald-50 text-sm font-medium">
                Total Revenue
              </Text>
              <Text className="text-3xl font-bold tracking-tight">
                {analytics.totalRevenue}
              </Text>
            </View>
            <View className="min-w-[240px] flex-1 flex-col gap-3 rounded-xl p-5 bg-white dark:bg-zinc-900 border border-emerald-100 dark:border-white/5 shadow-sm">
              <Text className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                Tickets Sold
              </Text>
              <Text className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                {analytics.ticketsSold}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View className="px-4 mt-4">
        <View className="rounded-xl p-5 bg-white dark:bg-zinc-900 border border-emerald-100 dark:border-white/5 shadow-sm">
          <Text className="text-base font-semibold text-slate-900 dark:text-white mb-4">
            Ticket Type Split
          </Text>
          <View className="flex-row items-center gap-6">
            <View className="w-32 h-32 bg-gray-200 rounded-full" />
            <View className="flex-1 flex-col gap-3">
              {analytics.ticketTypes.map((ticket) => (
                <View key={ticket.type} className="flex-row items-center justify-between text-sm">
                  <View className="flex-row items-center gap-2">
                    <View className="w-3 h-3 rounded-full bg-primary" />
                    <Text className="text-slate-600 dark:text-slate-300">
                      {ticket.type}
                    </Text>
                  </View>
                  <Text className="font-semibold text-slate-900 dark:text-white">
                    {ticket.percentage}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Analytics;
