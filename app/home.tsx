import { ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import PC from '@/components/porductPC';
import { useNavigation } from 'expo-router';
import { getAllProducts } from '@/res/Api';
import StoreContext from '@/Store/StoreConteext';

const Home = () => {
  const { isDarkMode, setIsDarkMode } = useContext(StoreContext);
  const [text, onChangeText] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const Nav = useNavigation();

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data || []);
        setFilteredProducts(response.data || []);
        console.log(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts(text, selectedFilter);
  }, [text, products, selectedFilter]);

  const filterProducts = (searchText: string, category: string | null) => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter(product =>
        product.type.toLowerCase() === category.toLowerCase()
      );
    }

    if (searchText.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const handleFilterPress = (filter: string) => {
    setSelectedFilter(prev => (prev === filter ? null : filter));
  };

  const renderCard = () => {
    return filteredProducts.map((item: any) => (
      <TouchableOpacity key={item._id} onPress={() => Nav.navigate('Screen2', { ...item })}>
        <PC price={item.price} name={item.name} img={item.img} type={item.type}/>
      </TouchableOpacity>
    ));
  };

  const RenderFilter = () => {
    const filters = ["PC", "GPU", "CPU", "MotherBoard", "GIFTCARD", "Video Games", "Laptop", "Mobile", "Tablet", "Accessories"];

    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
        {filters.map((item, index) => {
          const isSelected = selectedFilter === item;
          return (
            <TouchableOpacity key={index} onPress={() => handleFilterPress(item)}>
              <View style={[styles.categoryContainer, isSelected && styles.selectedCategory]}>
                <Text style={[styles.itemText, isSelected && styles.selectedItemText]}>{item}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor:'white' }]}>
      <View style={styles.header}>
        <Text style={[styles.stortName, { color: 'black' }]}>Store</Text>
        <TouchableOpacity onPress={() => Nav.navigate('Settings')}>
          <Text style={{ fontSize: 16, color: '#007AFF', fontWeight: '600' }}>Settings</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholderTextColor={'#8a8a8a'}
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search products..."
      />
      <RenderFilter />
      <ScrollView style={styles.productList}>{renderCard()}</ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 10,
    marginTop: 20,
  },
  input: {
    height: 45,
    marginVertical: 12,
    borderWidth: 1,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  stortName: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#046420',
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  categoryContainer: {
    backgroundColor: '#ff4d4f',
    borderRadius: 20,
    shadowColor: '#000',
    width: 90,
    paddingVertical: 6,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedCategory: {
    backgroundColor: '#046420',
  },
  itemText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  selectedItemText: {
    color: '#ffffff',
  },
  productList: {
    marginTop: 15,
  },
});
