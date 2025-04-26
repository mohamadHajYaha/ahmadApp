import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
     
     
      <Tabs.Screen options={{
        href: null
      }} name="changePassword" />
      <Tabs.Screen options={{
        href: null
      }} name="changePassword1" />
      <Tabs.Screen options={{
        href: null
      }} name="cart" />
       <Tabs.Screen options={{
        href: null
      }} name="Settings" />
       <Tabs.Screen options={{
        href: null
      }} name="home" />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
