import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Notifications = () => {
  const router = useRouter();

  const notifications = [
    {
      id: "1",
      title: "Sales Spike Detected",
      message:
        "'Summer Fest' sold 500+ tickets in the last hour. Inventory is depleting faster than expected.",
      time: "2m ago",
      type: "new",
      icon: "trending-up",
    },
    {
      id: "2",
      title: "Your ticket is ready!",
      message: "Tap to view your QR code for Neon Nights.",
      time: "15m ago",
      type: "new",
      icon: "ticket-confirmation",
    },
    {
      id: "3",
      title: "Venue Change: Jazz Night",
      message:
        "Due to weather, the event has moved to Downtown Hall. Check the map for details.",
      time: "2h ago",
      type: "read",
      icon: "alert-circle",
    },
    {
      id: "4",
      name: "Jane Doe",
      ticket: "VIP Access",
      status: "Not Checked In",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD4hMZ74_gcvXKCkZx5DvY3cKWHPkEf-rHanBnB8TJJHEc-EflBMAg9btO5Gm3QTMKzdb_9V4-qbud4IRw7ERVX3quRwZSbpwZo-FxxSW1sYUhNllGmo0NCjAwK4fd_hhViWibZJ-yl8VYtDrCNUuoE6hGg_Uc4o0TZLz0p54Nbi3LEC5E6F6lMTmFvfRNPrF8W8AbvUpiao_YnTcjD73OQN-Om0rpj2kVLAD-we_nt-hZ_Yr37jb7-io6btCd9p5aZnSZJAEiT8l47",
    },
  ];

  return (
    <ScrollView
      className="flex-1 bg-background-light dark:bg-background-dark"
      showsVerticalScrollIndicator={false}
    >
      <View className="sticky top-0 z-20 flex-row items-center justify-between p-4 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-white/5">
        <TouchableOpacity
          className="w-10 h-10 items-center justify-center rounded-full"
          onPress={() => router.back()}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#4B5563" />
        </TouchableOpacity>
        <Text className="text-lg font-bold">Notifications</Text>
        <View className="flex-row items-center gap-2">
          <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full">
            <MaterialCommunityIcons
              name="playlist-check"
              size={24}
              color="#10b981"
            />
          </TouchableOpacity>
          <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full">
            <MaterialCommunityIcons name="cog" size={24} color="#4B5563" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-none px-4 py-3 border-b border-slate-200 dark:border-white/5 bg-background-light dark:bg-background-dark">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-3">
            <TouchableOpacity className="h-9 shrink-0 items-center justify-center px-5 rounded-full bg-primary">
              <Text className="text-sm font-bold text-white">All</Text>
            </TouchableOpacity>
            <TouchableOpacity className="h-9 shrink-0 items-center justify-center px-5 rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5">
              <Text className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Unread
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <View className="mt-2">
        {notifications.map((notification) => (
          <View
            key={notification.id}
            className={`flex-row items-start gap-4 px-4 py-4 ${
              notification.type === "new"
                ? "bg-primary/5 dark:bg-primary/10"
                : ""
            }`}
          >
            <View
              className={`w-12 h-12 items-center justify-center rounded-xl ${
                notification.icon === "trending-up"
                  ? "bg-primary"
                  : "bg-slate-100 dark:bg-surface-dark"
              }`}
            >
              <MaterialCommunityIcons
                name={notification.icon}
                size={24}
                color={
                  notification.icon === "trending-up" ? "white" : "#4B5563"
                }
              />
            </View>
            <View className="flex-1 flex-col gap-1">
              <View className="flex-row justify-between items-start">
                <Text className="text-sm font-bold leading-tight text-slate-900 dark:text-white pr-2">
                  {notification.title}
                </Text>
                <Text className="text-[10px] font-medium text-slate-400 whitespace-nowrap">
                  {notification.time}
                </Text>
              </View>
              <Text className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                {notification.message}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Notifications;
