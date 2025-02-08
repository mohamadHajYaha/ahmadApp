import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import StoreContext from './StoreConteext'; // Make sure the path is correct

const StoreProvider = (props) => {
    const [cart, setCart] = useState([]);

    const providerValue = {
        cart,
        setCart
    };

    return (
        <StoreContext.Provider value={providerValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;

const styles = StyleSheet.create({});
