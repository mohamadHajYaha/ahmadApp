import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const PC = ({ img, name, price, type }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: img }} style={styles.image} />

      <Text numberOfLines={2} style={styles.name}>
        {name}
      </Text>

      <Text style={styles.price}>${price}</Text>

      <View style={styles.meta}>
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={14} color="#ff9f00" />
          <Text style={styles.ratingText}>4.7</Text>
        </View>
        <Text style={styles.orders}>2.1k sold</Text>
      </View>
      <Text style={styles.orders}>{type}</Text>
    </View>
  );
};

export default PC;
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    marginHorizontal: 8,
    width: 350,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
    fontWeight: '500',
  },
  price: {
    fontSize: 16,
    color: '#ff4d4f',
    fontWeight: 'bold',
    marginTop: 4,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 13,
    marginLeft: 4,
    color: '#555',
  },
  orders: {
    fontSize: 13,
    color: '#888',
  },
});
