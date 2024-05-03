import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function card() {
  return (
    <View style={styles.Card}>
    <Image
      style={styles.img}
      source={require('../../assets/images/ibrahimtrkogl.png')}></Image>
    <View style={styles.gryCard}>
      <View style={styles.infoContain}>
        <Text style={{color: '#78113E'}}>Prof.Dr</Text>
        <Text style={{color: '#78113E', fontSize: windowWidth * 0.05}}>
          İBRAHİM TÜRKOĞLU
        </Text>
      </View>
      <View style={styles.btnDownld}></View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({})