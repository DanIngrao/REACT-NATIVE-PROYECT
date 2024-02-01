import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../Components/Search'
import ProductItem from '../Components/ProductItem'
import { colors } from '../Global/colors'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../Services/shopService'

const ItemListCategories = ({navigation, route}) => {
  
  const {category} = route.params
  const {data, isLoading, error} = useGetProductsByCategoryQuery(category);
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")

  useEffect(()=>{
    if(!isLoading) {
      const dataArray = Object.values(data)
      const productsFiltered = dataArray.filter(product => product.title.includes(keyword))
      setProducts(productsFiltered)
    }

  },[keyword,data])

  return (
    <View style={styles.container}>
      <Search onSearch={setKeyword}/>
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={({item})=><ProductItem item={item} navigation={navigation}/>}
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