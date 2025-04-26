// import { StyleSheet, TextInput, Text, View, Pressable, ImageBackground, ActivityIndicator, TouchableOpacity, Animated, useColorScheme, Switch } from "react-native";
// import React, { useState, useRef, useContext } from "react";
// import { useNavigation, useRouter } from "expo-router";
// import images from "@/assets/images/images";
// import { login } from "@/res/Api";
// import CustomAlert from './components/CustomAlert';
// import { LinearGradient } from "expo-linear-gradient";
// import StoreContext from "@/Store/StoreConteext";

// const Index = () => {
//   const nav = useRouter();
//   const { isDarkMode, setIsDarkMode, } = useContext(StoreContext)
//   const systemColorScheme = useColorScheme();
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [alertVisible, setAlertVisible] = useState(false);
//   const [alertMessage, setAlertMessage] = useState('');
//   const shakeAnimation = useRef(new Animated.Value(0)).current;
//   // const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');

//   const handleLogin = async () => {
//     setLoading(true);
//     console.log("btn pressed", loading);

//     if (!userName || !password) {
//       setAlertMessage('Please fill in all fields!');
//       setAlertVisible(true);
//       setLoading(false);
//       startShake();
//       return;
//     }

//     const body = {
//       userName: userName,
//       password,
//     };

//     login(body)
//       .then((Response) => {
//         setLoading(false);
//         if (Response.success == true) {
//           nav.navigate('home');
//         } else {
//           setAlertMessage('Invalid credentials');
//           setAlertVisible(true);
//           startShake();
//         }
//       })
//       .catch((error) => {
//         console.error('error', error);
//         setLoading(false);
//         startShake();
//       });
//   };

//   const startShake = () => {
//     Animated.sequence([
//       Animated.timing(shakeAnimation, {
//         toValue: 10,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//       Animated.timing(shakeAnimation, {
//         toValue: -10,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//       Animated.timing(shakeAnimation, {
//         toValue: 10,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//       Animated.timing(shakeAnimation, {
//         toValue: 0,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   };

//   const pressRegister = () => {
//     nav.navigate("register");
//   };

//   const pressChangePassword = () => {
//     nav.navigate("changePassword");
//   };

//   const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

//   console.log("Loading ", loading);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#FF5722" />
//         <Text style={styles.loadingText}>Loading...</Text>
//       </View>
//     );
//   }

//   const styles = isDarkMode ? darkStyles : lightStyles;
//   const linearGradient = isDarkMode ? ["#006e2c", "#000"] : ["#b1b6b3", "#09a548"];
//   //(!isDarkMode)?['#fff', '#00ff66']:["##008636","#000"]

//   return (
//     <ImageBackground source={images.back()} style={styles.background}>

//       <LinearGradient colors={linearGradient} style={styles.container}>
//         <Text style={styles.title}> Login </Text>

//         <View style={styles.inputContainer}>
//           <Text style={styles.label}> Username </Text>
//           <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
//             <TextInput
//               style={[styles.input, !userName && styles.inputError]}
//               onChangeText={setUserName}
//               value={userName}
//               placeholder=" Username "
//               placeholderTextColor={isDarkMode ? "#888" : "#888"}
//               textAlign="right"
//             />
//           </Animated.View>
//         </View>

//         <View style={styles.inputContainer}>
//           <Text style={styles.label}> Password :</Text>
//           <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
//             <TextInput
//               style={[styles.input, !password && styles.inputError]}
//               onChangeText={setPassword}
//               value={password}
//               placeholder="Password"
//               placeholderTextColor={isDarkMode ? "#888" : "#888"}
//               secureTextEntry={true}
//               textAlign="right"
//             />
//           </Animated.View>
//         </View>

//         <Pressable onPress={pressRegister}>
//           <Text style={styles.linkText}> Create New Account! </Text>
//         </Pressable>

//         <Pressable onPress={pressChangePassword}>
//           <Text style={styles.linkText}> Change You Password </Text>
//         </Pressable>

//         <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
//           <Text style={styles.loginButtonText}>Sign In</Text>
//         </TouchableOpacity>

//         <View style={styles.switchContainer}>
//           <Text style={styles.switchLabel}>Dark Mode</Text>
//           <Switch
//             trackColor={{ false: "#767577", true: "#81b0ff" }}
//             thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
//             onValueChange={toggleSwitch}
//             value={isDarkMode}
//           />
//         </View>
//       </LinearGradient>

//       <CustomAlert
//         visible={alertVisible}
//         message={alertMessage}
//         onClose={() => setAlertVisible(false)}
//       />
//     </ImageBackground>
//   );
// };

// export default Index;

// const lightStyles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   container: {
//     width: "90%",
//     backgroundColor: "rgba(255, 255, 255, 0.9)",
//     borderRadius: 15,
//     padding: 20,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//     color: "#333",
//   },
//   inputContainer: {
//     marginBottom: 15,
//   },
//   label: {
//     fontSize: 18,
//     marginBottom: 5,
//     color: "#333",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 10,
//     padding: 10,
//     fontSize: 16,
//     color: "#333",
//   },
//   inputError: {
//     borderColor: "red",
//     color: "red",
//   },
//   linkText: {
//     color: "blue",
//     textAlign: "center",
//     marginTop: 10,
//     textDecorationLine: "underline",
//   },
//   loginButton: {
//     backgroundColor: "blue",
//     borderRadius: 10,
//     marginTop: 20,
//     paddingVertical: 15,
//   },
//   loginButtonText: {
//     color: "white",
//     fontSize: 18,
//     textAlign: "center",
//   },
//   switchContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 20,
//   },
//   switchLabel: {
//     fontSize: 18,
//     marginRight: 10,
//     color: "#333",
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#FFFFFF",
//   },
//   loadingText: {
//     marginTop: 10,
//     fontSize: 16,
//     color: "#FF5722",
//   },
// });

// const darkStyles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   container: {
//     width: "90%",
//     // backgroundColor: "rgba(0, 0, 0, 0.9)",
//     borderRadius: 15,
//     padding: 20,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//     color: "#fff",
//   },
//   inputContainer: {
//     marginBottom: 15,
//   },
//   label: {
//     fontSize: 18,
//     marginBottom: 5,
//     color: "#fff",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#555",
//     borderRadius: 10,
//     padding: 10,
//     fontSize: 16,
//     color: "#fff",
//   },
//   inputError: {
//     borderColor: "red",
//     color: "red",
//   },
//   linkText: {
//     color: "lightblue",
//     textAlign: "center",
//     marginTop: 10,
//     textDecorationLine: "underline",
//   },
//   loginButton: {
//     backgroundColor: "lightblue",
//     borderRadius: 10,
//     marginTop: 20,
//     paddingVertical: 15,
//   },
//   loginButtonText: {
//     color: "black",
//     fontSize: 18,
//     textAlign: "center",
//   },
//   switchContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 20,
//   },
//   switchLabel: {
//     fontSize: 18,
//     marginRight: 10,
//     color: "#fff",
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#FFFFFF",
//   },
//   loadingText: {
//     marginTop: 10,
//     fontSize: 16,
//     color: "#FF5722",
//   },
// });
import { StyleSheet, TextInput, Text, View, Pressable, ImageBackground, ActivityIndicator, TouchableOpacity, Animated, useColorScheme, Switch } from "react-native";
import React, { useState, useRef, useContext } from "react";
import { useRouter } from "expo-router";
import images from "@/assets/images/images";
import { login } from "@/res/Api";
import CustomAlert from './components/CustomAlert';
import { LinearGradient } from "expo-linear-gradient";
import StoreContext from "@/Store/StoreConteext";

const Index = () => {
  const nav = useRouter();
  const { isDarkMode, setIsDarkMode, user, setUser } = useContext(StoreContext);
  const systemColorScheme = useColorScheme();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  const handleLogin = async () => {
    setLoading(true);
    if (!userName || !password) {
      setAlertMessage('Please fill in all fields!');
      setAlertVisible(true);
      setLoading(false);
      startShake();
      return;
    }

    const body = { userName, password };
    login(body)
      .then((response) => {
        setLoading(false);
        if (response.success) {
          nav.replace('home');
          setUser(response.data);
          // console.log("User data: ", response.data);

        } else {
          setAlertMessage('Invalid credentials');
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

  const pressRegister = () => nav.navigate("register");
  const pressChangePassword = () => nav.navigate("changePassword");

  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF5722" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }


  return (
    <View style={styles.background}>
      <View colors={'white'} style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
            <TextInput
              style={[styles.input, !userName && styles.inputError]}
              onChangeText={setUserName}
              value={userName}
              placeholder="Username"
              placeholderTextColor={isDarkMode ? "#888" : "#888"}
              textAlign="left"
            />
          </Animated.View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
            <TextInput
              style={[styles.input, !password && styles.inputError]}
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              placeholderTextColor={isDarkMode ? "#888" : "#888"}
              secureTextEntry={true}
              textAlign="left"
            />
          </Animated.View>
        </View>

        <Pressable onPress={pressRegister}>
          <Text style={styles.linkText}>Create New Account!</Text>
        </Pressable>

        <Pressable onPress={pressChangePassword}>
          <Text style={styles.linkText}>Change Your Password</Text>
        </Pressable>

        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign In</Text>
        </TouchableOpacity>


      </View>

      <CustomAlert
        visible={alertVisible}
        message={alertMessage}
        onClose={() => setAlertVisible(false)}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2", // soft gray background
  },
  container: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 30,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#FF3E3E", // AliExpress red
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 18,
  },
  label: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 8,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    borderWidth: 1.2,
    borderColor: "#E0E0E0",
    padding: 14,
    fontSize: 16,
    color: "#000",
  },
  inputError: {
    borderColor: "#FF3E3E",
    color: "#FF3E3E",
  },
  loginButton: {
    backgroundColor: "#FF3E3E",
    borderRadius: 10,
    paddingVertical: 16,
    marginTop: 25,
    shadowColor: "#FF3E3E",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 1,
  },
  linkText: {
    color: "#FF3E3E",
    textAlign: "center",
    marginTop: 18,
    textDecorationLine: "underline",
    fontSize: 15,
    fontWeight: "500",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 26,
  },
  switchLabel: {
    fontSize: 16,
    marginRight: 10,
    color: "#555",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#FF3E3E",
  },
});
