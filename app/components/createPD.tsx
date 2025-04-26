import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Pressable,
    Alert,
    ActivityIndicator,
  } from "react-native";
  import React, { useState } from "react";
  import { AntDesign, Ionicons } from "@expo/vector-icons";
  import { useNavigation } from "expo-router";
  import { createUser, login, UpdateUser } from "@/res/Api";
  import Product from '../../components/Product';
import { createProduct } from '../../res/Api';
import { create } from "react-test-renderer";

  const CreatePD = () => {
    const nav = useNavigation();
    const [price, setprice] = useState("");
    const [name, setname] = useState("");
    const [Quantity, setQuantity] = useState("");
    const [img, setimg] = useState("");
    const [loading, setLoad] = useState(false);
  
    const handlePress = () => {
      setLoad(true);
      const body = {
        price,
        name,
        Quantity,
        img,
      };
      createProduct(body)
        .then((Response) => {
          if (Response.success == true) {
            nav.navigate("index");
          } else {
            console.log("Response", );
            alert(Response?.message)
          }
        })
        .finally(() => {
          setLoad(false);
        });
    };
  
    // const pressRegister = () => {
    //     nav.
    //   };
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Add Product </Text>
        <View style={styles.inputContainer}>
  
  
    
  <Pressable style={styles.back} onPress={() => nav.navigate("index")} style={styles.homeButton}>
  <Ionicons name="arrow-back-circle-sharp" size={45} color="#0494a5" />
  
        </Pressable>
  
  
          <TextInput
            value={name}
            onChangeText={setname}
            placeholder="name"
            style={styles.input}
          />
          <TextInput
            value={price}
            onChangeText={setprice}
            placeholder="price"
            style={styles.input}
          />
          <TextInput
            value={ Quantity}
            onChangeText={setQuantity}
            placeholder="Quantity"
            secureTextEntry
            style={styles.input}
          />
          <TextInput
            value={img}
            onChangeText={setimg}
            placeholder="img"
            style={styles.input}
          />
          <Pressable style={styles.button} onPress={handlePress}>
            {loading ? (
              <ActivityIndicator />
            ) : (
              <>
                <Ionicons
                  name="checkmark-circle-outline"
                  size={24}
                  color="white"
                />
                <Text style={styles.buttonText}>Next</Text>
              </>
            )}
            
          </Pressable>
        </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    back:{
  alignContent:'flex-start'
  
    },
    container: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: "#F0F8FF",
    },
    title: {
      fontSize: 36,
      fontWeight: "bold",
      color: "#0494a5",
      marginBottom: 20,
    },
    inputContainer: {
      width: "100%",
      alignItems: "center",
    },
    input: {
      borderWidth: 1,
      borderColor: "#0494a5",
      padding: 15,
      fontSize: 18,
      width: "90%",
      marginBottom: 15,
      borderRadius: 8,
      backgroundColor: "#0494a5",
      shadowColor: "#0494a5",
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 20,   },
    button: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#0494a5",
      padding: 15,
      borderRadius: 8,
      width: "90%",
    },
    buttonText: {
      fontSize: 20,
      color: "white",
      marginLeft: 10,
    },
  });
  
  export default CreatePD;
  