import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState, useContext } from 'react';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import StoreContext from '@/Store/StoreConteext';
import { useNavigation, useRouter } from 'expo-router';

const Screen2 = () => {
  const route = useRoute();
  const nav = useRouter();
  const { cart, setCart } = useContext(StoreContext);
  const [quantity, setQuantity] = useState(route.params.quantity);

  const addToCart = () => {
    const updatedCart = [...cart, { ...route.params, quantity }];
    setCart(updatedCart);
    nav.push('cart');
  }; 

  const addQuantity = () => setQuantity(prev => prev + 1);
  const removeQuantity = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <View style={styles.container}>
      <Image source={route.params.img} style={styles.img} />
      <Text style={styles.productName}>{route.params.name}</Text>
      
      <Pressable onPress={() => nav.navigate("home")} style={styles.homeButton}>
        <Ionicons name='home' size={40} color={"black"} />
      </Pressable>

      <View style={styles.quantityContainer}>
        <Pressable onPress={addQuantity} style={styles.quantityButton}>
          <Text style={styles.quantityText}>+</Text>
        </Pressable>
        <Text style={styles.quantityDisplay}>{quantity}</Text>
        <Pressable onPress={removeQuantity} style={styles.quantityButton}>
          <Text style={styles.quantityText}>-</Text>
        </Pressable>
      </View>

      <Text style={styles.totalPrice}>{route.params.price * quantity} ₪</Text>

      <Pressable onPress={addToCart} style={styles.addButton}>
        <Text style={styles.addButtonText}>להוסיף לעגלה</Text>
      </Pressable>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    padding: 20,
  },
  img: {
    height: 250,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#333',
  },
  homeButton: {
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    backgroundColor: '#15B392',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 24,
    color: 'white',
  },
  quantityDisplay: {
    fontSize: 24,
    color: 'black',
    marginHorizontal: 10,
  },
  totalPrice: {
    fontSize: 28,
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#FFE700',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 18,
    color: 'black',
  },
});
