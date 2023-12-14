import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductItem = ({item, setProductDetailId}) => {
  return (
    <Pressable style={styles.card}>
      <Text style={styles.text}>
        {item.title}
      </Text>
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({})