import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Categories from '../Components/Categories'
import { colors } from '../Global/colors'
import Counter from '../Components/Counter'

const Home = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Counter/>
      <Categories navigation={navigation} route={route}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cream,
    flex: 1,
    width: '100%',
  }
})