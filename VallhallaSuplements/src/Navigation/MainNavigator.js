import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import AuthStack from './AuthStack'
import { useSelector } from 'react-redux'

const MainNavigator = () => {

  const user = useSelector(state => state.authReducer.value.user)

  return (
    <NavigationContainer>
       {user ? <TabNavigator/> : <AuthStack/>} 
    </NavigationContainer>
  )
}

export default MainNavigator