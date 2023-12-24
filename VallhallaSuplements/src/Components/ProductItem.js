import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({item, navigation, route}) => {
  
  console.log(item.image)

  return (
    <Pressable style={styles.card} onPress={()=>navigation.navigate("Detail",{id:item.id})}>
      <Card>   
        <Text style={styles.text}>
          {item.title}
        </Text>
      </Card>
    
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  card:{padding:10,marginHorizontal: 30,
    marginVertical:10}, text:{fontSize:20}
})