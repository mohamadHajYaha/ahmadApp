import { StyleSheet, Text, View, Image, } from 'react-native'
import React from 'react'

const Callerscard = (props) => {
    return (
        <View style={styles.item}>

<View style={styles.time}>
                <Text  style={styles.text}>{props.time}</Text>

            </View>

            <View style={styles.number}>
                <Text style={styles.text}>{props.number}</Text>
            </View>
           

            <View style={styles.img}>
                <Image style={styles.icons8} source={props.img} />
                

            </View>

        </View>
    )
}

export default Callerscard

const styles = StyleSheet.create({
    number: {
        height: '100%',
        width: 170,
        alignItems: "center",
        justifyContent: 'center',
    },
    img: {
        height: '100%',
        width: 80,
        alignItems: "center",
        justifyContent: 'center',
    },
    time: {
        height: '100%',
        width: 80,
        alignItems: "center",
        justifyContent: 'center',

    },
    item: {
        height: 90,
        width: "100%",
        margin: 20,
        alignItems: "center",
        justifyContent: 'space-between',
        flexDirection: "row",
        marginTop:1,
    },
    text: {
        fontSize: 20,

    }

})


