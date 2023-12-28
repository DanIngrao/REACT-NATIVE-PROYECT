import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cream,
    flex: 1,
    width: '100%',
  }
})