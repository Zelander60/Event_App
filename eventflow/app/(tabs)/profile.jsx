import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Switch,
} from "react-native";
import React, a, { useState } from "react";
import { styled } from "nativewind";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledImage = styled(Image);
const StyledTextInput = styled(TextInput);
const StyledSwitch = styled(Switch);

const Profile = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <StyledScrollView
      className="flex-1 bg-background-light dark:bg-background-dark"
      showsVerticalScrollIndicator={false}
    >
      <StyledView className="sticky top-0 z-50 flex-row items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-200 dark:border-gray-800/50">
        <StyledText className="text-xl font-bold leading-tight tracking-tight flex-1">
          Profile
        </StyledText>
        <StyledTouchableOpacity className="active:scale-95 transition-transform">
          <StyledText className="text-primary text-base font-bold leading-normal tracking-wide">
            Edit
          </StyledText>
        </StyledTouchableOpacity>
      </StyledView>

      <StyledView className="p-6 flex-col items-center gap-6">
        <StyledView className="relative">
          <StyledImage
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuqVHgSvf_NliIKJWaV4GWyGDVj-Uw5-N09aBZE5YW3BiAohoQrh21IBIL5rFQzjmeRQYhzryV43ERpyHReXyV0CLWpYsUNiYeBR7PDULGfv_coTTJDb2ctZppRLdfnTZS194wKMCyzGn6nHerJyfOz1K8-zz1kjlhCeQxGQBtJuqNgSeTGfwws_0dV-Vg-4UE8hs47S7zyRopuiEWNI3o_VnAQd28uGUpzwsj41a3ohBFmrsvKQqkPT99XLsXrhgLcXB4WDJrV7C4",
            }}
            className="w-32 h-32 rounded-full"
          />
          <StyledTouchableOpacity className="absolute bottom-0 right-0 bg-primary p-2 rounded-full">
            <MaterialCommunityIcons name="camera" size={20} color="white" />
          </StyledTouchableOpacity>
        </StyledView>
        <StyledView className="flex-col items-center gap-1">
          <StyledText className="text-2xl font-bold leading-tight tracking-tight">
            Alex Johnson
          </StyledText>
          <StyledText className="text-gray-500 dark:text-gray-400 text-base font-medium">
            @alexj_events
          </StyledText>
          <StyledView className="mt-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30">
            <StyledText className="text-primary text-xs font-bold uppercase tracking-wider">
              Event CEO
            </StyledText>
          </StyledView>
        </StyledView>
      </StyledView>

      <StyledView className="px-4 pb-6">
        <StyledView className="h-12 w-full flex-row items-center justify-center rounded-xl bg-gray-200 dark:bg-surface-dark p-1 shadow-inner">
          <StyledTouchableOpacity className="h-full flex-1 items-center justify-center rounded-[10px] bg-white dark:bg-[#1f362a] shadow-sm">
            <StyledText className="text-sm font-semibold text-primary">
              Settings
            </StyledText>
          </StyledTouchableOpacity>
          <StyledTouchableOpacity className="h-full flex-1 items-center justify-center rounded-[10px]">
            <StyledText className="text-sm font-semibold text-gray-500 dark:text-gray-400">
              My Tickets
            </StyledText>
          </StyledTouchableOpacity>
        </StyledView>
      </StyledView>

      <StyledView className="mb-2">
        <StyledText className="text-gray-900 dark:text-white text-lg font-bold leading-tight px-6 pb-3 pt-2">
          Personal Info
        </StyledText>
        <StyledView className="flex-col gap-4 px-4">
          <StyledView className="flex-col w-full">
            <StyledText className="text-gray-500 dark:text-gray-400 text-sm font-medium pb-1.5 ml-1">
              Full Name
            </StyledText>
            <StyledView className="relative">
              <StyledTextInput
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-surface-dark text-slate-900 dark:text-white h-12 px-4"
                value="Alex Johnson"
              />
              <MaterialCommunityIcons
                name="account"
                size={20}
                color="#9CA3AF"
                style={{ position: "absolute", right: 16, top: 14 }}
              />
            </StyledView>
          </StyledView>
          <StyledView className="flex-col w-full">
            <StyledText className="text-gray-500 dark:text-gray-400 text-sm font-medium pb-1.5 ml-1">
              Email Address
            </StyledText>
            <StyledView className="relative">
              <StyledTextInput
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-surface-dark text-slate-900 dark:text-white h-12 px-4"
                value="alex@eventmanager.com"
              />
              <MaterialCommunityIcons
                name="email"
                size={20}
                color="#9CA3AF"
                style={{ position: "absolute", right: 16, top: 14 }}
              />
            </StyledView>
          </StyledView>
          <StyledView className="flex-col w-full">
            <StyledText className="text-gray-500 dark:text-gray-400 text-sm font-medium pb-1.5 ml-1">
              Phone Number
            </StyledText>
            <StyledView className="relative">
              <StyledTextInput
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-surface-dark text-slate-900 dark:text-white h-12 px-4"
                value="+1 (555) 123-4567"
              />
              <MaterialCommunityIcons
                name="phone"
                size={20}
                color="#9CA3AF"
                style={{ position: "absolute", right: 16, top: 14 }}
              />
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledView>

      <StyledView className="h-px bg-gray-200 dark:bg-gray-800 mx-6 my-6" />

      <StyledView className="mb-2">
        <StyledText className="text-gray-900 dark:text-white text-lg font-bold leading-tight px-6 pb-3">
          Preferences
        </StyledText>
        <StyledView className="flex-col px-4 gap-3">
          <StyledView className="flex-row items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700/50 shadow-sm">
            <StyledView className="flex-row items-center gap-3">
              <StyledView className="w-10 h-10 rounded-full bg-primary/10 items-center justify-center">
                <MaterialCommunityIcons
                  name="bell"
                  size={24}
                  color="#10b981"
                />
              </StyledView>
              <StyledView className="flex-col">
                <StyledText className="text-base font-semibold text-slate-900 dark:text-white">
                  Push Notifications
                </StyledText>
                <StyledText className="text-xs text-gray-500">
                  Event updates & reminders
                </StyledText>
              </StyledView>
            </StyledView>
            <StyledSwitch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledScrollView>
  );
};

export default Profile;
