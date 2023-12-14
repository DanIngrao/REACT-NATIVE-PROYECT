import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'

const Header = ({title='Products'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.blue1,
    height: 80,
    width: '100%',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize: 30
  }
})