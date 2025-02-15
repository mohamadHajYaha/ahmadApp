import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Settings = ({ route }) => {
  const { language, setLanguage } = route.params;

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'ar' : 'en'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity onPress={toggleLanguage} style={styles.languageButton}>
        <Text style={styles.languageButtonText}>
          {language === 'ar' ? 'تغيير اللغة إلى الإنجليزية' : 'Change Language to Arabic'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  languageButton: {
    backgroundColor: 'gray',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  languageButtonText: {
    color: 'white',
    fontSize: 18,
  },
});