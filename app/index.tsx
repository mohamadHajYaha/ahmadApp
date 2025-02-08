import {StyleSheet,TextInput,Text,View,Pressable,ImageBackground,} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import images from "@/assets/images/images";
import { login } from "@/res/Api";

const Index = () => {
  const nav = useRouter();
  const [userName, setUserName] = useState("052");
  const [password, setPassword] = useState("052222");


  const handleLogin = async () => {
    if (!userName || !password) {
      alert("Opps!!");
      return;
    }

    const body = {
      phone:userName,
      password,
    };

  login(body)
  .then((Response)=>{
    if(Response.success==true)
    {
      nav.navigate('Splash')
    }
    else{
      alert('alssma 8lt')
    }
  })
  }
  const pressRegister = () => {
    nav.navigate("register");
  };

  return (
    <ImageBackground source={images.background} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}> Login </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>  Username  </Text>
          <TextInput
            style={styles.input}
            onChangeText={setUserName}
            value={userName}
            placeholder=" Username "
            placeholderTextColor={"#888"}
            textAlign="right"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}> Password :</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="סיסמה"
            placeholderTextColor={"#888"}
            secureTextEntry={true}
            textAlign="right"
          />
        </View>

        <Pressable onPress={pressRegister}>
          <Text style={styles.linkText}> Create New Account! </Text>
        </Pressable>

        <Text style={styles.linkText}> Change You Password </Text>

        <Pressable onPress={handleLogin}  style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign In</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};
// };

export default Index;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 15,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: "#333",
  },
  linkText: {
    color: "blue",
    textAlign: "center",
    marginTop: 10,
    textDecorationLine: "underline",
  },
  loginButton: {
    backgroundColor: "blue",
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 15,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
