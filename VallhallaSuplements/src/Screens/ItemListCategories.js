import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../Components/Search'
import ProductItem from '../Components/ProductItem'
import { colors } from '../Global/colors'
import { useSelector } from 'react-redux'

const ItemListCategories = ({navigation}) => {
  
  const productFilteredByCategory = useSelector(state => state.shopReducer.value.productsFilteredByCategory)
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")

  useEffect(()=>{
    
    const productsFiltered= productFilteredByCategory.filter((product)=>
      product.title.includes(keyword)
    );

    setProducts(productsFiltered)

  },[productFilteredByCategory, keyword])

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