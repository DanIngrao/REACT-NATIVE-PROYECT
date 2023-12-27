import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Header from '../Components/Header';
import Cart from '../Screens/Cart'


const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName='Cart'
        screenOptions={{
            header: () => <Header title='Cart'/>
        }}
    >
        <Stack.Screen name='Cart' component={Cart}/>
    </Stack.Navigator>
  )
}

export default CartNavigator
