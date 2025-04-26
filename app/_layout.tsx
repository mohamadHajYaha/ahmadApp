// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { Stack } from "expo-router";

// const _layout = () => {
//   return (
//     <Stack/>
//   );
// };

// export default _layout;

// const styles = StyleSheet.create({});
import React from "react";
import StoreProvider from "@/Store/StoreProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <StoreProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        {/* <Stack.Screen name="(tabs)" /> */}
        
      </Stack>
    </StoreProvider>
  );
}
