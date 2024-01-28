import { NavigationContainer } from '@react-navigation/native'
import { useState } from 'react'
import TabNavigator from './TabNavigator'
import AuthStack from './AuthStack'

const MainNavigator = () => {
    
    const [user,setUser] = useState(null)

  return (
    <NavigationContainer>
       {user ? <TabNavigator/> : <AuthStack/>} 
    </NavigationContainer>
  )
}

export default MainNavigator