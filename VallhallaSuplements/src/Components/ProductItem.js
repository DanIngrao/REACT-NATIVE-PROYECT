import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({item, setProductDetailId}) => {
  return (
    <Pressable style={styles.card}>
      <Card>   
        <Text style={styles.text}>
          {item.title}
        </Text>
        <Image
         source={{uri:item.image}}
        />
      </Card>
    
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  card:{padding:10,marginHorizontal: 30,
    marginVertical:10}, text:{fontSize:20}
})