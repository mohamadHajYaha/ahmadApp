import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import React, { useContext, useState } from "react";
import StoreContext from "@/Store/StoreConteext";
import { useLocalSearchParams } from "expo-router";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { CreditCardInput } from "react-native-credit-card-input";

const Bibent = (): any => {
  const { cart } = useContext(StoreContext);
  const [show, setShow] = useState(false);
  const data = useLocalSearchParams();

  const countItems = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const openModal = () => {
    setShow(!show);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.order}>View previous orders</Text>
      </View>
      <Text style={styles.title}>Final price:</Text>
      <Text style={styles.totalPrice}>{countItems()} $</Text>

      <Pressable style={styles.button} onPress={openModal}>
        <Text style={styles.buttonText}> Complete your purchase</Text>
      </Pressable>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => {
          setShow(!show);
        }}
      >
        <BlurView intensity={50} style={styles.modaContiner}>
          <View style={styles.modalView}>
            <Pressable style={styles.zr} onPress={openModal}>
              <Ionicons name="close-circle-outline" size={30} color={"red"} />
            </Pressable>
            <CreditCardInput
              requiresName={true}
              requiresCVC={true}
              allowScroll={true}
              cardImageStyle={styles.cardImageStyle} // Style for card image
              labelStyle={styles.labelStyle} // Style for field labels
              inputStyle={styles.inputStyle} // Style for input text
              inputContainerStyle={styles.inputContainerStyle} // Style for input container
              placeholderColor="#9E9E9E" // Placeholder color
            />
          </View>
        </BlurView>
      </Modal>
    </View>
  );
};

export default Bibent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F4F8",
    padding: 20,
  },
  modaContiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  zr: {},
  input: { borderWidth: 1, borderRadius: 10 },
  order: {
    fontSize: 25,
    marginBottom:200,
    
  },
  modalView: {
    margin: 100,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    width: 300,
    height: 400,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  title: {
    fontSize: 30,
    color: "#333",
    marginBottom: 20,
  },
  totalPrice: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#FF5722",
    padding: 15,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardImageStyle: {
    width: 50,
    height: 30,
    resizeMode: "contain",
    marginRight: 10,
  },
  labelStyle: {
    color: "#4CAF50",
    fontSize: 14,
  },
  inputStyle: {
    color: "#333",
    fontSize: 16,
    padding: 10,
  },
  inputContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
});
