import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Legal = () => {
  const router = useRouter();

  const legalItems = [
    {
      title: "Terms and Conditions",
      description: "Rules governing the use of our ticketing platform.",
      icon: "gavel",
    },
    {
      title: "Privacy Policy",
      description: "How we collect, use, and share your personal data.",
      icon: "shield-account",
    },
    {
      title: "Cookie Policy",
      description: "Information about cookies and tracking technologies.",
      icon: "cookie",
    },
    {
      title: "Third-Party Licenses",
      description: "Open source software acknowledgments.",
      icon: "code-tags",
    },
  ];

  return (
    <ScrollView
      className="flex-1 bg-background-light dark:bg-background-dark"
      showsVerticalScrollIndicator={false}
    >
      <View className="sticky top-0 z-50 flex-row items-center justify-between px-4 py-3 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-green-100 dark:border-white/10">
        <TouchableOpacity
          className="w-10 h-10 -ml-2 rounded-full items-center justify-center"
          onPress={() => router.back()}
        >
          <MaterialCommunityIcons
            name="chevron-left"
            size={24}
            color="#4B5563"
          />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-gray-900 dark:text-white tracking-tight flex-1 text-center pr-8">
          Legal Information
        </Text>
      </View>

      <View className="p-4 space-y-6">
        <View className="pt-2">
          <Text className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed">
            Please review our policies to understand how we manage your data,
            tickets, and your rights as a user.
          </Text>
        </View>
        <View className="space-y-4">
          {legalItems.map((item) => (
            <TouchableOpacity
              key={item.title}
              className="w-full flex-row items-center gap-4 bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-green-50 dark:border-white/5"
            >
              <View className="w-12 h-12 rounded-full bg-primary/10 items-center justify-center">
                <MaterialCommunityIcons
                  name={item.icon}
                  size={24}
                  color="#10b981"
                />
              </View>
              <View className="flex-1">
                <Text className="text-gray-900 dark:text-white text-base font-semibold leading-tight mb-1">
                  {item.title}
                </Text>
                <Text className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-snug">
                  {item.description}
                </Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color="#9CA3AF"
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Legal;
