import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Favorites = () => {
  const router = useRouter();

  const favoriteEvents = [
    {
      id: "1",
      title: "Neon Music Festival",
      date: "Aug 24 • 8:00 PM",
      location: "Brooklyn Mirage",
      price: "$45.00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAQU_yGsEincBWXsO3QtcPqgEdGO4SC_80-519x2K6uxCrbvyF2Qac5YoJiPOflvMD6GhNRBN_UsvCxlR6tfD60YTIVY9F05W4uvaqDrEzQSAxZUm3WCHkfERvEMmMLC88nxpSGUbvs6AhIAynx-QNx4TgfUf1mgCMN3JQQpV03UIYcgSJXBnyZWSYpv3oc8H8tO_Lslw2jQKTpFB-Tye7VLAC4pNO_jzzn0I77H3VsmESPlP0J6MsWqEJUdPUkVj5tpi9xkm1hrm-H",
    },
    {
      id: "2",
      title: "Tech Conference 2024",
      date: "Sep 12 • 9:00 AM",
      location: "Moscone Center",
      price: "$120.00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAptJpfVlkrd1jdXYWafZBieBOQ_zZyvqckPm7uP8fekqQIcm-Io9D15GoAaIDHrSYoZzgBCqrajRWkNC6eBuXpM5hOGGd4PID654zpRDGD6fTXMwpEq9NU0o7Y_4FHQVgmk46cI6ZkuJeABQ74OMXo00Zly-e3V-IGPajomiHf228F2DPVOsCCHPaaJqgUFwiJLQY60K6H7wykvDAhNC9e_BGZhqcVqArd05HTVPvZU7ssqgSphIURLp0tD596IRzhQFaENJ__DHVP",
    },
    {
      id: "3",
      title: "Annual Charity Gala",
      date: "Oct 05 • 7:00 PM",
      location: "The Plaza",
      price: "Free",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA8Ui6hZXihbmo1oaiMcvQY2ZHNTG10P_SbO5mGD352cmYmS3FWeTdtb1-mXePNs8m3sQT4NoIZPY1P7bHlkOJF_HmIfst19s5ubEGc3GvaLZdCNNRVo8V31i4Fom2wSOAeZh9qJtdNHKSaHGXYM3SJhM5-EsTX80OhZaBPQiqbk9GaG6C-h_AZFvG2HPsd0Mdzgwd3lHZYRbE0fMbh1O18RjU4uzKsJ00tOXosyG1dJNwQPWTCdvjHU33Qy3KI7is0ZgM_TUDMTXDv",
    },
  ];

  return (
    <ScrollView
      className="flex-1 bg-background-light dark:bg-background-dark"
      showsVerticalScrollIndicator={false}
    >
      <View className="sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-black/5 dark:border-white/5 px-4 py-3">
        <View className="flex-row items-center justify-between">
          <Text className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            My Wishlist
          </Text>
          <TouchableOpacity className="p-2 rounded-full">
            <MaterialCommunityIcons name="filter-variant" size={24} color="#6B7280" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="p-4 flex-col gap-4">
        {favoriteEvents.map((event) => (
          <View
            key={event.id}
            className="flex-col sm:flex-row gap-4 p-3 rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm border border-black/5 dark:border-white/5"
          >
            <Image
              source={{ uri: event.image }}
              className="w-full sm:w-32 aspect-video sm:aspect-square rounded-lg"
            />
            <View className="flex-1 justify-between gap-3">
              <View className="flex-row justify-between items-start gap-2">
                <View>
                  <Text className="text-lg font-bold leading-tight mb-1 text-slate-900 dark:text-white">
                    {event.title}
                  </Text>
                  <View className="flex-row items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                    <MaterialCommunityIcons
                      name="calendar"
                      size={16}
                      color="#6B7280"
                    />
                    <Text>{event.date}</Text>
                  </View>
                  <View className="flex-row items-center gap-1 text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    <MaterialCommunityIcons
                      name="map-marker"
                      size={16}
                      color="#6B7280"
                    />
                    <Text>{event.location}</Text>
                  </View>
                </View>
                <TouchableOpacity className="shrink-0 p-2 -mr-2 -mt-2 text-primary">
                  <MaterialCommunityIcons name="heart" size={24} color="#10b981" />
                </TouchableOpacity>
              </View>
              <View className="flex-row items-center justify-between mt-auto pt-2 border-t border-black/5 dark:border-white/5">
                <Text className="font-bold text-lg text-secondary">
                  {event.price}
                </Text>
                <TouchableOpacity className="bg-primary py-2 px-4 rounded-lg flex-row items-center gap-2">
                  <MaterialCommunityIcons
                    name="ticket-confirmation"
                    size={18}
                    color="white"
                  />
                  <Text className="text-white text-sm font-semibold">
                    Buy Ticket
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Favorites;
