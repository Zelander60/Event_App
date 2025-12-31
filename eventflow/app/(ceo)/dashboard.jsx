import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { ceoDashboard } from "../../constants/data";
import { useRouter } from "expo-router";

const Dashboard = () => {
  const router = useRouter();
  return (
    <ScrollView
      className="flex-1 bg-background-light dark:bg-background-dark"
      showsVerticalScrollIndicator={false}
    >
      <View className="sticky top-0 z-50 flex-row items-center bg-background-light dark:bg-background-dark p-4 justify-between border-b border-slate-200 dark:border-white/5">
        <View className="flex-row items-center gap-3">
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSYUjploH4UBDpLj-_zTDAgJ-zq4jGOdHKi_es36nr8OS_NGyH_Ms2aBJpRlULCQlXsgUmpwryEfDcMKJfIos-uBvnNqHEx7Fcyiu_UOlBJS_5EfqrPmT_TA4790zcgs5aWe5B1cyrKs1eFMQ01nyDdk_gWpmLbq-AUKWfUhPidtsl2Q5o6MdQvO5IqSct3VRhVKXcMzwe2quze2v1dT5VX6Fc-BG3pUrOFBWXdD6-4Ir1qCaaSls0HXF66mCVWY-G2o2Hv-RXyOMQ",
            }}
            className="w-10 h-10 rounded-full"
          />
          <View>
            <Text className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Welcome back,
            </Text>
            <Text className="text-slate-900 dark:text-white text-base font-bold leading-tight">
              Sarah Jenkins
            </Text>
          </View>
        </View>
        <TouchableOpacity className="relative w-10 h-10 items-center justify-center rounded-full bg-white dark:bg-card-dark text-slate-900 dark:text-white shadow-sm">
          <MaterialIcons name="notifications-none" size={24} color="#4B5563" />
          <View className="absolute top-2 right-2 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white dark:border-card-dark" />
        </TouchableOpacity>
      </View>

      <View className="flex-col gap-4 p-4">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="pb-2"
        >
          <View className="flex-row gap-4">
            <View className="flex min-w-[260px] flex-1 flex-col justify-between rounded-xl p-5 bg-white dark:bg-card-dark shadow-sm border border-slate-100 dark:border-white/5">
              <View className="flex-row justify-between items-start mb-4">
                <View className="flex-col gap-1">
                  <Text className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    Total Revenue
                  </Text>
                  <Text className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">
                    {ceoDashboard.revenue}
                  </Text>
                </View>
                <View className="w-10 h-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MaterialIcons name="attach-money" size={24} color={COLORS.primary} />
                </View>
              </View>
              <View className="flex-row items-center gap-2">
                <View className="flex-row items-center bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <MaterialIcons
                    name="trending-up"
                    size={14}
                    color="#10B981"
                    style={{ marginRight: 2 }}
                  />
                  <Text className="text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                    +15%
                  </Text>
                </View>
                <Text className="text-slate-400 dark:text-slate-500 text-xs">
                  vs last month
                </Text>
              </View>
            </View>
            <View className="flex min-w-[260px] flex-1 flex-col justify-between rounded-xl p-5 bg-white dark:bg-card-dark shadow-sm border border-slate-100 dark:border-white/5">
              <View className="flex-row justify-between items-start mb-4">
                <View className="flex-col gap-1">
                  <Text className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    Total Attendees
                  </Text>
                  <Text className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">
                    {ceoDashboard.attendees}
                  </Text>
                </View>
                <View className="w-10 h-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                  <MaterialIcons
                    name="people"
                    size={24}
                    color="#3B82F6"
                  />
                </View>
              </View>
              <View className="flex-row items-center gap-2">
                <View className="flex-row items-center bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <MaterialIcons
                    name="trending-up"
                    size={14}
                    color="#10B981"
                    style={{ marginRight: 2 }}
                  />
                  <Text className="text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                    +8%
                  </Text>
                </View>
                <Text className="text-slate-400 dark:text-slate-500 text-xs">
                  vs last month
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <View className="px-4 pb-2">
        <Text className="text-slate-900 dark:text-white text-lg font-bold mb-3">
          Quick Actions
        </Text>
        <View className="flex-row gap-3">
          <TouchableOpacity className="flex-1 flex-col items-center gap-2">
            <View className="w-14 h-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
              <MaterialIcons name="qr-code-scanner" size={24} color="white" />
            </View>
            <Text className="text-xs font-medium text-slate-600 dark:text-slate-400 text-center leading-tight">
              Scan Ticket
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 flex-col items-center gap-2"
            onPress={() => router.push("/(ceo)/analytics")}
          >
            <View className="w-14 h-14 items-center justify-center rounded-2xl bg-white dark:bg-card-dark text-slate-900 dark:text-white border border-slate-100 dark:border-white/5 shadow-sm">
              <MaterialIcons name="analytics" size={24} color="#4B5563" />
            </View>
            <Text className="text-xs font-medium text-slate-600 dark:text-slate-400 text-center leading-tight">
              Analytics
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 flex-col items-center gap-2">
            <View className="w-14 h-14 items-center justify-center rounded-2xl bg-white dark:bg-card-dark text-slate-900 dark:text-white border border-slate-100 dark:border-white/5 shadow-sm">
              <MaterialIcons name="ios-share" size={24} color="#4B5563" />
            </View>
            <Text className="text-xs font-medium text-slate-600 dark:text-slate-400 text-center leading-tight">
              Export
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 flex-col items-center gap-2">
            <View className="w-14 h-14 items-center justify-center rounded-2xl bg-white dark:bg-card-dark text-slate-900 dark:text-white border border-slate-100 dark:border-white/5 shadow-sm">
              <MaterialIcons name="email" size={24} color="#4B5563" />
            </View>
            <Text className="text-xs font-medium text-slate-600 dark:text-slate-400 text-center leading-tight">
              Message
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;
