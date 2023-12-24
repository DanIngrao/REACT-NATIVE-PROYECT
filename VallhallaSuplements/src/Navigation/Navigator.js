import { StyleSheet, Text, View } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import Home from '../Screens/Home'
import ItemListCategories from '../Screens/ItemListCategories'
import ItemDetail from '../Screens/ItemDetail'
import Header from '../Components/Header'


const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={({route})=> ({
          header: () => {
            return <Header title={
              route.name === 'Home' ? 'Categorias':
              route.name === 'ItemListCategories' ? route.params.category : 'Detail'
            }/>
          }
        })} 
      >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='ItemListCategories' component={ItemListCategories}/>
        <Stack.Screen name='Detail' component={ItemDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})