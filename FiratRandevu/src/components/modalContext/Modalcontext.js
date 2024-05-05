import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Modalcontext = (props) => {
  const {selectedDate} =props
  
  return (
    <View>
        <Text>time{selectedDate} </Text>
    </View>
  )
}

export default Modalcontext

const styles = StyleSheet.create({})