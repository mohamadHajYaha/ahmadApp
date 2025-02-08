import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import StoreContext from "@/Store/StoreConteext";

const CartScreen = ({item}) => {
  const { cart, setCart } = useContext(StoreContext);
  

  const nav = useNavigation();


  const goToBibent = (item) => {
    console.log("item",cart);
    
    nav.navigate('Bibent', { ...cart });
  };

  const deleteItem = (name) => {
    const filteredData = cart.filter((item) => item.name !== name);
    setCart(filteredData);
  };

  const renderData = () => {
    return cart.map((item, index) => (
      <View key={index} style={styles.itemContainer}>
        <Image style={styles.itemImage} source={item.img} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemText}>מספר הזמנה: 4254</Text>
          <Text style={styles.itemText}>שם מוצר: {item.name}</Text>
          <Text style={styles.itemText}>כמות: {item.quantity}</Text>
          <Text style={styles.itemText}>
            מחיר: {item.price * item.quantity}₪
          </Text>
          <Text style={styles.itemText}>שירות משלוחים: 16₪</Text>
        </View>
        <Pressable onPress={() => deleteItem(item.name)}>
          <Ionicons name="trash-bin-outline" size={24} color="red" />
        </Pressable>
      </View>
    ));
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => nav.navigate("home")}>
          <Ionicons name="home" size={30} color="black" />
        </Pressable>
        <Text style={styles.headerText}>עגלת קניות</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {cart.length === 0 ? (
          <Text style={styles.emptyText}>הסל ריק</Text>
        ) : (
          renderData()
        )}
      </ScrollView>
      <Pressable style={styles.payButton} onPress={() => goToBibent(item)}>
            <Text style={styles.payButtonText}>לשלם</Text>
          </Pressable>

    </View>
  );
};



export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF0F4", // خلفية هادئة ولطيفة
    paddingTop: 40,
  },
  emptyText: {
    fontSize: 26,
    textAlign: "center",
    color: "#A0A0A0", // لون رمادي خفيف للنص الفارغ
    marginTop: 200,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 1.5,
    borderBottomWidth: 1,
    borderBottomColor: "#DFE4EA",
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1A3B5D", // لون داكن للنص
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 12,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
    marginVertical: 2,
    color: "#1A3B5D", // لون داكن للنصوص
    textAlign: "right", // محاذاة النص لليمين
  },
  payButton: {
    backgroundColor: "#FF5A5F", // لون زاهي للزر
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom:20,
    // alignSelf: "flex-start",
    // textAlign:"center"
  },
  payButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
