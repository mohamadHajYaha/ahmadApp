import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NewComponent = (props) => {
  return (
    <View style={styles.component}>
      <Text>{props.name}</Text>
      <Text>{props.price }</Text>
<Image source={props.img} style={{width: 200, height: 200}} />
    </View>
  )
}
// img
// name
// price
export default NewComponent

const styles = StyleSheet.create({
component:{
    marginLeft: "auto",
    padding: 15,
    flexDirection: "row",
    borderLeftWidth:0.6,
    borderWidth: 1,
    marginTop: 15,
    marginHorizontal: 20,
    borderColor:'black',
    width: 280,
    


}



})