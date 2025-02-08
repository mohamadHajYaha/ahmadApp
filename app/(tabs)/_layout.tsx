import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: (focused) => {
            return (
              <Ionicons
                name="home"
                size={30}
                color={focused.focused ? "#0F0E0E" : "#515585"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: (focused) => {
            return (
              <Ionicons
                name="cart"
                size={30}
                color={focused.focused ? "#0F0E0E" : "#515585"}
              />
            );
          },
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
