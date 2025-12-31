import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const PaymentOptions = () => {
  const router = useRouter();
  const [saveCard, setSaveCard] = useState(false);

  return (
    <ScrollView
      className="flex-1 bg-background-light dark:bg-background-dark"
      showsVerticalScrollIndicator={false}
    >
      <View className="sticky top-0 z-30 flex-row items-center justify-between bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 border-b border-slate-200 dark:border-white/5">
        <TouchableOpacity
          className="w-10 h-10 shrink-0 items-center justify-center rounded-full"
          onPress={() => router.back()}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#4B5563" />
        </TouchableOpacity>
        <Text className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
          Checkout
        </Text>
      </View>

      <View className="flex-1 flex-col gap-6 p-4 pb-32">
        <View className="items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-card-dark p-3 shadow-sm border border-slate-100 dark:border-white/5">
          <View className="flex-col justify-center gap-1 flex-[2_2_0px]">
            <Text className="text-slate-900 dark:text-white text-base font-bold leading-tight">
              Summer Music Festival
            </Text>
            <Text className="text-slate-500 dark:text-emerald-100/70 text-sm font-medium">
              VIP Pass (x2)
            </Text>
            <View className="mt-1 flex-row items-baseline gap-1">
              <Text className="text-xs text-slate-400 dark:text-emerald-200/60 font-medium">
                Total:
              </Text>
              <Text className="text-secondary font-bold text-lg">
                $150.00
              </Text>
            </View>
          </View>
        </View>

        <View>
          <Text className="text-sm font-bold text-slate-900 dark:text-white mb-3 ml-1">
            Payment Method
          </Text>
          <View className="h-12 w-full flex-row items-center justify-center rounded-xl bg-slate-200 dark:bg-emerald-900/40 p-1">
            <TouchableOpacity className="group flex-row cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 bg-white dark:bg-card-dark shadow-sm">
              <MaterialCommunityIcons
                name="credit-card"
                size={20}
                color="#10b981"
              />
              <Text className="truncate text-sm font-semibold text-slate-900 dark:text-white ml-2">
                Card
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="group flex-row cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2">
              <MaterialCommunityIcons
                name="apple"
                size={20}
                color="#9e9e9e"
              />
              <Text className="truncate text-sm font-semibold text-slate-500 dark:text-emerald-100/70 ml-2">
                Apple Pay
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="group flex-row cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2">
              <MaterialCommunityIcons
                name="paypal"
                size={20}
                color="#9e9e9e"
              />
              <Text className="truncate text-sm font-semibold text-slate-500 dark:text-emerald-100/70 ml-2">
                PayPal
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-col gap-5">
          <View className="flex-row items-center justify-between">
            <Text className="text-sm font-bold text-slate-900 dark:text-white ml-1">
              Card Details
            </Text>
            <TouchableOpacity>
              <Text className="text-xs font-medium text-primary">
                Scan Card
              </Text>
            </TouchableOpacity>
          </View>
          <TextInput
            className="w-full rounded-xl border border-slate-200 dark:border-emerald-700/50 bg-white dark:bg-emerald-900/30 p-3.5 pl-11 text-base text-slate-900 dark:text-white"
            placeholder="0000 0000 0000 0000"
          />
          <View className="flex-row gap-4">
            <TextInput
              className="flex-1 rounded-xl border border-slate-200 dark:border-emerald-700/50 bg-white dark:bg-emerald-900/30 p-3.5 text-base text-slate-900 dark:text-white"
              placeholder="MM/YY"
            />
            <TextInput
              className="flex-1 rounded-xl border border-slate-200 dark:border-emerald-700/50 bg-white dark:bg-emerald-900/30 p-3.5 text-base text-slate-900 dark:text-white"
              placeholder="CVV"
            />
          </View>
          <View className="flex-row items-center gap-3 py-1 px-1 mt-2">
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={saveCard ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setSaveCard(!saveCard)}
              value={saveCard}
            />
            <Text className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Save card for future payments
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PaymentOptions;
