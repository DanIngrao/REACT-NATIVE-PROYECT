import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import AuthStack from './AuthStack'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchSession } from '../Database'
import { setUser } from '../Features/Auth/authSlice'

const MainNavigator = () => {

  const dispatch = useDispatch()
  const idToken = useSelector(state => state.authReducer.value.idToken)

  useEffect(()=>{(async()=>{
    try{
      const session = await fetchSession(); 
      if(session?.rows.lenght){
        const user = session.rows._array[0];
        dispatch(setUser(user))}
      }catch(err){
        console.log(err)
      }
    })()
  },[])

  return (
    <NavigationContainer>
       {idToken ? <TabNavigator/> : <AuthStack/>} 
    </NavigationContainer>
  )
}

export default MainNavigator