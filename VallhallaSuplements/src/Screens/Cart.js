import { StyleSheet, Text, View,FlatList, Pressable } from 'react-native'
import CartItem from '../Components/CartItem'
import { useSelector } from 'react-redux'
import { usePostOrdersMutation } from '../Services/shopService'
import { colors } from '../Global/colors'

const Cart = () => {

    const localId = useSelector(state => state.authReducer.value.localId)
    const cart = useSelector(state => state.cartReducer.value)
    const [triggerPostOrder,{data,isSuccess,isError,error}] = usePostOrdersMutation()  

  return (
    <View style={styles.container}>
        <FlatList
            data={cart.items}
            keyExtractor={item => item.id}
            renderItem={({item})=> <CartItem item={item}/>}
        />
        <View style={styles.confirmContainer}>
            <Pressable style={styles.button} onPress={()=> triggerPostOrder({localId,order:cart})}>
                <Text style={styles.text}>Confirmar</Text>
            </Pressable>
            <Text style={styles.text}>Total: $ {cart.total} </Text>
        </View>
    </View>
   
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:130,
        backgroundColor:colors.cream
    },
    confirmContainer:{
        backgroundColor:"grey",
        padding:25,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    text:{
        color:"white",
        fontFamily:"Josefin"
    },
    button:{
        backgroundColor:colors.blue1
    }
})