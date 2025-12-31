import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { styled } from "nativewind";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { featuredEvents } from "../../constants/data";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledTextInput = styled(TextInput);
const StyledImage = styled(Image);

const Checkout = () => {
  const router = useRouter();

  const cart = [
    { ...featuredEvents[0], quantity: 2 },
    { ...featuredEvents[1], quantity: 1 },
  ];

  return (
    <StyledScrollView
      className="flex-1 bg-background-light dark:bg-background-dark"
      showsVerticalScrollIndicator={false}
    >
      <StyledView className="sticky top-0 z-20 flex-row items-center justify-between px-4 py-4 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-[#e6e0dd] dark:border-border-dark">
        <StyledTouchableOpacity
          className="p-2 rounded-full"
          onPress={() => router.back()}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color="#181311"
          />
        </StyledTouchableOpacity>
        <StyledText className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
          Checkout
        </StyledText>
      </StyledView>

      <StyledView className="flex-col gap-6 p-4">
        <StyledView className="flex-col gap-4">
          <StyledText className="text-base font-bold leading-normal px-1">
            Your Tickets
          </StyledText>
          {cart.map((item) => (
            <StyledView
              key={item.id}
              className="flex-col gap-3 p-3 rounded-xl bg-white dark:bg-card-dark border border-[#e6e0dd] dark:border-border-dark shadow-sm"
            >
              <StyledView className="flex-row gap-4">
                <StyledImage
                  source={{ uri: item.image }}
                  className="w-[80px] h-[80px] rounded-lg"
                />
                <StyledView className="flex-1">
                  <StyledView className="flex-row justify-between items-start">
                    <StyledText className="text-base font-bold leading-tight pr-2">
                      {item.title}
                    </StyledText>
                    <StyledTouchableOpacity>
                      <MaterialCommunityIcons
                        name="delete"
                        size={20}
                        color="#886a60"
                      />
                    </StyledTouchableOpacity>
                  </StyledView>
                  <StyledText className="text-[#886a60] dark:text-text-secondary-dark text-xs font-medium mt-1">
                    {item.date.month} {item.date.day} • {item.location}
                  </StyledText>
                </StyledView>
              </StyledView>
              <StyledView className="flex-row items-center justify-between pt-2 border-t border-[#f0ebe9] dark:border-[#3f312c]">
                <StyledText className="text-xs font-medium text-[#886a60] dark:text-text-secondary-dark">
                  Quantity
                </StyledText>
                <StyledView className="flex-row items-center gap-3 bg-[#f4f2f1] dark:bg-[#221613] rounded-full px-1 py-1">
                  <StyledTouchableOpacity className="w-7 h-7 rounded-full bg-white dark:bg-[#392c28] items-center justify-center">
                    <MaterialCommunityIcons name="minus" size={16} color="#181311" />
                  </StyledTouchableOpacity>
                  <StyledText className="w-6 text-center text-sm font-bold text-[#181311] dark:text-white">
                    {item.quantity}
                  </StyledText>
                  <StyledTouchableOpacity className="w-7 h-7 rounded-full bg-primary text-white items-center justify-center">
                    <MaterialCommunityIcons name="plus" size={16} color="white" />
                  </StyledTouchableOpacity>
                </StyledView>
              </StyledView>
            </StyledView>
          ))}
        </StyledView>
        <StyledTouchableOpacity
          className="w-full bg-primary py-4 rounded-xl items-center"
          onPress={() => router.push("/(app)/confirmation")}
        >
          <StyledText className="text-white font-bold text-lg">
            Pay $393.75
          </StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </StyledScrollView>
  );
};

export default Checkout;
