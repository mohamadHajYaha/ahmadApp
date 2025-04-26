import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from 'expo-router';
import StoreContext from '@/Store/StoreConteext';

const ProfileScreen = () => {
  const navigation = useNavigation();
    const { isDarkMode, setIsDarkMode, user, setUser } = useContext(StoreContext);
  

//   const user = {
//     name: 'mohamad',
//     email: 'mohamad@email.com',
//     avatar: 'https://i.pravatar.cc/https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw3ntiLPhcN4jpshWBrNxmoJ&ust=1744821817008000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNiV5va92owDFQAAAAAdAAAAABAE?img=5',
//   };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{user.userName}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      </View>

      {/* Action Cards */}
      <View style={styles.card}>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.label}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.label}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.label}>Shipping Address</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.label}>Payment Methods</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.label}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.item, { borderBottomWidth: 0 }]} onPress={() => console.log('Logged out')}>
          <Text style={[styles.label, { color: '#ff3b30' }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
      paddingHorizontal: 16,
      paddingTop: 20,
    },
    profileHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 10,
      elevation: 2,
    },
    avatar: {
      width: 70,
      height: 70,
      borderRadius: 35,
      marginRight: 15,
      borderWidth: 2,
      borderColor: '#ff5b00',
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#222',
    },
    email: {
      fontSize: 14,
      color: '#888',
      marginTop: 4,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 12,
      paddingVertical: 10,
      paddingHorizontal: 15,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 10,
      elevation: 3,
    },
    item: {
      borderBottomWidth: 1,
      borderColor: '#eee',
      paddingVertical: 15,
    },
    label: {
      fontSize: 16,
      color: '#333',
      fontWeight: '500',
    },
  });
  