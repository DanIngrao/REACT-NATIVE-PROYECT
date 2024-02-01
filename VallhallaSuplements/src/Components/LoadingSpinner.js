import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { colors } from '../Global/colors'

const LoadingSpinner = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:colors.cream }}>
      <ActivityIndicator size={80} color="red" />
    </View>
  )
}

export default LoadingSpinner;