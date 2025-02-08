import { Pressable, StyleSheet, Text, View, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Splash = () => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate the icon scale
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Redirect after a delay
    const timeout = setTimeout(() => {
      router.replace("/home");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [scaleAnim]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> welcome to Store  </Text>
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Ionicons style={styles.icon} name="power-outline" size={150} />
      </Animated.View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#322f2f', // Base color
    backgroundImage: 'linear-gradient(to bottom,rgb(111, 113, 113),rgb(139, 126, 126))', // Background gradient
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 50,
    color: "white",
    textShadowColor: "#000",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 5,
  },
  icon: {
    marginTop: 50,
    color: "white",
    textAlign: "center",
  },
});
