import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import useEventStore from "../../store/useEventStore";
import DateTimePicker from "@react-native-community/datetimepicker";
import { COLORS } from "../../constants/theme";

const eventSchema = z.object({
  eventName: z.string().min(3, "Event name must be at least 3 characters"),
  category: z.string().min(1, "Please select a category"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  location: z.string().min(3, "Location must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

const CreateEvent = () => {
  const router = useRouter();
  const { addEvent } = useEventStore();
  const [image, setImage] = useState(null);

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(eventSchema),
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
      setValue("date", selectedDate.toLocaleDateString());
    }
  };

  const onTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setTime(selectedTime);
      setValue("time", selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }
  };

  const onSubmit = (data) => {
    addEvent({ ...data, id: Math.random().toString(), image });
    router.back();
  };

  return (
    <View className="flex-1 bg-background-light dark:bg-background-dark">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View className="sticky top-0 z-10 flex-row items-center justify-between bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 border-b border-black/5 dark:border-white/5">
          <TouchableOpacity
            className="w-10 h-10 items-center justify-center rounded-full"
            onPress={() => router.back()}
          >
            <MaterialIcons name="close" size={24} className="text-slate-700 dark:text-white" />
          </TouchableOpacity>
          <Text className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">
            Create Event
          </Text>
          <View className="w-10 h-10" />
        </View>

        <View className="p-4">
          <TouchableOpacity
            className="relative w-full h-[220px] rounded-xl overflow-hidden border border-dashed border-slate-300 dark:border-slate-700 bg-slate-200 dark:bg-slate-800/50 items-center justify-center"
            onPress={pickImage}
          >
            {image ? (
              <Image source={{ uri: image }} className="w-full h-full" />
            ) : (
              <View className="items-center justify-center text-center p-6">
                <View className="bg-black/40 backdrop-blur-sm p-3 rounded-full mb-3">
                  <MaterialIcons name="add-a-photo" size={32} color="white" />
                </View>
                <Text className="text-white font-bold text-lg">
                  Tap to upload cover
                </Text>
                <Text className="text-slate-200 text-sm font-medium mt-1">
                  Recommended: 1200x600px
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Basic Info */}
        <View className="px-4 pt-2">
          <Text className="text-slate-900 dark:text-white text-lg font-bold mb-4">Basic Info</Text>
          <View className="flex-col gap-5">
            <Controller
              control={control}
              name="eventName"
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <Text className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Event Name</Text>
                  <TextInput
                    className="w-full h-14 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder="e.g. Summer Music Festival"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                  {errors.eventName && <Text className="text-red-500 text-xs mt-1">{errors.eventName.message}</Text>}
                </View>
              )}
            />
          </View>
        </View>

      </ScrollView>

      <View className="absolute bottom-0 w-full bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-white/10 p-4 pb-6 flex-row gap-4">
        <TouchableOpacity className="flex-1 h-12 justify-center items-center rounded-full border border-slate-300 dark:border-white/20">
            <Text className="text-slate-700 dark:text-white font-bold">Save Draft</Text>
        </TouchableOpacity>
        <TouchableOpacity
            className="flex-1 h-12 justify-center items-center rounded-full bg-primary shadow-lg shadow-primary/20"
            onPress={handleSubmit(onSubmit)}
        >
            <Text className="text-white font-bold">Publish Event</Text>
        </TouchableOpacity>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}
      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={onTimeChange}
        />
      )}
    </View>
  );
};

export default CreateEvent;
