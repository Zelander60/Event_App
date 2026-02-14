import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  categories,
  featuredEvents,
  upcomingEvents,
} from "../../../constants/data";
import { useRouter } from "expo-router";
import useEventStore from "../../../store/useEventStore";

const Home = () => {
  const router = useRouter();
  const {
    setEvents,
    filteredEvents,
    filterEvents,
    searchQuery,
    setSearchQuery,
  } = useEventStore();
  const [activeCategory, setActiveCategory] = useState("All Events");

  useEffect(() => {
    setEvents([...featuredEvents, ...upcomingEvents]);
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);
    filterEvents(category);
  };

  return (
    <ScrollView
      className="flex-1 bg-background-light dark:bg-background-dark"
      showsVerticalScrollIndicator={false}
    >
      <View className="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md pt-safe-top border-b border-gray-200 dark:border-white/5 shadow-sm">
        <View className="flex-row items-center justify-between px-4 py-3">
          <View className="flex-row items-center gap-3">
            <View className="relative">
              <Image
                source={{
                  uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBP9Ut4SciP1Up8dy6hB6kvmp6m-J8n2oHKbeMYMJbaQSL5W4nxOcAPnVUiJlzaahp-M5etwCSbfkixR6V5c-6rcy1djyOKeCa-FvCE0MImBV9d9WWlIl-MS6w2KIaa_DECSi9A8rdiZoALIPnvGLcZAkOwygzGgM0KyS-8zG4IBueGE8sJDlRgoCqk7mtgSvuDhhchVjXZNIl0440keBVszeCEajNpcwMo8dm4S4ebOy0EEoAMwvgveGMINYV3SZ1eyUNWZK4nmOYp",
                }}
                className="w-10 h-10 rounded-full"
              />
              <View className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background-light dark:border-background-dark rounded-full" />
            </View>
            <View>
              <Text className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Hello, Jessica
              </Text>
              <Text className="text-sm font-bold leading-tight">
                Find Your Event
              </Text>
            </View>
          </View>
          <TouchableOpacity
            className="relative w-10 h-10 items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-white/5"
            onPress={() => router.push("/(app)/notifications")}
          >
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color="#4B5563"
            />
            <View className="absolute top-2 right-2.5 w-2 h-2 bg-primary rounded-full" />
          </TouchableOpacity>
        </View>
        <View className="px-4 pb-4 space-y-3">
          <View className="relative w-full">
            <View className="absolute inset-y-0 left-0 pl-3 flex-row items-center">
              <MaterialCommunityIcons name="magnify" size={22} color="#9CA3AF" />
            </View>
            <TextInput
              className="w-full pl-10 pr-4 py-3 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-xl text-sm placeholder-gray-400"
              placeholder="Search by name, artist, venue..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>
      </View>

      <View className="flex-col space-y-6 pt-4">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="pl-4"
        >
          <View className="flex-row gap-2 pr-4">
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                className={`px-4 py-1.5 rounded-full ${
                  activeCategory === category.title
                    ? "bg-primary/10 border border-primary"
                    : "bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-white/5"
                }`}
                onPress={() => handleFilter(category.title)}
              >
                <Text
                  className={`text-sm font-semibold ${
                    activeCategory === category.title
                      ? "text-primary"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {category.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <View>
          <View className="flex-row items-center justify-between px-4 mb-3">
            <Text className="text-lg font-bold tracking-tight">
              Featured Events
            </Text>
            <TouchableOpacity onPress={() => handleFilter("All Events")}>
              <Text className="text-primary text-xs font-semibold">
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="pl-4"
          >
            <View className="flex-row gap-4 pr-4">
              {filteredEvents
                .filter((event) => featuredEvents.some(fe => fe.id === event.id))
                .map((event) => (
                  <TouchableOpacity
                    key={event.id}
                    className="relative w-[280px] h-[340px] rounded-2xl overflow-hidden shadow-lg"
                    onPress={() => router.push(`/event/${event.id}`)}
                  >
                    <ImageBackground
                      source={{ uri: event.image }}
                      className="absolute inset-0"
                    />
                    <View className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <View className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 items-center min-w-[50px]">
                      <Text className="text-[10px] font-bold text-primary uppercase">
                        {event.date.month}
                      </Text>
                      <Text className="text-base font-bold text-white leading-none">
                        {event.date.day}
                      </Text>
                    </View>
                    <View className="absolute bottom-0 left-0 right-0 p-4">
                      <View
                        className={`px-2 py-0.5 rounded mb-1 self-start ${
                          event.category === "Concert"
                            ? "bg-primary"
                            : "bg-blue-500"
                        }`}
                      >
                        <Text className="text-white text-[10px] font-bold uppercase tracking-wider">
                          {event.category}
                        </Text>
                      </View>
                      <Text className="text-xl font-bold text-white leading-tight mb-1">
                        {event.title}
                      </Text>
                      <View className="flex-row items-center text-gray-300 text-xs mb-3">
                        <MaterialCommunityIcons
                          name="map-marker-outline"
                          size={14}
                          color="#D1D5DB"
                          style={{ marginRight: 4 }}
                        />
                        <Text className="text-gray-300 text-xs">
                          {event.location}
                        </Text>
                      </View>
                      <View className="flex-row items-center justify-between">
                        <Text className="text-lg font-bold text-primary">
                          {event.price}
                        </Text>
                        <TouchableOpacity className="w-8 h-8 bg-white/20 items-center justify-center rounded-full">
                          <MaterialCommunityIcons
                            name="arrow-right"
                            size={18}
                            color="white"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          </ScrollView>
        </View>

        <View className="px-4">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-bold tracking-tight">
              Upcoming Events
            </Text>
          </View>
          <View className="flex-col gap-4">
            {filteredEvents
              .filter((event) => upcomingEvents.some(ue => ue.id === event.id))
              .map((event) => (
                <TouchableOpacity
                  key={event.id}
                  className="flex-row p-3 bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-white/5 rounded-2xl shadow-sm"
                  onPress={() => router.push(`/event/${event.id}`)}
                >
                  <Image
                    source={{ uri: event.image }}
                    className="w-24 h-24 rounded-xl"
                  />
                  <View className="flex-1 pl-3 py-0.5 justify-between">
                    <View>
                      <View className="flex-row justify-between items-start mb-0.5">
                        <Text className="text-primary text-[10px] font-bold uppercase tracking-wide">
                          {event.category}
                        </Text>
                        <TouchableOpacity>
                          <MaterialCommunityIcons
                            name="bookmark-outline"
                            size={18}
                            color="#9CA3AF"
                          />
                        </TouchableOpacity>
                      </View>
                      <Text className="font-bold text-sm leading-tight line-clamp-2 mb-1">
                        {event.title}
                      </Text>
                      <View className="flex-row items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <MaterialCommunityIcons
                          name="calendar-month-outline"
                          size={12}
                          color="#6B7280"
                        />
                        <Text className="text-xs text-gray-500 dark:text-gray-400">
                          {event.date}
                        </Text>
                      </View>
                    </View>
                    <View className="flex-row items-center justify-between mt-1">
                      <View className="flex-row items-center gap-1 text-xs text-gray-500 dark:text-gray-400 max-w-[60%]">
                        <MaterialCommunityIcons
                          name="map-marker-outline"
                          size={12}
                          color="#6B7280"
                        />
                        <Text className="truncate">
                          {event.location}
                        </Text>
                      </View>
                      <Text className="text-sm font-bold text-primary">
                        {event.price}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
