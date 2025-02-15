import { StyleSheet, TextInput, Text, View, Pressable, ImageBackground, ActivityIndicator, TouchableOpacity, Animated, useColorScheme, Switch } from "react-native";
import React, { useState, useRef } from "react";
import { useNavigation, useRouter } from "expo-router";
import images from "@/assets/images/images";
import { login } from "@/res/Api";
import CustomAlert from './components/CustomAlert';

const Index = () => {
  const nav = useRouter();
  const systemColorScheme = useColorScheme();
  const [userName, setUserName] = useState("m7md");
  const [password, setPassword] = useState("mmmmmmmm");
  const [loading, setLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');

  const handleLogin = async () => {
    setLoading(true);
    console.log("btn pressed", loading);

    if (!userName || !password) {
      setAlertMessage('Opps!!');
      setAlertVisible(true);
      setLoading(false);
      startShake();
      return;
    }

    const body = {
      userName: userName,
      password,
    };

    login(body)
      .then((Response) => {
        setLoading(false);
        if (Response.success == true) {
          nav.navigate('home');
        } else {
          setAlertMessage('alssma 8lt');
          setAlertVisible(true);
          startShake();
        }
      })
      .catch((error) => {
        console.error('error', error);
        setLoading(false);
        startShake();
      });
  };

  const startShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const pressRegister = () => {
    nav.navigate("register");
  };

  const pressChangePassword = () => {
    nav.navigate("changePassword");
  };

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  console.log("Loading ", loading);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="small" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  const styles = isDarkMode ? darkStyles : lightStyles;

  return (
    <ImageBackground source={images.background} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}> Login </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}> Username </Text>
          <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
            <TextInput
              style={[styles.input, !userName && styles.inputError]}
              onChangeText={setUserName}
              value={userName}
              placeholder=" Username "
              placeholderTextColor={isDarkMode ? "#888" : "#888"}
              textAlign="right"
            />
          </Animated.View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}> Password :</Text>
          <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
            <TextInput
              style={[styles.input, !password && styles.inputError]}
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              placeholderTextColor={isDarkMode ? "#888" : "#888"}
              secureTextEntry={true}
              textAlign="right"
            />
          </Animated.View>
        </View>

        <Pressable onPress={pressRegister}>
          <Text style={styles.linkText}> Create New Account! </Text>
        </Pressable>

        <Pressable onPress={pressChangePassword}>
          <Text style={styles.linkText}> Change You Password </Text>
        </Pressable>

        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isDarkMode}
          />
        </View>
      </View>
      <CustomAlert
        visible={alertVisible}
        message={alertMessage}
        onClose={() => setAlertVisible(false)}
      />
    </ImageBackground>
  );
};

export default Index;

const lightStyles = StyleSheet.create({
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
  inputError: {
    borderColor: "red",
    color: "red",
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
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  switchLabel: {
    fontSize: 18,
    marginRight: 10,
    color: "#333",
  },
});

const darkStyles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    borderRadius: 15,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: "#fff",
  },
  inputError: {
    borderColor: "red",
    color: "red",
  },
  linkText: {
    color: "lightblue",
    textAlign: "center",
    marginTop: 10,
    textDecorationLine: "underline",
  },
  loginButton: {
    backgroundColor: "lightblue",
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 15,
  },
  loginButtonText: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  switchLabel: {
    fontSize: 18,
    marginRight: 10,
    color: "#fff",
  },
});
