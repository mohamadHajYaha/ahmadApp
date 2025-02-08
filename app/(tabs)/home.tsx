import {
  ScrollView,
  ScrollViewComponent,
  Image,
  StyleSheet,
  View,
  Text,
  Touchable,
  TouchableOpacity,
  TextInput,
  Pressable,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from '@react-navigation/native';
import Product2 from "@/components/Product2";
import { useNavigation } from "expo-router";
// import { data } from "@/Data/data";
import datas from "@/Data/datacards";
import Ahmad from "@/components/Menuheader";

import Knabay from "@/components/Knabay";
import Swardata from "@/Data/Swardata";
import Swar from "@/components/Swar";
import { BlurView } from "expo-blur";
import { findAllProduct } from "@/res/Api";
const Home = () => {
  const nav = useNavigation();
  const [show, setShow] = useState(false);
  const [data, setdata] = useState([]);

  const [ismodalOpen, setsModalOpen] = useState<any>(false);

  const profile = ["red", "green", "blue", "yellow", "black", "Pink"];
  const [pColor, setPColor] = useState(profile);
  const [state, setate] = useState(0);

  const changeColor = () => {
    setate(state + 1);
  };

  const renderAllProduct = () => {
    console.log("render data", data.length);
    console.log("");
    return data.map((item) => {
      console.log("item", item.name);
      return (
        <Product2 props={item} />
      )
      
    });

    // return data?.map((item, index) => (
    //   <View key={index}>
    //     <Product2
    //       props={item}
    //       // ismodalOpen={ismodalOpen}
    //       // setsModalOpen={setsModalOpen}
    //     />
    //   </View>
    // ));
  };
  const aaa = () => {
    return datas.map((item, index) => <Ahmad key={index} props={item} />);
  };
  const rederIcon = () => {
    // return Knabaydata.map((item, index) => <Knabay key={index} props={item} />);
  };
  const renderswar = () => {
    return Swardata.map((item, index) => <Swar key={index} props={item} />);
  };

  const GoToCart = () => {
    nav.navigate("CartScreen");
  };

  const openDrawer5 = () => {
    // nav.openDrawer()
  };
  const gotolog = () => {
    nav.navigate("register");
  };

  const getAlldata = () => {
    findAllProduct().then((res) => {
      if (res?.data?.length) {
        console.log("data", res.data);
        setdata(res.data);
      } else {
        alert("no data");
      }
    });
  };

  useEffect(() => {
    getAlldata();
  }, []);

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
            <Text style={styles.T}> מכשירי חשמל</Text>
            <Text></Text>
            <Pressable></Pressable>
            {/* <Pressable onPress={GoToCart} >
        <Ionicons name='cart-outline' size={50} color={"black"}/>
        </Pressable> */}
          </View>

          <ScrollView horizontal>{aaa()}</ScrollView>

          <ScrollView horizontal>{renderswar()}</ScrollView>

          <ScrollView horizontal>{rederIcon()}</ScrollView>
          {renderAllProduct()}
        </View>
      </ScrollView>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => {
          // setShow(!show);
        }}
      >
        <BlurView intensity={50} style={styles.modaContiner}>
          <Pressable onPress={() => setShow(false)} style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.test}>profile</Text>
              <Pressable
                onPress={() => {
                  changeColor();
                  setPColor(pColor[state]);
                }}
              >
                <Ionicons
                  style={styles.icon}
                  name="person-circle-outline"
                  size={60}
                  color={pColor}
                />
              </Pressable>
              <Text style={styles.welcom}>Welcome </Text>
              <TextInput style={styles.user} placeholder="userName" />
              <TextInput style={styles.user} placeholder="email" />
              <TextInput style={styles.user} placeholder="password" />
              <TextInput style={styles.user} placeholder="age" />

              <Pressable onPress={gotolog}>
                <Text style={styles.exit}>exit acount</Text>
              </Pressable>
            </View>
          </Pressable>
        </BlurView>
      </Modal>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: "white",
  },
  exit: {
    // marginTop: 250,
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
  T: {
    fontSize: 30,
    // margin: 'auto',
    color: "white",
    left: 10,
    // marginLeft: 100,
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
    // alignItems: 'center',
    shadowColor: "#000",
    width: 300,
    height: 650,
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
});
