import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

const Knabay = ({props}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>{nav.navigate("Screen2",{...props})}}>
        <Image style={styles.p}source={props.aaa}/>
        <Text style={styles.k}>{props.name}</Text>

        </TouchableOpacity>
    </View>
  )
}

export default Knabay

const styles = StyleSheet.create({
    p:{
        // borderWidth:1,
        width:60,
        height:60,
        marginHorizontal:15,
        // marginVertical: 5,
        borderRadius:20
        
    

    },
    k:{
      textAlign:"center"
    },
    container:{
      marginTop:10,

      marginBottom:10
    }
})