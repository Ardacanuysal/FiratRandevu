import { View, Text,FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import  Academic from '../../assets/acdmc.json'
const Academic = () => {
  return (
    <View> 
      <FlatList
      data={Academic}
      renderItem={({item}) => <Card personImage={item.personImage} title={item.title} name={item.name} email={item.email}/>}
      />
    </View>
   
  )
}

export default Academic