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
import { createUser, login } from "@/res/Api";

const Register = () => {
  const nav = useNavigation();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [loading, setLoad] = useState(false);

  const handlePress = () => {
    setLoad(true);
    const body = {
      userName: userName,
      password: password,
      email: email,
      phone: phone,

    };

    createUser(body)
      .then((Response) => {

        if (Response.success == true) {
          nav.navigate('home');
        } else {
          console.log(Response);
          alert('error');
          setLoad(false);
        }
      })
      .catch((error) => {
        console.error('error', error);
        setLoad(false);

      });
  };

  // const pressRegister = () => {
  //     nav.
  //   };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.inputContainer}>



        <Pressable style={styles.back} onPress={handlePress} style={styles.homeButton}>
          <Ionicons name="arrow-back-circle-sharp" size={45} color="#0494a5" />

        </Pressable>


        <TextInput
          value={userName}
          onChangeText={setUserName}
          placeholder="Username"
          style={styles.input}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          value={phone}
          onChangeText={setphone}
          placeholder="phone"
          keyboardType="numeric"
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
              <Text style={styles.buttonText}>Register</Text>
            </>
          )}

        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  back: {
    alignContent: 'flex-start'

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
    elevation: 2,
  },
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

export default Register;
