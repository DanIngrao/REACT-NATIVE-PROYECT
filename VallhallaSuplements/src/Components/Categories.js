import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'
import categories from '../Data/categories.json'

const Categories = ({setCategorySelected}) => {
  return (
    <View style={styles.container}>
      <FlatList 
        style={styles.container}
        renderItem={({item})=> <CategoryItem category={item} setCategorySelected={setCategorySelected}/>} 
        data={categories} 
        keyExtractor={category => category} 
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%'
  }
})