import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { registerRootComponent } from 'expo'

const index = () => {
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}


registerRootComponent(index)

export default index

const styles = StyleSheet.create({})