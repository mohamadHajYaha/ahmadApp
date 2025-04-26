// import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
// import React, { useState, useContext } from 'react';
// import { useRoute } from '@react-navigation/native';
// import { AntDesign, Ionicons } from '@expo/vector-icons';
// import StoreContext from '@/Store/StoreConteext';
// import { useNavigation, useRouter } from 'expo-router';

// const Screen2 = () => {
//   const route = useRoute();
//   const nav = useRouter();
//   const { cart, setCart } = useContext(StoreContext);
//   const [quantity, setQuantity] = useState(1);

//   const addToCart = () => {
//     const updatedCart = [...cart, { ...route.params, quantity }];
//     setCart(updatedCart);
//     nav.push('cart');
//   }; 

//   const addQuantity = () => setQuantity(prev => prev + 1);
//   const removeQuantity = () => {
//     if (quantity > 1) setQuantity(prev => prev - 1);
//   };

//   return (
//     <View style={styles.container}>
//        <Pressable onPress={() => nav.navigate("home")} style={styles.homeButton}>
//        <AntDesign name="leftcircleo" size={30} color="gray" />   
//           </Pressable>
//       <Image source={{uri:route.params.img}} style={styles.img} />
    
//     <View style={styles.totalPriceContainer}>

//       <Text style={styles.totalPrice}>{route.params.price } </Text>
      
// </View>

// <View style={styles.quantityContainer}>
//         <Pressable onPress={addQuantity} style={styles.quantityButton}>
//           <Text style={styles.quantityText}>+</Text>
//         </Pressable>
//         <Text style={styles.quantityDisplay}>{quantity}</Text>
//         <Pressable onPress={removeQuantity} style={styles.quantityButton}>
//           <Text style={styles.quantityText}>-</Text>
//         </Pressable>
//       </View>
//       <Text style={styles.productName}>{route.params.name}</Text>


// {/*      

//       <View style={styles.quantityContainer}>
//         <Pressable onPress={addQuantity} style={styles.quantityButton}>
//           <Text style={styles.quantityText}>+</Text>
//         </Pressable>
//         <Text style={styles.quantityDisplay}>{quantity}</Text>
//         <Pressable onPress={removeQuantity} style={styles.quantityButton}>
//           <Text style={styles.quantityText}>-</Text>
//         </Pressable>
//       </View> */}


//       <Pressable onPress={addToCart} style={styles.addButton}>
//         <Text style={styles.addButtonText}> Add To Cart</Text>
//       </Pressable>
//     </View>
//   );
// };

// export default Screen2;

// const styles = StyleSheet.create({
//   totalPriceContainer: {
//     backgroundColor: '#red',
//     borderRadius: 10,
    
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#F9F9F9',
//     padding: 20,
//   },
//   img: {
//     height: "40%",
//     width: '110%',
//     borderRadius: 10,
//     borderWidth: 1.5,
//     borderColor: '#ccc',
//     top: 20,  },
//   productName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 10,
//     color: '#333',
//   },
//   homeButton: {
//     right:165,
//     top: 10
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//     justifyContent: 'center',
//   },
//   quantityButton: {
//     backgroundColor: '#15B392',
//     borderRadius: 5,
//     padding: 10,
//     marginHorizontal: 5,
//   },
//   quantityText: {
//     fontSize: 24,
//     color: 'white',
//   },
//   quantityDisplay: {
//     fontSize: 24,
//     color: 'black',
//     marginHorizontal: 10,
//   },
//   totalPrice: {
//     fontSize: 30,
//     marginVertical: 20,
//     color: '#333',
//     right:140,
//     top: 15,
//     fontWeight: 'bold',
//   },
//   addButton: {
//     backgroundColor: '#0494a5',
//     borderRadius: 10,
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     alignItems: 'center',
//   },
//   addButtonText: {
//     fontSize: 20,
//     color: 'black',
//     fontWeight: 'bold',
//   },
// });

import { Image, Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useContext } from 'react';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import StoreContext from '@/Store/StoreConteext';
import { useRouter } from 'expo-router';

const Screen2 = () => {
  const route = useRoute();
  const nav = useRouter();
  const { cart, setCart } = useContext(StoreContext);
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const updatedCart = [...cart, { ...route.params, quantity }];
    setCart(updatedCart);
    nav.push('cart');
  };

  const addQuantity = () => setQuantity((prev) => prev + 1);
  const removeQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <Pressable onPress={() => nav.navigate('home')} style={styles.homeButton}>
        <AntDesign name="leftcircleo" size={28} color="#ff4d4f" />
      </Pressable>

      {/* Product Image */}
      <Image source={{ uri: route.params.img }} style={styles.image} />

      {/* Price Section */}
      <View style={styles.priceSection}>
        <Text style={styles.priceText}>${route.params.price}</Text>
        <Text style={styles.freeShipping}>✓ Free Shipping</Text>
      </View>

      {/* Product Name */}
      <Text style={styles.nameText}>{route.params.name}</Text>

      {/* Quantity Selector */}
      <View style={styles.quantitySection}>
        <Text style={styles.label}>Quantity</Text>
        <View style={styles.quantityContainer}>
          <Pressable onPress={removeQuantity} style={styles.quantityButton}>
            <Text style={styles.quantitySymbol}>-</Text>
          </Pressable>
          <Text style={styles.quantityDisplay}>{quantity}</Text>
          <Pressable onPress={addQuantity} style={styles.quantityButton}>
            <Text style={styles.quantitySymbol}>+</Text>
          </Pressable>
        </View>
      </View>

      {/* Add to Cart Button */}
      <Pressable onPress={addToCart} style={styles.addToCart}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
  },

  homeButton: {
    position: 'absolute',
    top: 32,
    left: 15,
  },

  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginTop: 60,
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#eee',
    resizeMode: 'contain',
  },

  priceSection: {
    marginTop: 20,
    backgroundColor: '#fff1f0',
    borderWidth: 1,
    borderColor: '#ff4d4f',
    padding: 15,
    borderRadius: 10,
  },

  priceText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff4d4f',
  },

  freeShipping: {
    fontSize: 14,
    color: '#4CAF50',
    marginTop: 5,
  },

  nameText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
    marginVertical: 15,
  },

  quantitySection: {
    marginTop: 10,
  },

  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  quantityButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },

  quantitySymbol: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },

  quantityDisplay: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginHorizontal: 20,
  },

  addToCart: {
    backgroundColor: '#ff4d4f',
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 30,
    alignItems: 'center',
  },

  addToCartText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});
