import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Components/Header'
import Home from '../Screens/Home'
import ItemListCategories from '../Screens/ItemListCategories'
import ItemDetail from '../Screens/ItemDetail'

const Stack = createNativeStackNavigator()

const ShopStack = () => {
  return (
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
  )
}

export default ShopStack