// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ScrollView,
//   Pressable,
// } from "react-native";
// import React, { useContext } from "react";
// import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "expo-router";
// import StoreContext from "@/Store/StoreConteext";

// const CartScreen = ({item}) => {
//   const { cart, setCart } = useContext(StoreContext);
  

//   const nav = useNavigation();


//   const goToBibent = (item) => {
//     console.log("item",cart);
    
//     nav.navigate('Bibent', { ...cart });
//   };

//   const deleteItem = (name) => {
//     const filteredData = cart.filter((item) => item.name !== name);
//     setCart(filteredData);
//   };

//   const renderData = () => {
//     return cart.map((item, index) => (
//       <View key={index} style={styles.itemContainer}>
//         <Image style={styles.itemImage} source={item.img} />
//         <View style={styles.itemDetails}>
//           <Text style={styles.itemText}> Order number </Text>
//           <Text style={styles.itemText}>Product name {item.name}</Text>
//           <Text style={styles.itemText}>Quantity: {item.quantity}</Text>
//           <Text style={styles.itemText}>
//             Price {item.price * item.quantity}$
//           </Text>
//           <Text style={styles.itemText}>Delivery service : 4$</Text>
//         </View>
//         <Pressable onPress={() => deleteItem(item.name)}>
//           <Ionicons name="trash-bin-outline" size={24} color="red" />
//         </Pressable>
//       </View>
//     ));
//   };

  
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Pressable onPress={() => nav.navigate("home")}>
//           <Ionicons name="home" size={30} color="black" />
//         </Pressable>
//         <Text style={styles.headerText}> Shopping cart</Text>
//       </View>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {cart.length === 0 ? (
//           <Text style={styles.emptyText}> Cart Is Empty ☹</Text>
//         ) : (
//           renderData()
//         )}
//       </ScrollView>
//       <Pressable style={styles.payButton} onPress={() => goToBibent(item)}>
//             <Text style={styles.payButtonText}>TO Buy</Text>
//           </Pressable>

//     </View>
//   );
// };



// export default CartScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#EAF0F4", // خلفية هادئة ولطيفة
//     paddingTop: 40,
//   },
//   emptyText: {
//     fontSize: 26,
//     textAlign: "center",
//     color: "#A0A0A0", // لون رمادي خفيف للنص الفارغ
//     marginTop: 200,
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: 15,
//     backgroundColor: "#FFFFFF",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.15,
//     shadowRadius: 1.5,
//     borderBottomWidth: 1,
//     borderBottomColor: "#DFE4EA",
//   },
//   headerText: {
//     fontSize: 26,
//     fontWeight: "bold",
//     color: "#1A3B5D", // لون داكن للنص
//   },
//   scrollContainer: {
//     paddingBottom: 20,
//   },
//   itemContainer: {
//     flexDirection: "row",
//     backgroundColor: "white",
//     borderRadius: 12,
//     marginVertical: 8,
//     marginHorizontal: 12,
//     padding: 15,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   itemImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//     marginRight: 15,
//   },
//   itemDetails: {
//     flex: 1,
//     marginRight: 10,
//   },
//   itemText: {
//     fontSize: 18,
//     marginVertical: 2,
//     color: "#1A3B5D", // لون داكن للنصوص
//     textAlign: "right", // محاذاة النص لليمين
//   },
//   payButton: {
//     backgroundColor: "#11bd56", // لون زاهي للزر
//     borderRadius: 6,
//     paddingVertical: 10,
//     paddingHorizontal: 14,
//     marginBottom:20,
//     // alignSelf: "flex-start",
//     // textAlign:"center"
//   },
//   payButtonText: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });

import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import StoreContext from '@/Store/StoreConteext';
import { useNavigation } from 'expo-router';

const Cart = () => {
    const Nav = useNavigation();
  
  const { cart, setCart } = useContext(StoreContext);

  const updateQuantity = (index, type) => {
    const updatedCart = [...cart];
    if (type === 'add') {
      updatedCart[index].quantity += 1;
    } else if (type === 'remove' && updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    }
    setCart(updatedCart);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };
  const GOtoPAYMENTS = () => Nav.navigate("Screen3");
   
  

  return (
    <View style={styles.container}>
      <Text style={styles.screenname} >Cart</Text>
      <ScrollView style={{ flex: 1 }}>
        {cart.map((item, index) => (
          <View key={index} style={styles.itemCard}>
            <Image source={{ uri: item.img }} style={styles.image} />

            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>

              <View style={styles.quantityRow}>
                <Pressable
                  style={styles.qtyBtn}
                  onPress={() => updateQuantity(index, 'remove')}
                >
                  <Text style={styles.qtyText}>-</Text>
                </Pressable>
                <Text style={styles.qtyNumber}>{item.quantity}</Text>
                <Pressable
                  style={styles.qtyBtn}
                  onPress={() => updateQuantity(index, 'add')}
                >
                  <Text style={styles.qtyText}>+</Text>
                </Pressable>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Total Price Footer */}
      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: ${getTotal()}</Text>
        <Pressable onPress={GOtoPAYMENTS} style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  screenname:{
fontSize: 40,
fontWeight: 'bold',
marginTop: 40,
left:10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  itemCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 12,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 1,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#eee',
  },

  details: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },

  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },

  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff4d4f',
    marginTop: 4,
  },

  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  qtyBtn: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },

  qtyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  qtyNumber: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 12,
    color: '#000',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
    backgroundColor: '#fff',
  },

  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },

  checkoutBtn: {
    backgroundColor: '#ff4d4f',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },

  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
