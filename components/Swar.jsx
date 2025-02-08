import { StyleSheet, Text, View ,Image, Pressable, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'


const Swar = ({props}) => {
  // const nav =useNavigation()
  return (
    <View style={styles.container}>
        <Image  style={styles.pic} source={props.kkk}/>
        <Text style={styles.price}>   מבצע רק ב {props.price}₪</Text>

        {/* <TouchableOpacity onPress={()=>{nav.navigate("Screen2",{...props})}}>
        <Text style={styles.zr}>
            .....לקנות.....     
        </Text>
        </TouchableOpacity> */}

    </View>
  )
}

export default Swar

const styles = StyleSheet.create({
    pic:{
        width:300,
        height:140,
        // borderWidth:2,
        marginHorizontal:10,
        borderRadius:20,
        resizeMode:'cover',


    },
    zr:{
      // borderWidth:1,

      // marginHorizontal:10,
      fontSize:20,
      


    },
    container:{
      // marginTop:10
    },
    price:{
      fontSize:15,
      position:'absolute',
      // borderWidth:1,
      margin:10,
      color:'black',
        backgroundColor:'#00FFD1'

    }
    
})
