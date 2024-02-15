import { StyleSheet, Text, View,Button} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { increment ,decrement } from '../Features/Counter/counterSlice'
import { colors } from '../Global/colors'

const Counter = () => {
    const count = useSelector((state)=> state.counterReducer.value)
    const dispatch = useDispatch()
  

  return (
        <View style={styles.container}>
            <Button title='+' onPress={()=> dispatch(increment())} />
            <Text>{count}</Text>
            <Button title='-' onPress={()=> dispatch(decrement())} />
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
        backgroundColor: colors.grey,
        width:'50%'
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