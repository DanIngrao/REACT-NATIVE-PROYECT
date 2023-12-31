import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { setProductsFilteredByCategory } from '../Features/Shop/shopSlice'

const CategoryItem = ({category, navigation}) => {
  
  const dispatch = useDispatch();
  
  return (
      <Pressable onPress={()=>{  
        
          dispatch(setProductsFilteredByCategory(category))
          navigation.navigate("ItemListCategories", {category})
        
        }
      }>
        <Card style={styles.cardContainer}>
          <Text style={styles.text}>{category}</Text>
        </Card>
      </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  cardContainer:{
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