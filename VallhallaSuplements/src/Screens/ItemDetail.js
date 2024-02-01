import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProduct from "../Data/products.json"
import { colors } from '../Global/colors'
import { useDispatch } from 'react-redux'
import { addItem } from '../Features/Cart/cartSlice'

const ItemDetail = ({route}) => {

  const dispatch = useDispatch()

  const onAddCart = ()=>{dispatch(addItem({...product, quantity: 1}))}

  const {id} = route.params

  const [product,setProduct] = useState({})

  useEffect(()=>{

    const productFinded = allProduct.find(product => product.id === id)
    setProduct(productFinded)

  },[id])

  return (
    <View style={styles.container}>
      <View>
          <Image
            source={{uri: product.image}}
          />
          <View>
            <Text>{product.title}</Text>
          </View>
          <View>
            <Text>$ {product.price}</Text>
            <Pressable onPress={onAddCart}>
              <Text>Agregar al carrito</Text>
            </Pressable>
          </View>
        </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cream,
    flex: 1,
    width: '100%',
  },
  image:{
    width:"100%",
    height:300
  }
})