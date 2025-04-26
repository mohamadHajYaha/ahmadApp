import React, { useState } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import StoreContext from './StoreConteext'; // Make sure the path is correct

const StoreProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(null);
    const systemColorScheme = useColorScheme();
    const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');
    // const linearGradient = isDarkMode ? ["#006e2c", "#000"] : ["#b1b6b3", "#09a548"];



    const providerValue = {
        cart,
        setCart,
        isDarkMode, setIsDarkMode,
        user, setUser,
        // linearGradient
    };

    return (
        <StoreContext.Provider value={providerValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;

const styles = StyleSheet.create({});
