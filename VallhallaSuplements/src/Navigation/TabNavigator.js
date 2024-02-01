import { StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors';
import CartStack from './CartStack';
import ShopStack from './ShopStack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import OrdersStack from './OrdersStack';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false
        }}
        activeColor="#e91e63"
        labelStyle={{ fontSize: 12 }}
        barStyle={{ backgroundColor: colors.blue1 }}
    >
        <Tab.Screen 
            name='ShopTab' 
            component={ShopStack}
            options={{
                tabBarLabel: 'Productos',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                )
            }}
        />
        <Tab.Screen 
            name='CartTab' 
            component={CartStack} 
            options={{
                tabBarLabel: 'Carrito',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="cart" color={color} size={26} />
                )
            }}
        />
        <Tab.Screen 
            name="OrdersStack" 
            component={OrdersStack}
            options={{
                tabBarLabel: 'Ordenes',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="list" color={color} size={26} />
                ) 
             }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigator