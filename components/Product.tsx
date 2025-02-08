import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
// import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import Screen3 from "@/app/Screen3";

const Product = ({ props }) => {
  const nav = useNavigation();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("user");
  })

  console.log("image", props.img);
  



  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.name}>{props.name}</Text>
        <Pressable
          onPress={() => {
            nav.navigate("Screen2", { ...props });
          }}
        >
          <Ionicons
            name="cart-outline"
            size={35}
            color={"black"}
            style={{ marginTop: 10, textAlign: "center" }}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            nav.navigate("Screen3");
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Ionicons
              name="call-outline"
              size={35}
              color={"black"}
              style={{ marginTop: 10, textAlign: "center" }}
            />
          </TouchableOpacity>
        </Pressable>

        <Text style={styles.price}>{props.price}$</Text>
      </View>
      <View>
        <Image style={styles.pic} source={{uri: props.Image}} />
      </View>

      {/* Modal */}
      <Screen3 isOpen={isOpen} setIsOpen={setIsOpen} />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  pic: {
    width: 130,
    height: 130,
    borderRadius: 5,
    // left: 15,
    
  },
  container: {
    marginLeft: "auto",
    padding: 15,
    flexDirection: "row",
    borderLeftWidth:0.6,
    borderWidth: 1,
    marginTop: 15,
    marginHorizontal: 20,
    borderColor:'black',
    width: 280,
    
    
  },
  price: {
    fontSize: 20,
    backgroundColor: "#00FFD1",
    color: "black",
    borderRadius: 10,
    overflow: "hidden",
    textAlign: "center",
    marginTop: 30,
  },
  name: {
    fontSize: 22,

    padding: 10,
  },

  containerText: {
    right: 5,
    
  },
});
