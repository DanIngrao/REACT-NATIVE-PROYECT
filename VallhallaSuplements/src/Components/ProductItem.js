import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({item, navigation}) => {

  return (
    <Pressable onPress={()=>navigation.navigate("Detail",{id:item.id})}>
      <Card style={styles.card}>   
        <Text style={styles.text}>
          {item.title}
        </Text>
      </Card>
    
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  card:{
    marginHorizontal: 30,
    marginVertical:10,
    padding: 10,
    justifyContent:'center',
    alignItems:'flex-start'
  }, 
    text:{
      fontSize:20
    }
    
})