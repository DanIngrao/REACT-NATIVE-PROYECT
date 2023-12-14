import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Categories from '../Components/Categories'

const Home = ({setCategorySelected}) => {
  return (
    <View>
      <Header title='Categories'/>
      <Categories setCategorySelected={setCategorySelected}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})