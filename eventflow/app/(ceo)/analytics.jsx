import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { analytics } from "../../constants/data";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledTouchableOpacity = styled(TouchableOpacity);

const Analytics = () => {
  const router = useRouter();

  return (
    <StyledScrollView
      className="flex-1 bg-background-light dark:bg-zinc-950"
      showsVerticalScrollIndicator={false}
    >
      <StyledView className="sticky top-0 z-50 bg-background-light/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-emerald-100 dark:border-white/5 p-4 flex-row items-center justify-between">
        <StyledText className="text-xl font-bold leading-tight tracking-tight text-emerald-950 dark:text-emerald-50">
          Analytics
        </StyledText>
        <StyledTouchableOpacity className="w-10 h-10 items-center justify-center rounded-full">
          <MaterialCommunityIcons
            name="download"
            size={24}
            color="#065f46"
          />
        </StyledTouchableOpacity>
      </StyledView>

      <StyledView className="px-4 mt-4">
        <StyledText className="block mb-2 text-sm font-medium text-emerald-800 dark:text-emerald-300">
          Select Event
        </StyledText>
        <StyledView className="relative">
          {/* Replace with Picker component */}
          <StyledText className="w-full bg-white dark:bg-zinc-900 text-slate-900 dark:text-white border border-emerald-100 dark:border-white/10 rounded-xl px-4 py-3 pr-10">
            Summer Music Fest 2024
          </StyledText>
          <StyledView className="pointer-events-none absolute inset-y-0 right-0 flex-row items-center px-4">
            <MaterialCommunityIcons
              name="chevron-down"
              size={24}
              color="#10b981"
            />
          </StyledView>
        </StyledView>
      </StyledView>

      <StyledView className="w-full mt-4">
        <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
          <StyledView className="flex-row gap-3 px-4">
            <StyledTouchableOpacity className="px-4 py-2 bg-primary rounded-full">
              <StyledText className="text-white text-sm font-medium">
                Last 7 Days
              </StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity className="px-4 py-2 bg-white dark:bg-zinc-900 border border-emerald-100 dark:border-white/10 rounded-full">
              <StyledText className="text-slate-600 dark:text-slate-300 text-sm font-medium">
                Last 30 Days
              </StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        </StyledScrollView>
      </StyledView>

      <StyledView className="w-full mt-4">
        <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
          <StyledView className="flex-row gap-4 px-4">
            <StyledView className="min-w-[240px] flex-1 flex-col gap-3 rounded-xl p-5 bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-emerald-500/20 text-white">
              <StyledText className="text-emerald-50 text-sm font-medium">
                Total Revenue
              </StyledText>
              <StyledText className="text-3xl font-bold tracking-tight">
                {analytics.totalRevenue}
              </StyledText>
            </StyledView>
            <StyledView className="min-w-[240px] flex-1 flex-col gap-3 rounded-xl p-5 bg-white dark:bg-zinc-900 border border-emerald-100 dark:border-white/5 shadow-sm">
              <StyledText className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                Tickets Sold
              </StyledText>
              <StyledText className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                {analytics.ticketsSold}
              </StyledText>
            </StyledView>
          </StyledView>
        </StyledScrollView>
      </StyledView>
    </StyledScrollView>
  );
};

export default Analytics;
