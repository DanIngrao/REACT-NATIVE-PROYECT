import { StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors';
import CartStack from './CartStack';
import ShopStack from './ShopStack';
import TabIcon from '../Components/TabIcon';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import OrdersStack from './OrdersStack';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
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
                tabBarIcon:({focused}) => <TabIcon icon="shop" label={"Productos"} focused={focused}/>
            }}
        />
        <Tab.Screen 
            name='CartTab' 
            component={CartStack} 
            options={{
                tabBarIcon:({focused}) =>  <TabIcon icon="shopping-cart" label={"Carrito"} focused={focused}/>
            }}
        />
        <Tab.Screen 
            name="OrdersStack" 
            component={OrdersStack}
            options={{
              tabBarIcon:({focused}) => <TabIcon icon="list" label="Ordenes" focused={focused}/> 
             }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.blue1,
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