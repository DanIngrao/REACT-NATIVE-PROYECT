import { FlatList, StyleSheet, Text, View } from 'react-native'
import OrderItem from '../Components/OrderItem'
import { useGetOrdersQuery } from '../Services/shopService'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../Components/LoadingSpinner'
import { colors } from '../Global/colors'

const Orders = () => {
  const localId = useSelector(state => state.authReducer.value.localId)
  const {data,isSuccess,isError,error,isLoading} = useGetOrdersQuery(localId)
  const [info,setInfo] = useState(true)
  const [errorMessage,setErrorMessage] = useState("")
  const [loading , setLoading] = useState(true)

  useEffect(()=>{
    if(isSuccess && data.length === 0) setInfo(false)
    if(isSuccess && data) setLoading(false)
    if(isError && error ) setErrorMessage(error.error)
  },[data,isSuccess,isError,error])

  if(!info) return <View style={styles.container}><Text>no hay ordenes</Text></View>
  if(errorMessage) return  <View style={styles.container}><Text>Error al cargar</Text></View>
  if(loading) return  <LoadingSpinner/>

  return (
    <View style={styles.container}>

        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => <OrderItem order={item}/>}
            />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.cream,
        padding:25,
        flexDirection:"row",
        justifyContent:"space-between",
    }
})