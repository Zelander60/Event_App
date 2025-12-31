import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const Confirmation = () => {
  const router = useRouter();

  return (
    <StyledView className="flex-1 items-center bg-background-light dark:bg-background-dark">
      <StyledView className="w-full flex-col items-center gap-6 py-6">
        <StyledView className="relative flex items-center justify-center">
          <StyledView className="absolute w-24 h-24 rounded-full bg-primary/20 blur-xl" />
          <StyledView className="relative flex w-20 h-20 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-secondary">
            <MaterialCommunityIcons name="check" size={40} color="white" />
          </StyledView>
        </StyledView>
        <StyledView className="max-w-[480px] flex-col items-center gap-2 text-center">
          <StyledText className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white">
            Order Confirmed!
          </StyledText>
          <StyledText className="text-sm font-normal leading-normal text-slate-500 dark:text-slate-400 max-w-[280px]">
            You're going! A receipt has been sent to{" "}
            <StyledText className="text-slate-800 dark:text-slate-200 font-medium">
              alex@example.com
            </StyledText>
            .
          </StyledText>
        </StyledView>
      </StyledView>

      <StyledView className="w-full mt-4 mb-6 px-4">
        <StyledTouchableOpacity
          className="w-full rounded-2xl bg-white dark:bg-card-dark p-4 shadow-sm border border-slate-200 dark:border-white/5"
          onPress={() => router.push("/(tabs)/tickets")}
        >
          <StyledText className="text-center text-primary font-bold">
            View My Tickets
          </StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </StyledView>
  );
};

export default Confirmation;
