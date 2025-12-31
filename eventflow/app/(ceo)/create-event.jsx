import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import { styled } from "nativewind";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { eventCategories } from "../../constants/data";
import useEventStore from "../../store/useEventStore";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledTextInput = styled(TextInput);
const StyledImage = styled(Image);

const CreateEvent = () => {
  const router = useRouter();
  const { addEvent } = useEventStore();
  const [form, setForm] = useState({
    title: "",
    category: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    addEvent({ ...form, id: Math.random().toString() });
    router.back();
  };

  return (
    <StyledScrollView
      className="flex-1 bg-background-light dark:bg-background-dark"
      showsVerticalScrollIndicator={false}
    >
      <StyledView className="sticky top-0 z-10 flex-row items-center justify-between bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 border-b border-black/5 dark:border-white/5">
        <StyledTouchableOpacity
          className="w-10 h-10 items-center justify-center rounded-full"
          onPress={() => router.back()}
        >
          <MaterialCommunityIcons name="close" size={24} color="#4B5563" />
        </StyledTouchableOpacity>
        <StyledText className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">
          Create Event
        </StyledText>
        <StyledView className="w-10 h-10" />
      </StyledView>

      <StyledView className="p-4">
        <StyledTouchableOpacity className="relative w-full h-[220px] rounded-xl overflow-hidden border border-dashed border-slate-300 dark:border-border-dark bg-surface-dark/50">
          <StyledView className="absolute inset-0 bg-cover bg-center opacity-60" />
          <StyledView className="relative h-full flex-col items-center justify-center text-center p-6 z-10">
            <StyledView className="bg-black/40 backdrop-blur-sm p-3 rounded-full mb-3">
              <MaterialCommunityIcons
                name="camera-plus-outline"
                size={32}
                color="white"
              />
            </StyledView>
            <StyledText className="text-white font-bold text-lg">
              Tap to upload cover
            </StyledText>
            <StyledText className="text-slate-200 text-sm font-medium mt-1">
              Recommended: 1200x600px
            </StyledText>
          </StyledView>
        </StyledTouchableOpacity>
      </StyledView>

      <StyledView className="px-4 pt-2">
        <StyledText className="text-slate-900 dark:text-white text-lg font-bold mb-4">
          Basic Info
        </StyledText>
        <StyledView className="flex-col gap-5">
          <StyledView className="flex-col gap-2">
            <StyledText className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Event Name
            </StyledText>
            <StyledTextInput
              className="w-full rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark text-slate-900 dark:text-white h-14 px-4"
              placeholder="e.g. Summer Music Festival"
              value={form.title}
              onChangeText={(value) => handleChange("title", value)}
            />
          </StyledView>
          <StyledView className="flex-col gap-2 relative">
            <StyledText className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Category
            </StyledText>
            <StyledView className="relative">
              {/* Replace with Picker component */}
              <StyledTextInput
                className="w-full rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark text-slate-900 dark:text-white h-14 px-4 pr-10"
                placeholder="Select a category"
                value={form.category}
                onChangeText={(value) => handleChange("category", value)}
              />
              <MaterialCommunityIcons
                name="chevron-down"
                size={24}
                color="#6B7280"
                style={{ position: "absolute", right: 16, top: 18 }}
              />
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledView>

      <StyledView className="h-px bg-slate-200 dark:bg-white/5 mx-4 my-8" />

      <StyledView className="px-4">
        <StyledText className="text-slate-900 dark:text-white text-lg font-bold mb-4">
          When & Where
        </StyledText>
        <StyledView className="flex-col gap-5">
          <StyledView className="flex-row gap-4">
            <StyledView className="flex-1 flex-col gap-2">
              <StyledText className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Date
              </StyledText>
              <StyledTextInput
                className="w-full rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark text-slate-900 dark:text-white h-14 px-4"
                placeholder="Select date"
                value={form.date}
                onChangeText={(value) => handleChange("date", value)}
              />
            </StyledView>
            <StyledView className="flex-1 flex-col gap-2">
              <StyledText className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Time
              </StyledText>
              <StyledTextInput
                className="w-full rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark text-slate-900 dark:text-white h-14 px-4"
                placeholder="Select time"
                value={form.time}
                onChangeText={(value) => handleChange("time", value)}
              />
            </StyledView>
          </StyledView>
          <StyledView className="flex-col gap-2">
            <StyledText className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Location
            </StyledText>
            <StyledTextInput
              className="w-full rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark text-slate-900 dark:text-white h-14 px-4"
              placeholder="Search venue or address"
              value={form.location}
              onChangeText={(value) => handleChange("location", value)}
            />
          </StyledView>
        </StyledView>
      </StyledView>

      <StyledView className="h-px bg-slate-200 dark:bg-white/5 mx-4 my-8" />

      <StyledView className="px-4">
        <StyledText className="text-slate-900 dark:text-white text-lg font-bold mb-4">
          About
        </StyledText>
        <StyledTextInput
          className="w-full rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark text-slate-900 dark:text-white min-h-[140px] p-4"
          placeholder="Tell people what makes your event special..."
          multiline
          value={form.description}
          onChangeText={(value) => handleChange("description", value)}
        />
      </StyledView>
      <StyledTouchableOpacity
        className="w-full bg-primary py-4 rounded-xl items-center mt-8"
        onPress={handleSubmit}
      >
        <StyledText className="text-white font-bold text-lg">
          Publish Event
        </StyledText>
      </StyledTouchableOpacity>
    </StyledScrollView>
  );
};

export default CreateEvent;
