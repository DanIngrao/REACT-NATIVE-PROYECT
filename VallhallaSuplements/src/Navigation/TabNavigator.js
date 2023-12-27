import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { NavigationContainer } from '@react-navigation/native';
import CartNavigator from './CartNavigator';
import { colors } from '../Global/colors';


const Stack = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: StyleSheet.tabBar
            }}
        >
            <Tab.Screen name='ShopTab' component={ShopNavigator}/>
            <Tab.Screen name='CartTab' component={CartNavigator}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.blue2,
        shadowColor: 'black',
        elevation: 4,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90
    }
})