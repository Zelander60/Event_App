import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { onboarding } from "../../constants/images";
import { useRouter } from "expo-router";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);

const Onboarding = () => {
  const router = useRouter();
  return (
    <StyledView className="flex-1 bg-[#f8fcf9] dark:bg-[#0f1f1a]">
      {/* Header */}
      <StyledView className="items-center pt-8 pb-4">
        <StyledView className="flex-row items-center gap-2">
          <StyledView className="h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
            <MaterialIcons name="confirmation-number" size={24} color="#10b981" />
          </StyledView>
          <StyledText className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            EventFlow
          </StyledText>
        </StyledView>
      </StyledView>

      {/* Main Content */}
      <StyledView className="flex-1 pb-32">
        <StyledView className="px-4 py-2">
          <StyledView className="relative w-full overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 shadow-lg aspect-[4/3]">
            <StyledImage
              source={{ uri: onboarding.hero }}
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              resizeMode="cover"
            />
            <StyledView className="absolute inset-0 bg-gradient-to-t from-[#0f1f1a]/90 via-[#0f1f1a]/20 to-transparent" />
            <StyledView className="absolute bottom-0 left-0 w-full p-6 text-center">
              <StyledView className="inline-block px-3 py-1 mb-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                <StyledText className="text-xs font-semibold tracking-wider text-primary uppercase">
                  Welcome
                </StyledText>
              </StyledView>
              <StyledText className="text-3xl font-bold leading-tight text-white mb-2">
                Experience the Hype
              </StyledText>
              <StyledText className="text-white/80 text-sm font-medium leading-relaxed max-w-[280px] mx-auto">
                The ultimate platform to discover events, manage sales, and
                oversee operations.
              </StyledText>
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledView>

      {/* Footer */}
      <StyledView className="absolute bottom-0 left-0 w-full bg-[#f8fcf9]/90 dark:bg-[#0f1f1a]/95 backdrop-blur-md border-t border-slate-200 dark:border-white/5 pb-8 pt-4 px-6 z-10">
        <StyledView className="flex-col gap-3 max-w-md mx-auto">
          <StyledTouchableOpacity
            className="w-full flex-row items-center justify-center gap-2 rounded-lg bg-primary py-3.5 px-4"
            onPress={() => router.push("/(auth)/sign-up")}
          >
            <StyledText className="text-sm font-bold text-white">
              Create Account
            </StyledText>
          </StyledTouchableOpacity>
          <StyledTouchableOpacity
            className="w-full rounded-lg border border-slate-300 dark:border-white/20 bg-transparent py-3.5 px-4"
            onPress={() => router.push("/(auth)/sign-in")}
          >
            <StyledText className="text-sm font-bold text-slate-700 dark:text-white text-center">
              Log In
            </StyledText>
          </StyledTouchableOpacity>
          <StyledView className="relative my-2">
            <StyledView className="absolute inset-0 flex-row items-center">
              <StyledView className="w-full border-t border-slate-300 dark:border-white/10" />
            </StyledView>
            <StyledView className="relative flex-row justify-center">
              <StyledText className="bg-[#f8fcf9] dark:bg-[#0f1f1a] px-2 text-slate-500 text-xs uppercase">
                Or continue with
              </StyledText>
            </StyledView>
          </StyledView>
          <StyledView className="flex-row justify-center gap-6">
            <StyledTouchableOpacity className="h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5">
              <MaterialCommunityIcons
                name="google"
                size={20}
                color="#000"
              />
            </StyledTouchableOpacity>
            <StyledTouchableOpacity className="h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5">
              <MaterialCommunityIcons
                name="email"
                size={20}
                color="#000"
              />
            </StyledTouchableOpacity>
            <StyledTouchableOpacity className="h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5">
              <MaterialCommunityIcons
                name="apple"
                size={20}
                color="#000"
              />
            </StyledTouchableOpacity>
          </StyledView>
          <StyledText className="text-center text-[10px] text-slate-400 mt-2">
            By continuing, you agree to our Terms & Privacy Policy.
          </StyledText>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default Onboarding;
