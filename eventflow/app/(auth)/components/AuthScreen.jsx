import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../../constants/theme";
import { useRouter } from "expo-router";
import useAuthStore from "../../../store/useAuthStore";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signUpSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const AuthScreen = ({ type }) => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { login } = useAuthStore();

  const isSignIn = type === "sign-in";
  const schema = isSignIn ? signInSchema : signUpSchema;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleAuth = (data) => {
    // In a real app, you'd make an API call here.
    // For this demo, we'll just update the store and navigate.
    login({ name: data.fullName || "Jessica" });
    router.replace("/(protected)/home");
  };

  return (
    <ScrollView
      className="flex-1 bg-background-light dark:bg-background-dark"
      showsVerticalScrollIndicator={false}
    >
      <View className="relative w-full h-72">
        <ImageBackground
          source={{
            uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu_Eo-PurZwPEs7zalX6itSvHer7vavsKwiE11vu-ERMj5xyh_nHx3E1tm11RvvVfwPYqAe4xE75N-0S0MkP29dOuJayl846zhmXvUSKmAgNzn9aAQaMLUzo4tYajFVXaCJZ6k0JZTEF56AV-RsRQecQ_BY7ZvW06IxerZvkJ0N50ueTgSdQt-DpbTN1Ntt26Bry_kvSRzY7U87474YFjjGoet8P5thTy97YSDGn66dfi82xYsBrZIINd9hHdddGcxBwUjplH1Ci5i",
          }}
          className="absolute inset-0"
          resizeMode="cover"
        >
          <View className="absolute inset-0 bg-gradient-to-t from-black/10 to-black" />
        </ImageBackground>

        <View className="absolute inset-0 flex-col justify-end px-6 pb-12">
          <View className="flex-row items-center gap-2 mb-2">
            <MaterialCommunityIcons
              name="ticket-confirmation-outline"
              size={32}
              color={COLORS.primary}
            />
            <Text className="text-white text-lg font-bold tracking-wide uppercase opacity-90">
              EventFlow
            </Text>
          </View>
          <Text className="text-white text-3xl font-extrabold leading-tight tracking-tight">
            {isSignIn ? "Welcome back." : "Access the Hype."}
          </Text>
          <Text className="text-gray-300 text-sm mt-1">
            {isSignIn
              ? "Sign in to continue your journey."
              : "Manage events or discover your next experience."}
          </Text>
        </View>
      </View>

      <View className="flex-1 -mt-8 relative z-10 px-4 pb-8 w-full max-w-md mx-auto">
        <View className="bg-white dark:bg-slate-800 rounded-xl p-1.5 shadow-lg mb-6 flex-row relative">
          <View
            className={`absolute left-1.5 top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-primary rounded-lg transition-transform duration-300 ${
              isSignIn ? "translate-x-0" : "translate-x-[100%]"
            }`}
          />
          <TouchableOpacity
            className="flex-1 relative z-10 py-2.5"
            onPress={() => router.replace("/(auth)/sign-in")}
          >
            <Text
              className={`text-sm font-semibold text-center ${
                isSignIn
                  ? "text-white"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              Log In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 relative z-10 py-2.5"
            onPress={() => router.replace("/(auth)/sign-up")}
          >
            <Text
              className={`text-sm font-semibold text-center ${
                isSignIn
                  ? "text-gray-500 dark:text-gray-400"
                  : "text-white"
              }`}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <View className="space-y-4">
          {!isSignIn && (
            <Controller
              control={control}
              name="fullName"
              render={({ field: { onChange, onBlur, value } }) => (
                <View className="space-y-1.5">
                  <Text className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Name
                  </Text>
                  <View className="relative flex-row items-center">
                    <MaterialCommunityIcons
                      name="account-card-outline"
                      size={24}
                      color="#9CA3AF"
                      style={{ position: "absolute", left: 16 }}
                    />
                    <TextInput
                      className="flex-1 pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400"
                      placeholder="John Doe"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </View>
                  {errors.fullName && (
                    <Text className="text-red-500 text-xs">
                      {errors.fullName.message}
                    </Text>
                  )}
                </View>
              )}
            />
          )}
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="space-y-1.5">
                <Text className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </Text>
                <View className="relative flex-row items-center">
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={24}
                    color="#9CA3AF"
                    style={{ position: "absolute", left: 16 }}
                  />
                  <TextInput
                    className="flex-1 pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400"
                    placeholder="name@example.com"
                    keyboardType="email-address"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                </View>
                {errors.email && (
                  <Text className="text-red-500 text-xs">
                    {errors.email.message}
                  </Text>
                )}
              </View>
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="space-y-1.5">
                <Text className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </Text>
                <View className="relative flex-row items-center">
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={24}
                    color="#9CA3AF"
                    style={{ position: "absolute", left: 16 }}
                  />
                  <TextInput
                    className="flex-1 pl-12 pr-12 py-3.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400"
                    placeholder={
                      isSignIn
                        ? "Enter your password"
                        : "Create a secure password"
                    }
                    secureTextEntry={!showPassword}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                  <TouchableOpacity
                    className="absolute right-4"
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <MaterialCommunityIcons
                      name={showPassword ? "eye-outline" : "eye-off-outline"}
                      size={20}
                      color="#9CA3AF"
                    />
                  </TouchableOpacity>
                </View>
                {errors.password && (
                  <Text className="text-red-500 text-xs">
                    {errors.password.message}
                  </Text>
                )}
              </View>
            )}
          />
          <TouchableOpacity
            className="w-full bg-primary py-4 rounded-xl shadow-lg shadow-primary/25 flex-row justify-center items-center gap-2"
            onPress={handleSubmit(handleAuth)}
          >
            <Text className="text-white font-bold text-base">
              {isSignIn ? "Log In" : "Get Started"}
            </Text>
            <MaterialCommunityIcons name="arrow-right" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AuthScreen;
