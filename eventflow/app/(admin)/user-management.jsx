import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { styled } from "nativewind";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { users } from "../../constants/data";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledImage = styled(Image);

const UserManagement = () => {
  const router = useRouter();
  return (
    <StyledScrollView
      className="flex-1 bg-background-light dark:bg-background-dark"
      showsVerticalScrollIndicator={false}
    >
      <StyledView className="sticky top-0 z-20 flex-row items-center justify-between bg-background-light/90 dark:bg-background-dark/90 p-4 backdrop-blur-md">
        <StyledTouchableOpacity
          className="w-10 h-10 shrink-0 items-center justify-center rounded-full"
          onPress={() => router.back()}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#141118" />
        </StyledTouchableOpacity>
        <StyledText className="flex-1 text-center text-lg font-bold leading-tight tracking-tight text-gray-900 dark:text-emerald-50">
          User Management
        </StyledText>
        <StyledTouchableOpacity className="h-10 items-center justify-center gap-1 rounded-full px-3">
          <MaterialCommunityIcons name="plus" size={20} color="#10b981" />
          <StyledText className="text-sm font-bold text-primary">Add</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
      <StyledView className="px-4 py-2">
        <StyledView className="w-full flex-row items-center rounded-xl bg-white dark:bg-surface-dark border border-emerald-100 dark:border-white/10 px-3 py-3">
          <MaterialCommunityIcons name="magnify" size={24} color="#9CA3AF" />
          <StyledTextInput
            className="flex-1 bg-transparent px-3 text-base text-gray-900 dark:text-emerald-50 placeholder:text-gray-400 dark:placeholder:text-emerald-300/60"
            placeholder="Search by name or email"
          />
        </StyledView>
      </StyledView>
      <StyledView className="mt-2 px-4 py-2">
        <StyledView className="flex-row items-center justify-between">
          <StyledText className="text-lg font-bold text-gray-900 dark:text-emerald-50">
            Event CEOs{" "}
            <StyledText className="text-secondary dark:text-secondary font-medium">
              ({users.length})
            </StyledText>
          </StyledText>
          <StyledTouchableOpacity>
            <StyledText className="text-xs font-semibold text-primary uppercase tracking-wider">
              Sort by
            </StyledText>
          </StyledTouchableOpacity>
        </StyledView>
      </StyledView>
      <StyledView className="flex-col gap-3 px-4 pb-4">
        {users.map((user) => (
          <StyledView
            key={user.id}
            className="flex-row items-center gap-4 rounded-2xl bg-white dark:bg-surface-dark p-3 pr-2"
          >
            <StyledImage
              source={{ uri: user.image }}
              className="w-14 h-14 rounded-full"
            />
            <StyledView className="flex-1">
              <StyledView className="flex-row items-center gap-2">
                <StyledText className="truncate text-base font-bold text-gray-900 dark:text-emerald-50">
                  {user.name}
                </StyledText>
                <StyledView
                  className={`px-2 py-0.5 rounded-md ${
                    user.status === "Active"
                      ? "bg-primary/10"
                      : "bg-red-500/10"
                  }`}
                >
                  <StyledText
                    className={`text-xs font-medium ${
                      user.status === "Active"
                        ? "text-primary"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {user.status}
                  </StyledText>
                </StyledView>
              </StyledView>
              <StyledText className="truncate text-sm text-gray-500 dark:text-emerald-200/70">
                {user.email}
              </StyledText>
              <StyledView className="mt-1 flex-row items-center gap-1.5 text-xs font-medium text-secondary dark:text-secondary/80">
                <MaterialCommunityIcons
                  name="calendar"
                  size={14}
                  color="#3b82f6"
                />
                <StyledText>{user.events}</StyledText>
              </StyledView>
            </StyledView>
            <StyledTouchableOpacity className="w-10 h-10 items-center justify-center rounded-full">
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color="#9CA3AF"
              />
            </StyledTouchableOpacity>
          </StyledView>
        ))}
      </StyledView>
    </StyledScrollView>
  );
};

export default UserManagement;
