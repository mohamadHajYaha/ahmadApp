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
import { findAllProduct, getAllProducts } from "@/res/Api";
import CustomAlert from "../components/CustomAlert";
import Product from "@/components/Product";
import PC from "@/components/porductPC";
import alertVisible from "../components/CustomAlert";
import alertMessage from "../components/CustomAlert";
import goToSettings from "../components/CustomAlert";

const Home = () => {
  const [products, setProducts] = useState([]);  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();  
        console.log(response);  
        setProducts(response.data || []);  
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();  
  }, []); 

  const renderCard=()=>{


  
  const nav = useNavigation();
  const [show, setShow] = useState(false);
  const [data, setdata] = useState([]);
  const [ismodalOpen, setsModalOpen] = useState<any>(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  const profile = ["red", "green", "blue", "yellow", "black", "Pink"];
  const [pColor, setPColor] = useState(profile);
  const [state, setate] = useState(0);

  const changeColor = () => {
    setate(state + 1);
  };



  

 

  const GoToCart = () => {
    nav.navigate("CartScreen");
  };




  const goToSettings = () => {
    nav.navigate("Settings", {language, setLanguage});
  };

   

  
}
    
 

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.MenuHeaderTop}>
            <Ionicons
              onPress={() => setShow(true)}
              name="person-circle-outline"
              size={40}
              color={"white"}
            />
     <Text style={styles.name}>Computer Ahmad</Text>
          </View>
          {/* <ScrollView horizontal>{aaa()}</ScrollView> */}
          {/* <ScrollView horizontal>{renderswar()}</ScrollView> */}
          {/* {renderAllProduct()} */}
        </View>
        <PC name="Ahmad" price="1000" img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jvi0a00NEFKjmGP4_cDuvxysU204q9RBgA&s' />

      </ScrollView>

      <CustomAlert
        visible={alertVisible}
        message={alertMessage}
        onClose={() => setAlertVisible(false)}
      />


      <TouchableOpacity onPress={goToSettings} style={styles.settingsButton}>
        <Text style={styles.settingsButtonText}>Settings</Text>

      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  name:{
    fontSize: 20,
    color: "white",
    left: 10,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    textAlignVertical: "center",
  },
  container: {
    marginTop: 40,
    backgroundColor: "white",
    flex: 1,
  },
  exit: {
    fontSize: 30,
    color: "red",
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "red",
    marginTop: "90%",
  },
  welcom: {
    fontSize: 20,
    textAlign: "center",
  },

  MenuHeaderTop: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#1E3E62",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    textAlign: "center",
    fontSize: 90,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: 300,
    height: 650,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  user: {
    fontSize: 20,
    right: 20,
    marginTop: 15,
    padding: 10,
  },
  test: {
    fontSize: 30,
    textAlign: "center",
  },
  modaContiner: {
    flex: 1,
  },
  input: { borderWidth: 1, borderRadius: 10 },
  settingsButton: {
    backgroundColor: "gray",
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 15,
    alignItems: "center",
  },
  settingsButtonText: {
    color: "white",
    fontSize: 18,
  },
});
