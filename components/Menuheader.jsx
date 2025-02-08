import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

const Ahmad = ({props}) => {
  const nav=useNavigation()
  return (
    <View>
      <TouchableOpacity onPress={()=>{nav.navigate("Screen3")}}>
      <Text style={styles.b}>
      {props.name}</Text>
      </TouchableOpacity>

      {/* <Image style={styles.r}source={props.name}></Image> */}
    </View>
  )
}

export default Ahmad

const styles = StyleSheet.create({
    b:{
// width:200,
height:60,
marginHorizontal:10,
borderRadius: 10,
color:"black",
fontSize:14,
fontWeight:"600",
textAlign:'center',
marginTop:10




    // },
    // r:{
    //   // borderWidth:1,
    //   // borderRadius: 100,
    //   width:150,
    //   height:100,
    //   // borderColor:"black",

      

    }
    
})