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
import useEventStore from "../../store/useEventStore";

const Checkout = () => {
  const router = useRouter();
  const { cart, addToCart, removeFromCart, getCartTotal } = useEventStore();

  const total = getCartTotal();

  // This is a workaround to ensure the component re-renders when the cart changes.
  const cartItems = useEventStore((state) => state.cart);
  React.useEffect(() => {
    // This effect will run whenever the cartItems change, forcing a re-render.
  }, [cartItems]);

  return (
    <ScrollView
      className="flex-1 bg-background-light dark:bg-background-dark"
      showsVerticalScrollIndicator={false}
    >
      <View className="sticky top-0 z-20 flex-row items-center justify-between px-4 py-4 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-[#e6e0dd] dark:border-border-dark">
        <TouchableOpacity
          className="p-2 rounded-full"
          onPress={() => router.back()}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color="#181311"
          />
        </TouchableOpacity>
        <Text className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
          Checkout
        </Text>
      </View>

      <View className="flex-col gap-6 p-4">
        <View className="flex-col gap-4">
          <Text className="text-base font-bold leading-normal px-1">
            Your Tickets
          </Text>
          {cart.map(({ event, ticket, quantity }) => (
            <View
              key={`${event.id}-${ticket.type}`}
              className="flex-col gap-3 p-3 rounded-xl bg-white dark:bg-card-dark border border-[#e6e0dd] dark:border-border-dark shadow-sm"
            >
              <View className="flex-row gap-4">
                <Image
                  source={{ uri: event.image }}
                  className="w-[80px] h-[80px] rounded-lg"
                />
                <View className="flex-1">
                  <View className="flex-row justify-between items-start">
                    <Text className="text-base font-bold leading-tight pr-2">
                      {event.title}
                    </Text>
                    <TouchableOpacity
                      onPress={() => removeFromCart(event, ticket)}
                    >
                      <MaterialCommunityIcons
                        name="delete"
                        size={20}
                        color="#886a60"
                      />
                    </TouchableOpacity>
                  </View>
                  <Text className="text-[#886a60] dark:text-text-secondary-dark text-xs font-medium mt-1">
                    {ticket.type}
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center justify-between pt-2 border-t border-[#f0ebe9] dark:border-[#3f312c]">
                <Text className="text-xs font-medium text-[#886a60] dark:text-text-secondary-dark">
                  Quantity
                </Text>
                <View className="flex-row items-center gap-3 bg-[#f4f2f1] dark:bg-[#221613] rounded-full px-1 py-1">
                  <TouchableOpacity
                    className="w-7 h-7 rounded-full bg-white dark:bg-[#392c28] items-center justify-center"
                    onPress={() => removeFromCart(event, ticket)}
                  >
                    <MaterialCommunityIcons name="minus" size={16} color="#181311" />
                  </TouchableOpacity>
                  <Text className="w-6 text-center text-sm font-bold text-[#181311] dark:text-white">
                    {quantity}
                  </Text>
                  <TouchableOpacity
                    className="w-7 h-7 rounded-full bg-primary text-white items-center justify-center"
                    onPress={() => addToCart(event, ticket)}
                  >
                    <MaterialCommunityIcons name="plus" size={16} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
        <TouchableOpacity
          className="w-full bg-primary py-4 rounded-xl items-center"
          onPress={() => router.push("/(app)/confirmation")}
        >
          <Text className="text-white font-bold text-lg">
            Pay ${total.toFixed(2)}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Checkout;
