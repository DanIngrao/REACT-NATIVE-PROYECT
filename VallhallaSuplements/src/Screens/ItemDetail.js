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
      
      <Image
        style={styles.image}
        source={{uri:`../../assets/Images/${product.image}`}}
        resizeMode='cover'
      />
      <Text>{product.title}</Text>
    
      <Text>$ {product.price}</Text>
      
      <Pressable onPress={onAddCart} style={styles.buyButton}>
        <Text style={styles.buyText}>Agregar al carrito</Text>
      </Pressable>
          
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cream,
    flex: 1,
    width: '100%',
    justifyContent:"start",
    alignItems:"center"
  },
  image:{
    width:300,
    height:300
  },
  buyText:{
    color:"white"
   },
   buyButton:{
    backgroundColor: colors.blue1,
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:5,
    marginTop:10
   },
})