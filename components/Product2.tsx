import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Product from "./Product";
import { useLocalSearchParams, useNavigation } from "expo-router";

const Product2 = ({ props }): any => {
  const { name, data: items } = props;
  const data = useLocalSearchParams();
  const nav = useNavigation();
  const goToScreen5 = () => {
    nav.navigate("Screen5");
  };

  console.log("items", items);
  
  console.log("data", data);
  console.log("props data", props);

  const renderItems = () => {
    return (
      <Product props={props} />
    )

    // return items.map((item, index) => (
    //   <Product
    //   key={index}
    //     props={item}
    //     // setsModalOpen={props.setsModalOpen}
    //     // ismodalOpen={props.ismodalOpen}
    //   />
    // ));
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={goToScreen5}>
        {/* <Text style={styles.name}>{name}</Text> */}
      </Pressable>
      <ScrollView horizontal>{renderItems()}</ScrollView>
    </View>
  );
};

export default Product2;

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    width: 300,
    alignSelf: "center",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    backgroundColor: "#1E3E62",
  },
  container: {
    margin: 20,
  },
});
