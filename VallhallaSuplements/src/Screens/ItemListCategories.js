import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import allProducts from '../Data/products.json'
import Search from '../Components/Search'
import ProductItem from '../Components/ProductItem'
import { colors } from '../Global/colors'

const ItemListCategories = ({navigation, route}) => {
  
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")

  const {category} = route.params

  useEffect(()=>{
    if(category){
      const products = allProducts.filter(product => product.category == category)
      const productsFiltered = products.filter(product=>product.title.includes(keyword))
      setProducts(productsFiltered) 
    }else{
      const productsFiltered = allProducts.filter(product=>product.title.includes(keyword))
      setProducts(productsFiltered)
  }},[category, keyword])

  return (
    <View style={styles.container}>
      <Search onSearch={setKeyword}/>
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={({item})=><ProductItem item={item} navigation={navigation} route={route}/>}
          keyExtractor={item => item.id}
        />
      </View>
    </View>  
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cream,
    flex: 1,
    width: '100%',
  }
})