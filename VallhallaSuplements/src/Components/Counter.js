import { StyleSheet, Text, View,Button,TextInput } from 'react-native'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment ,decrement,incrementByAmount } from '../Features/Counter/counterSlice'
import { colors } from '../Global/colors'

const Counter = () => {
    const count = useSelector((state)=> state.counterReducer.value)
    const [amount,setAmount] = useState(0)
    const dispatch = useDispatch()
  

  return (
        <View style={styles.container}>
            <Button title='+' onPress={()=> dispatch(increment())} />
            <Text>{count}</Text>
            <Button title='-' onPress={()=> dispatch(decrement())} />
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} onChangeText={(t) => setAmount(parseInt(t))} />
                <Button title='Add' onPress={()=>dispatch(incrementByAmount(amount))}/>
            </View>
        </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        margin:15,
        padding: 5,
        borderRadius: 5,
        backgroundColor: colors.grey
      },
      inputContainer:{
        gap:10,
        backgroundColor: colors.grey
      },
      input:{
        borderWidth:2,
        backgroundColor: colors.cream
      }
})