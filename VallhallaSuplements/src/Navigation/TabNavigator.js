import { StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { colors } from '../Global/colors';
import CartStack from './CartStack';
import ShopStack from './ShopStack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}
        >
            <Tab.Screen 
                name='ShopTab' 
                component={ShopStack}
                options={{
                    tabBarIcon: ({focused}) => {
                        <View>
                            <MaterialCommunityIcons
                                name='shopping-outline'
                                size={40}
                                color={
                                    focused
                                        ? colors.cream
                                        : colors.grey
                                }
                            />
                        </View>
                    }
                }}
            />
            <Tab.Screen 
                name='CartTab' 
                component={CartStack} 
                options={{
                    tabBarIcon: ({focused}) => {
                        <View>
                            <MaterialCommunityIcons
                                name='home'
                                size={40}
                                color={
                                    focused
                                        ? colors.cream
                                        : colors.grey
                                }
                            />
                        </View>
                    }
                }}
            />
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