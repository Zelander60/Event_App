import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { styled } from "nativewind";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { attendees as initialAttendees } from "../../constants/data";
import useEventStore from "../../store/useEventStore";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledImage = styled(Image);

const ManageAttendees = () => {
  const router = useRouter();
  const { attendees, setAttendees, updateAttendeeStatus } = useEventStore();

  useEffect(() => {
    setAttendees(initialAttendees);
  }, []);

  const handleCheckIn = (attendeeId) => {
    updateAttendeeStatus(attendeeId, "Checked In");
  };

  return (
    <StyledScrollView
      className="flex-1 bg-background-light dark:bg-background-dark"
      showsVerticalScrollIndicator={false}
    >
      <StyledView className="sticky top-0 z-20 bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-white/5 pb-2">
        <StyledView className="flex-row items-center p-4 pb-2 justify-between">
          <StyledTouchableOpacity
            className="w-10 h-10 items-center justify-center rounded-full"
            onPress={() => router.back()}
          >
            <MaterialCommunityIcons name="arrow-left" size={24} color="#141118" />
          </StyledTouchableOpacity>
          <StyledView className="flex-col items-center">
            <StyledText className="text-[#141118] dark:text-white text-lg font-bold leading-tight">
              Tech Summit 2024
            </StyledText>
            <StyledText className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Oct 12, 09:00 AM
            </StyledText>
          </StyledView>
          <StyledTouchableOpacity className="w-10 h-10 items-center justify-center rounded-full bg-primary/10">
            <MaterialCommunityIcons name="account-plus-outline" size={24} color="#10b981" />
          </StyledTouchableOpacity>
        </StyledView>
        <StyledView className="px-4 py-2">
          <StyledView className="relative w-full">
            <StyledView className="absolute inset-y-0 left-0 pl-3 flex-row items-center">
              <MaterialCommunityIcons name="magnify" size={22} color="#ab9db9" />
            </StyledView>
            <StyledTextInput
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#302839] border border-gray-200 dark:border-transparent rounded-xl text-sm placeholder-gray-400 dark:placeholder-[#ab9db9]"
              placeholder="Search name or ticket ID"
            />
          </StyledView>
        </StyledView>
      </StyledView>
      <StyledView className="grid grid-cols-3 gap-3 px-4 py-4">
        <StyledView className="flex-col gap-1 rounded-xl bg-white dark:bg-[#302839] p-3 items-center text-center shadow-sm dark:shadow-none border border-gray-100 dark:border-[#473b54]">
          <StyledText className="text-[#141118] dark:text-white text-xl font-bold leading-tight">
            1,204
          </StyledText>
          <StyledText className="text-gray-500 dark:text-[#ab9db9] text-xs font-normal">
            Sold
          </StyledText>
        </StyledView>
        <StyledView className="flex-col gap-1 rounded-xl bg-white dark:bg-[#302839] p-3 items-center text-center shadow-sm dark:shadow-none border border-gray-100 dark:border-[#473b54]">
          <StyledText className="text-primary text-xl font-bold leading-tight">
            850
          </StyledText>
          <StyledText className="text-gray-500 dark:text-[#ab9db9] text-xs font-normal">
            In
          </StyledText>
        </StyledView>
        <StyledView className="flex-col gap-1 rounded-xl bg-white dark:bg-[#302839] p-3 items-center text-center shadow-sm dark:shadow-none border border-gray-100 dark:border-[#473b54]">
          <StyledText className="text-[#141118] dark:text-white text-xl font-bold leading-tight">
            354
          </StyledText>
          <StyledText className="text-gray-500 dark:text-[#ab9db9] text-xs font-normal">
            Left
          </StyledText>
        </StyledView>
      </StyledView>
      <StyledView className="h-px bg-gray-200 dark:bg-white/5 mx-4 mb-2" />
      <StyledView className="flex-col">
        {attendees.map((attendee) => (
          <StyledView
            key={attendee.id}
            className="flex-row items-center gap-4 px-4 py-3"
          >
            {attendee.image ? (
              <StyledImage
                source={{ uri: attendee.image }}
                className="w-12 h-12 rounded-full"
              />
            ) : (
              <StyledView className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 items-center justify-center">
                <StyledText className="text-indigo-600 dark:text-indigo-300 font-bold">
                  {attendee.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </StyledText>
              </StyledView>
            )}
            <StyledView className="flex-1">
              <StyledText className="text-[#141118] dark:text-white text-base font-bold leading-tight">
                {attendee.name}
              </StyledText>
              <StyledView className="flex-row items-center gap-2 mt-1">
                <StyledView
                  className={`px-2 py-0.5 rounded-full ${
                    attendee.ticket === "VIP Access"
                      ? "bg-amber-100 dark:bg-amber-900/30"
                      : "bg-gray-100 dark:bg-white/10"
                  }`}
                >
                  <StyledText
                    className={`text-xs font-medium ${
                      attendee.ticket === "VIP Access"
                        ? "text-amber-800 dark:text-amber-200"
                        : "text-gray-800 dark:text-gray-300"
                    }`}
                  >
                    {attendee.ticket}
                  </StyledText>
                </StyledView>
                <StyledText className="text-gray-400 text-xs">
                  • #82910
                </StyledText>
              </StyledView>
            </StyledView>
            <StyledTouchableOpacity
              className={`w-[84px] h-9 items-center justify-center rounded-lg ${
                attendee.status === "Checked In"
                  ? "bg-emerald-500/10 dark:bg-emerald-500/20"
                  : "bg-primary"
              }`}
              onPress={() => handleCheckIn(attendee.id)}
              disabled={attendee.status === "Checked In"}
            >
              {attendee.status === "Checked In" ? (
                <StyledView className="flex-row items-center gap-1">
                  <MaterialCommunityIcons
                    name="check"
                    size={18}
                    color="#10B981"
                  />
                  <StyledText className="text-xs font-bold text-emerald-500">
                    In
                  </StyledText>
                </StyledView>
              ) : (
                <StyledText className="text-sm font-semibold text-white">
                  Check In
                </StyledText>
              )}
            </StyledTouchableOpacity>
          </StyledView>
        ))}
      </StyledView>
    </StyledScrollView>
  );
};

export default ManageAttendees;
