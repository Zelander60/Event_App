import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import { featuredEvents, upcomingEvents } from "../../constants/data";
import useEventStore from "../../store/useEventStore";

const EventDetails = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { cart, addToCart, removeFromCart, getCartTotal } = useEventStore();

  const event =
    featuredEvents.find((e) => e.id === id) ||
    upcomingEvents.find((e) => e.id === id);

  const tickets = [
    { type: "General Admission", price: 50.0, description: "Entry to main floor" },
    { type: "VIP Pass", price: 120.0, description: "Sky lounge + Drinks" },
  ];

  const getTicketQuantity = (ticketType) => {
    const item = cart.find(
      (item) => item.event.id === event.id && item.ticket.type === ticketType
    );
    return item ? item.quantity : 0;
  };

  const total = getCartTotal();

  // This is a workaround to ensure the component re-renders when the cart changes.
  // A better solution would be to use a selector with `useStore`.
  const cartItems = useEventStore((state) => state.cart);
  React.useEffect(() => {
    // This effect will run whenever the cartItems change, forcing a re-render.
  }, [cartItems]);

  return (
    <>
      <ScrollView
        className="flex-1 bg-background-light dark:bg-background-dark"
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={{ uri: event.image }}
          className="w-full h-80"
        >
          <View className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <View className="absolute top-10 left-4">
            <TouchableOpacity
              className="w-10 h-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md"
              onPress={() => router.back()}
            >
              <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View className="p-5 -mt-12 bg-background-light dark:bg-background-dark rounded-t-3xl">
          <Text className="text-3xl font-extrabold text-gray-900 dark:text-white">
            {event.title}
          </Text>
          <View className="mt-4 flex-row items-center gap-4">
            <View className="flex-row items-center gap-1.5 text-primary">
              <MaterialCommunityIcons name="calendar-clock" size={20} color="#10b981" />
              <Text className="text-sm font-medium text-primary">
                {event.date.month
                  ? `Sat, ${event.date.month} ${event.date.day} • 8:00 PM`
                  : event.date}
              </Text>
            </View>
          </View>

          <View className="mt-6">
            <Text className="text-lg font-bold text-gray-900 dark:text-white">
              About Event
            </Text>
            <Text className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">
              Get ready for the most electrifying night of the year! Neon Nights
              brings together the world's top DJs for an unforgettable
              experience of light, sound, and energy. Expect immersive light
              shows, state-of-the-art sound systems, and a crowd that knows how
              to party.
            </Text>
          </View>

          <View className="mt-6">
            <Text className="text-lg font-bold text-gray-900 dark:text-white">
              Select Tickets
            </Text>
            <View className="mt-4 space-y-3">
              {tickets.map((ticket) => (
                <View
                  key={ticket.type}
                  className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-surface-dark flex-row justify-between items-center"
                >
                  <View>
                    <Text className="font-bold text-base text-gray-900 dark:text-white">
                      {ticket.type}
                    </Text>
                    <Text className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {ticket.description}
                    </Text>
                    <Text className="text-primary font-bold mt-2">
                      ${ticket.price.toFixed(2)}
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-3">
                    <TouchableOpacity
                      className="w-8 h-8 items-center justify-center rounded-md bg-gray-100 dark:bg-white/5"
                      onPress={() => removeFromCart(event, ticket)}
                    >
                      <MaterialCommunityIcons name="minus" size={18} color="#9CA3AF" />
                    </TouchableOpacity>
                    <Text className="font-bold w-4 text-center text-gray-900 dark:text-white">
                      {getTicketQuantity(ticket.type)}
                    </Text>
                    <TouchableOpacity
                      className="w-8 h-8 items-center justify-center rounded-md bg-primary"
                      onPress={() => addToCart(event, ticket)}
                    >
                      <MaterialCommunityIcons name="plus" size={18} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      {total > 0 && (
        <View className="absolute bottom-0 w-full bg-white/90 dark:bg-[#0b2419]/90 backdrop-blur-lg border-t border-gray-200 dark:border-white/5 p-4 pb-8 z-40">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-xs text-gray-500 dark:text-[#aabcb6] font-medium uppercase">
                Total Price
              </Text>
              <Text className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                ${total.toFixed(2)}
              </Text>
            </View>
            <TouchableOpacity
              className="h-12 px-8 rounded-xl bg-primary flex-row items-center justify-center gap-2"
              onPress={() => router.push("/(app)/checkout")}
            >
              <Text className="text-white font-bold text-base">
                Buy Tickets
              </Text>
              <MaterialCommunityIcons name="arrow-right" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default EventDetails;
