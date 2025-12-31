import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { upcomingEvents } from "../../constants/data";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledTouchableOpacity = styled(TouchableOpacity);

const Calendar = () => {
  const router = useRouter();

  return (
    <StyledScrollView
      className="flex-1 bg-background-light dark:bg-background-dark"
      showsVerticalScrollIndicator={false}
    >
      <StyledView className="sticky top-0 z-20 bg-background-light dark:bg-background-dark/95 backdrop-blur-sm px-4 py-3">
        <StyledText className="text-2xl font-bold leading-tight tracking-tight">
          Calendar
        </StyledText>
      </StyledView>

      <StyledView className="px-4 pt-2 pb-6">
        <StyledView className="flex-row items-center justify-between mb-6">
          <StyledTouchableOpacity className="w-8 h-8 items-center justify-center rounded-full">
            <MaterialCommunityIcons name="chevron-left" size={20} color="#6B7280" />
          </StyledTouchableOpacity>
          <StyledText className="text-lg font-bold">October 2023</StyledText>
          <StyledTouchableOpacity className="w-8 h-8 items-center justify-center rounded-full">
            <MaterialCommunityIcons name="chevron-right" size={20} color="#6B7280" />
          </StyledTouchableOpacity>
        </StyledView>
      </StyledView>

      <StyledView className="bg-white dark:bg-slate-900 rounded-t-3xl min-h-[500px] shadow-lg pb-10">
        <StyledView className="px-6 py-5 flex-row items-center justify-between sticky top-0 bg-white dark:bg-slate-900 rounded-t-3xl z-10">
          <StyledView>
            <StyledText className="text-xl font-bold dark:text-white">
              Thursday, Oct 5
            </StyledText>
            <StyledText className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {upcomingEvents.length} events today
            </StyledText>
          </StyledView>
        </StyledView>
        <StyledView className="flex-col gap-4 px-4">
          {upcomingEvents.map((event) => (
            <StyledTouchableOpacity
              key={event.id}
              className="flex-row p-3 gap-4 bg-slate-50 dark:bg-surface-dark rounded-2xl shadow-sm"
              onPress={() => router.push(`/event/${event.id}`)}
            >
              <StyledView className="w-24 h-24 rounded-xl bg-cover bg-center" />
              <StyledView className="flex-1 justify-between py-0.5">
                <StyledView>
                  <StyledText className="text-base font-bold text-slate-900 dark:text-white leading-tight mb-1">
                    {event.title}
                  </StyledText>
                  <StyledView className="flex-row items-center gap-1 text-slate-500 dark:text-slate-400 text-xs">
                    <MaterialCommunityIcons name="map-marker" size={14} color="#6B7280" />
                    <StyledText>{event.location}</StyledText>
                  </StyledView>
                </StyledView>
              </StyledView>
            </StyledTouchableOpacity>
          ))}
        </StyledView>
      </StyledView>
    </StyledScrollView>
  );
};

export default Calendar;
