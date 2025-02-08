import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { Linking } from "react-native";

const Screen3 = ({ isOpen, setIsOpen }) => {
  const phoneNumber = "tel:054-907-9510"; // رقم الهاتف بصيغة اتصال

  const handleCall = () => {
    Linking.openURL(phoneNumber).catch((err) =>
      console.error("Failed to make a call:", err)
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => {
        setIsOpen(!isOpen);
      }}
    >
      <BlurView intensity={50} style={styles.container}>
        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => {
              setIsOpen(!isOpen);
            }}
            style={styles.closeButton}
          >
            <Ionicons name="close-outline" size={30} color={"red"} />
          </TouchableOpacity>
          <Text style={styles.title}>to communicate</Text>
          <TouchableOpacity onPress={handleCall}>
            <Text style={styles.phoneNumber}>054-915-0243</Text>
          </TouchableOpacity>
        </View>
      </BlurView>
    </Modal>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "white",
    width: 300,
    height: 120,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  phoneNumber: {
    fontSize: 18,
    textAlign: "center",
    color: "blue",
    textDecorationLine: "underline",
  },
});
