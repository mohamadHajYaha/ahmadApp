import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Product2 from "@/components/Product2";
import datas from "@/Data/datacards";
import Ahmad from "@/components/Menuheader";
import Knabay from "@/components/Knabay";
import Swardata from "@/Data/Swardata";
import Swar from "@/components/Swar";
import { BlurView } from "expo-blur";
import { findAllProduct } from "@/res/Api";
import CustomAlert from "../components/CustomAlert";
import { router, useRouter } from "expo-router";

const Settings = () => {
    const nav = useRouter();
  const exit =() => {
    nav.push('home')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Settings</Text>
      <Pressable onPress={exit} style={styles.exit}>
        <Text>Exit</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
marginTop: 40,
    textAlign: 'center',
  },
  exit: {
    marginTop: 40,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
    marginLeft: 150,
  },
});

export default Settings;