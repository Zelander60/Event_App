import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { users as initialUsers } from "../../constants/data";

const UserManagement = () => {
  const router = useRouter();
  const [users, setUsers] = useState(initialUsers);
  const [activeTab, setActiveTab] = useState("Event CEOs");

  const filterUsers = (status) => {
    if (status === "All") {
      setUsers(initialUsers);
    } else {
      setUsers(initialUsers.filter((user) => user.status === status));
    }
  };

  return (
    <ScrollView
      className="flex-1 bg-background-light dark:bg-background-dark"
      showsVerticalScrollIndicator={false}
    >
      <View className="sticky top-0 z-20 flex-row items-center justify-between bg-background-light/90 dark:bg-background-dark/90 p-4 backdrop-blur-md">
        <TouchableOpacity
          className="w-10 h-10 shrink-0 items-center justify-center rounded-full"
          onPress={() => router.back()}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#141118" />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-lg font-bold leading-tight tracking-tight text-gray-900 dark:text-emerald-50">
          User Management
        </Text>
        <TouchableOpacity className="h-10 items-center justify-center gap-1 rounded-full px-3">
          <MaterialCommunityIcons name="plus" size={20} color="#10b981" />
          <Text className="text-sm font-bold text-primary">Add</Text>
        </TouchableOpacity>
      </View>
      <View className="px-4 py-2">
        <View className="w-full flex-row items-center rounded-xl bg-white dark:bg-surface-dark border border-emerald-100 dark:border-white/10 px-3 py-3">
          <MaterialCommunityIcons name="magnify" size={24} color="#9CA3AF" />
          <TextInput
            className="flex-1 bg-transparent px-3 text-base text-gray-900 dark:text-emerald-50 placeholder:text-gray-400 dark:placeholder:text-emerald-300/60"
            placeholder="Search by name or email"
          />
        </View>
      </View>
      <View className="px-4 py-3">
        <View className="h-12 w-full flex-row items-center rounded-xl bg-emerald-100 dark:bg-surface-dark p-1">
          <TouchableOpacity
            className={`h-full flex-1 items-center justify-center rounded-lg ${
              activeTab === "Event CEOs"
                ? "bg-white dark:bg-primary shadow-sm"
                : ""
            }`}
            onPress={() => setActiveTab("Event CEOs")}
          >
            <Text
              className={`text-sm font-semibold ${
                activeTab === "Event CEOs"
                  ? "text-emerald-900 dark:text-white"
                  : "text-emerald-600 dark:text-emerald-200/70"
              }`}
            >
              Event CEOs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`h-full flex-1 items-center justify-center rounded-lg ${
              activeTab === "Attendees"
                ? "bg-white dark:bg-primary shadow-sm"
                : ""
            }`}
            onPress={() => setActiveTab("Attendees")}
          >
            <Text
              className={`text-sm font-medium ${
                activeTab === "Attendees"
                  ? "text-emerald-900 dark:text-white"
                  : "text-emerald-600 dark:text-emerald-200/70"
              }`}
            >
              Attendees
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-2 px-4 py-2">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-bold text-gray-900 dark:text-emerald-50">
            {activeTab} ({users.length})
          </Text>
          <TouchableOpacity>
            <Text className="text-xs font-semibold text-primary uppercase tracking-wider">
              Sort by
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-col gap-3 px-4 pb-4">
        {users.map((user) => (
          <View
            key={user.id}
            className="flex-row items-center gap-4 rounded-2xl bg-white dark:bg-surface-dark p-3 pr-2"
          >
            <Image
              source={{ uri: user.image }}
              className="w-14 h-14 rounded-full"
            />
            <View className="flex-1">
              <View className="flex-row items-center gap-2">
                <Text className="truncate text-base font-bold text-gray-900 dark:text-emerald-50">
                  {user.name}
                </Text>
                <View
                  className={`px-2 py-0.5 rounded-md ${
                    user.status === "Active"
                      ? "bg-primary/10"
                      : "bg-red-500/10"
                  }`}
                >
                  <Text
                    className={`text-xs font-medium ${
                      user.status === "Active"
                        ? "text-primary"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {user.status}
                  </Text>
                </View>
              </View>
              <Text className="truncate text-sm text-gray-500 dark:text-emerald-200/70">
                {user.email}
              </Text>
              <View className="mt-1 flex-row items-center gap-1.5 text-xs font-medium text-secondary dark:text-secondary/80">
                <MaterialCommunityIcons
                  name="calendar"
                  size={14}
                  color="#3b82f6"
                />
                <Text>{user.events}</Text>
              </View>
            </View>
            <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full">
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color="#9CA3AF"
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default UserManagement;
