import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { styled } from "nativewind";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledTextInput = styled(TextInput);

const PaymentOptions = () => {
  const router = useRouter();

  return (
    <StyledScrollView
      className="flex-1 bg-background-light dark:bg-background-dark"
      showsVerticalScrollIndicator={false}
    >
      <StyledView className="sticky top-0 z-30 flex-row items-center justify-between bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 border-b border-slate-200 dark:border-white/5">
        <StyledTouchableOpacity
          className="w-10 h-10 shrink-0 items-center justify-center rounded-full"
          onPress={() => router.back()}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#4B5563" />
        </StyledTouchableOpacity>
        <StyledText className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
          Checkout
        </StyledText>
      </StyledView>

      <StyledView className="flex-1 flex-col gap-6 p-4 pb-32">
        <StyledView className="items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-card-dark p-3 shadow-sm border border-slate-100 dark:border-white/5">
          <StyledView className="flex-col justify-center gap-1 flex-[2_2_0px]">
            <StyledText className="text-slate-900 dark:text-white text-base font-bold leading-tight">
              Summer Music Festival
            </StyledText>
            <StyledText className="text-slate-500 dark:text-emerald-100/70 text-sm font-medium">
              VIP Pass (x2)
            </StyledText>
            <StyledView className="mt-1 flex-row items-baseline gap-1">
              <StyledText className="text-xs text-slate-400 dark:text-emerald-200/60 font-medium">
                Total:
              </StyledText>
              <StyledText className="text-secondary font-bold text-lg">
                $150.00
              </StyledText>
            </StyledView>
          </StyledView>
        </StyledView>

        <StyledView>
          <StyledText className="text-sm font-bold text-slate-900 dark:text-white mb-3 ml-1">
            Payment Method
          </StyledText>
          <StyledView className="h-12 w-full flex-row items-center justify-center rounded-xl bg-slate-200 dark:bg-emerald-900/40 p-1">
            <StyledTouchableOpacity className="group flex-row cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 bg-white dark:bg-card-dark shadow-sm">
              <MaterialCommunityIcons
                name="credit-card"
                size={20}
                color="#10b981"
              />
              <StyledText className="truncate text-sm font-semibold text-slate-900 dark:text-white ml-2">
                Card
              </StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity className="group flex-row cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2">
              <MaterialCommunityIcons
                name="apple"
                size={20}
                color="#9e9e9e"
              />
              <StyledText className="truncate text-sm font-semibold text-slate-500 dark:text-emerald-100/70 ml-2">
                Apple Pay
              </StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity className="group flex-row cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2">
              <MaterialCommunityIcons
                name="paypal"
                size={20}
                color="#9e9e9e"
              />
              <StyledText className="truncate text-sm font-semibold text-slate-500 dark:text-emerald-100/70 ml-2">
                PayPal
              </StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>

        <StyledView className="flex-col gap-5">
          <StyledView className="flex-row items-center justify-between">
            <StyledText className="text-sm font-bold text-slate-900 dark:text-white ml-1">
              Card Details
            </StyledText>
            <StyledTouchableOpacity>
              <StyledText className="text-xs font-medium text-primary">
                Scan Card
              </StyledText>
            </StyledTouchableOpacity>
          </StyledView>
          <StyledTextInput
            className="w-full rounded-xl border border-slate-200 dark:border-emerald-700/50 bg-white dark:bg-emerald-900/30 p-3.5 pl-11 text-base text-slate-900 dark:text-white"
            placeholder="0000 0000 0000 0000"
          />
        </StyledView>
      </StyledView>
    </StyledScrollView>
  );
};

export default PaymentOptions;
