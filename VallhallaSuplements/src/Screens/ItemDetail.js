import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProduct from "../Data/products.json"

const ItemDetail = ({route}) => {

  const {id} = route.params

  const [product,setProduct] = useState({})

  useEffect(()=>{

    const productFinded = allProduct.find(product => product.id === id)
    setProduct(productFinded)

  },[id])

  return (
    <View>
      <View>
          <View>
            <Text>{product.title}</Text>
          </View>
          <View>
            <Text>$ {product.price}</Text>
            <Pressable>
              <Text>Buy Now</Text>
            </Pressable>
          </View>
        </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({})