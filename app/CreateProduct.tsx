import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
    Image,
} from 'react-native';
import { useNavigation } from 'expo-router';
// import { createproducts } from '@/res/Api'; // your API post function
import { SafeAreaView } from 'react-native-safe-area-context';
import { createproducts } from '../res/Api';
import { data } from './../Data/data';

const CreateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState('');
    const [type, setType] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    const Nav = useNavigation();

    const handleSubmit = async () => {
        if (!name || !price || !type) {
            Alert.alert('Missing Info', 'Please complete all fields');
            return;
        }

        try {
            const product = {
                name,
                price: parseFloat(price),
                img,
                type,
                Quantity: 1,
            };
            const productcreated = await createproducts(product)
                .then((res) => {
                    console.log('Product created:', res);
                    if (res.data) {
                        Nav.reset({
                            index: 0,
                            routes: [{ name: 'home' }],
                        });
                    }
                    else {
                        Alert.alert('Error', 'Failed to create product');
                    }
                })
                .catch((err) => {
                    console.error('Error creating product:', err);
                    Alert.alert('Error', 'Failed to create product');
                });
        } catch (err) {
            Alert.alert('Error', 'Failed to create product');
            console.log(err);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fafafa' }}>
            <ScrollView style={styles.container}>
                <Text style={styles.title}>New Product</Text>

                <View style={styles.card}>
                    <Text style={styles.label}>Product Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. Ryzen 5 5600X"
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                <View style={styles.card}>
                    <Text style={styles.label}>Price</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. 189.99"
                        keyboardType="numeric"
                        value={price}
                        onChangeText={setPrice}
                    />
                </View>

                <View style={styles.card}>
                    <Text style={styles.label}>Image URL</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="https://example.com/image.jpg"
                        value={img}
                        onChangeText={(val) => {
                            setImg(val);
                            setShowPreview(true);
                        }}
                    />
                    {showPreview && img.length > 6 && (
                        <Image source={{ uri: img }} style={styles.preview} />
                    )}
                </View>

                <View style={styles.card}>
                    <Text style={styles.label}>Category</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryRow}>
                        {["PC", "GPU", "CPU", "MotherBoard", "GIFTCARD", "Video Games", "Laptop", "Mobile", "Tablet", "Accessories"].map((item) => (
                            <TouchableOpacity
                                key={item}
                                onPress={() => setType(item)}
                                style={[styles.category, type === item && styles.selectedCategory]}>
                                <Text style={[styles.categoryText, type === item && styles.selectedCategoryText]}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                    <Text style={styles.submitText}>Post Product</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CreateProduct;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        padding: 16,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#222',
        textAlign: 'center',
        marginVertical: 10,
    },
    card: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 12,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    label: {
        fontSize: 14,
        color: '#555',
        marginBottom: 6,
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: '#fdfdfd',
    },
    preview: {
        width: '100%',
        height: 180,
        borderRadius: 10,
        marginTop: 10,
    },
    categoryRow: {
        marginTop: 6,
        flexDirection: 'row',
    },
    category: {
        backgroundColor: '#eee',
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 20,
        marginRight: 10,
    },
    selectedCategory: {
        backgroundColor: '#ff4d4f',
    },
    categoryText: {
        color: '#333',
        fontSize: 14,
    },
    selectedCategoryText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    submitBtn: {
        backgroundColor: '#ff4d4f',
        paddingVertical: 16,
        borderRadius: 12,
        marginVertical: 20,
        alignItems: 'center',
    },
    submitText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
