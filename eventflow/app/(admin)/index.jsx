import React from "react";
import { View, Text } from "react-native";
import useAuthStore from "../../store/useAuthStore";

const AdminDashboard = () => {
  const { user } = useAuthStore();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Welcome, {user?.name}!
      </Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>
        This is the Admin Dashboard.
      </Text>
    </View>
  );
};

export default AdminDashboard;
