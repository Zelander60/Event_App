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
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../../constants/theme";
import { useRouter } from "expo-router";
import useAuthStore from "../../../store/useAuthStore";

const AuthScreen = ({ type }) => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { login } = useAuthStore();

  const isSignIn = type === "sign-in";

  const handleAuth = () => {
    login({ name: "Alex Johnson" });
    router.replace("/(tabs)/home");
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
            <MaterialIcons
              name="confirmation-number"
              size={32}
              color={COLORS.primary}
            />
            <Text className="text-white text-lg font-bold tracking-wide uppercase opacity-90">
              TicketFlow
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
            <View className="space-y-1.5">
              <Text className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </Text>
              <View className="relative flex-row items-center">
                <MaterialIcons
                  name="badge"
                  size={24}
                  color="#9CA3AF"
                  style={{ position: "absolute", left: 16 }}
                />
                <TextInput
                  className="flex-1 pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400"
                  placeholder="John Doe"
                />
              </View>
            </View>
          )}
          <View className="space-y-1.5">
            <Text className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </Text>
            <View className="relative flex-row items-center">
              <MaterialIcons
                name="mail"
                size={24}
                color="#9CA3AF"
                style={{ position: "absolute", left: 16 }}
              />
              <TextInput
                className="flex-1 pl-12 pr-4 py-3.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400"
                placeholder="name@example.com"
                keyboardType="email-address"
              />
            </View>
          </View>
          <View className="space-y-1.5">
            <Text className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </Text>
            <View className="relative flex-row items-center">
              <MaterialIcons
                name="lock"
                size={24}
                color="#9CA3AF"
                style={{ position: "absolute", left: 16 }}
              />
              <TextInput
                className="flex-1 pl-12 pr-12 py-3.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400"
                placeholder={
                  isSignIn ? "Enter your password" : "Create a secure password"
                }
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                className="absolute right-4"
                onPress={() => setShowPassword(!showPassword)}
              >
                <MaterialIcons
                  name={showPassword ? "visibility" : "visibility-off"}
                  size={20}
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            className="w-full bg-primary py-4 rounded-xl shadow-lg shadow-primary/25 flex-row justify-center items-center gap-2"
            onPress={handleAuth}
          >
            <Text className="text-white font-bold text-base">
              {isSignIn ? "Log In" : "Get Started"}
            </Text>
            <MaterialIcons name="arrow-forward" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View className="relative my-8">
          <View className="absolute inset-0 flex-row items-center">
            <View className="w-full border-t border-gray-200 dark:border-slate-700" />
          </View>
          <View className="relative flex-row justify-center">
            <Text className="px-4 bg-background-light dark:bg-background-dark text-gray-500 dark:text-gray-400 font-medium">
              Or continue with
            </Text>
          </View>
        </View>

        {/* Social Logins */}
        <View className="flex-row gap-4">
          <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
            <FontAwesome name="google" size={20} color="#4285F4" />
            <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
            <FontAwesome
              name="apple"
              size={20}
              color={useColorScheme() === 'dark' ? "white" : "black"}
            />
            <Text className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Apple
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AuthScreen;
