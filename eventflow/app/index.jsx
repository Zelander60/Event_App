import { View, Text, StatusBar, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { styled } from "nativewind";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const StyledView = styled(View);
const StyledText = styled(Text);

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/(onboarding)");
    }, 3000);
  }, []);

  return (
    <StyledView className="flex-1 justify-between items-center bg-[#021a12] py-10">
      <StatusBar barStyle="light-content" />
      {/* Spacer */}
      <StyledView />

      {/* Logo and Title */}
      <StyledView className="items-center gap-8">
        <StyledView className="w-28 h-28 bg-[#0a2820] border border-white/10 rounded-3xl items-center justify-center">
          <MaterialIcons name="local-activity" size={64} color="#10b981" />
        </StyledView>
        <StyledView className="items-center gap-3">
          <StyledText className="text-4xl font-extrabold tracking-tight text-white">
            EventFlow
          </StyledText>
          <StyledText className="text-base font-medium tracking-wider uppercase text-emerald-100/60">
            Manage. Discover. Attend.
          </StyledText>
        </StyledView>
      </StyledView>

      {/* Footer */}
      <StyledView className="items-center gap-6">
        <ActivityIndicator size="large" color="#10b981" />
        <StyledText className="text-xs font-normal text-emerald-100/40">
          Version 1.0.0
        </StyledText>
      </StyledView>
    </StyledView>
  );
};

export default Index;
