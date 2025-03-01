import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PC = (props) => {
  return (
    <View style={styles.component}>
      <Text>{props.name}</Text>
      <Text>{props.price }</Text>
      <View>
      <Image source={props.img} style={{width: 200, height: 200, borderWidth:1}} />

      </View>
    </View>
  )
}

export default PC

const styles = StyleSheet.create({
component:{
 
    padding: 15,
    marginTop: 15,
    borderColor:'black',
    width: 280,
    


}



})