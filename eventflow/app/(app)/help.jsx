import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { styled } from "nativewind";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledTextInput = styled(TextInput);

const Accordion = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledView className="rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark overflow-hidden">
      <StyledTouchableOpacity
        className="flex-row items-center justify-between p-4"
        onPress={() => setIsOpen(!isOpen)}
      >
        <StyledView className="flex-row items-center gap-3">
          <MaterialCommunityIcons name={item.icon} size={24} color="#10b981" />
          <StyledText className="text-sm font-semibold">{item.question}</StyledText>
        </StyledView>
        <MaterialCommunityIcons
          name={isOpen ? "chevron-up" : "chevron-down"}
          size={24}
          color="#9CA3AF"
        />
      </StyledTouchableOpacity>
      {isOpen && (
        <StyledView className="px-4 pb-4 pl-[3.25rem]">
          <StyledText className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {item.answer}
          </StyledText>
        </StyledView>
      )}
    </StyledView>
  );
};

const Help = () => {
  const router = useRouter();

  const faqs = [
    {
      question: "How do I get a refund?",
      answer:
        "Refund policies vary by event. Generally, you can request a refund up to 7 days before the event starts. Go to 'My Tickets' > 'Order Details' to see your options.",
      icon: "cash-refund",
    },
    {
      question: "Where is my QR code?",
      answer:
        "Your QR code is sent to your email immediately after purchase. It is also available in the 'My Tickets' tab of this app.",
      icon: "qrcode-scan",
    },
    {
      question: "How to reset password?",
      answer:
        "Go to the login screen and tap 'Forgot Password'. We'll send a reset link to your registered email address.",
      icon: "lock-reset",
    },
    {
      question: "How to publish an event?",
      answer:
        "Event CEOs can publish events from the Dashboard. Click the '+' FAB button, fill in the details, and hit 'Publish'.",
      icon: "bullhorn",
    },
  ];

  return (
    <StyledScrollView
      className="flex-1 bg-background-light dark:bg-background-dark"
      showsVerticalScrollIndicator={false}
    >
      <StyledView className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-border-light dark:border-border-dark">
        <StyledView className="flex-row items-center justify-between px-4 py-3">
          <StyledTouchableOpacity
            className="w-10 h-10 items-center justify-center rounded-full"
            onPress={() => router.back()}
          >
            <MaterialCommunityIcons name="arrow-left" size={24} color="#4B5563" />
          </StyledTouchableOpacity>
          <StyledText className="text-lg font-bold leading-tight flex-1 text-center pr-10">
            Help & Support
          </StyledText>
        </StyledView>
      </StyledView>

      <StyledView className="px-5 pt-6 pb-2">
        <StyledText className="text-2xl font-bold mb-2">
          How can we help?
        </StyledText>
        <StyledText className="text-slate-600 dark:text-slate-400 text-sm mb-6">
          We're here to help you enjoy the event.
        </StyledText>
        <StyledView className="relative">
          <StyledView className="absolute inset-y-0 left-0 pl-3 flex-row items-center">
            <MaterialCommunityIcons name="magnify" size={24} color="#9CA3AF" />
          </StyledView>
          <StyledTextInput
            className="w-full pl-10 pr-4 py-3.5 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl text-base placeholder-slate-400 dark:placeholder-slate-500"
            placeholder="Search help articles..."
          />
        </StyledView>
      </StyledView>

      <StyledView className="px-5 py-2">
        <StyledText className="text-lg font-bold mb-4">
          Frequently Asked Questions
        </StyledText>
        <StyledView className="flex-col gap-3">
          {faqs.map((faq) => (
            <Accordion key={faq.question} item={faq} />
          ))}
        </StyledView>
      </StyledView>
    </StyledScrollView>
  );
};

export default Help;
