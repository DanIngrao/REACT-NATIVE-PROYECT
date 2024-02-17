import { StyleSheet, Text, View,FlatList, Pressable } from 'react-native'
import CartItem from '../Components/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { usePostOrdersMutation } from '../Services/shopService'
import { colors } from '../Global/colors'
import { clearCart } from '../Features/Cart/cartSlice'

const Cart = () => {

    const dispatch = useDispatch()
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
            <Pressable style={styles.button} onPress={()=> {triggerPostOrder({localId,order:cart}); dispatch(clearCart())}}>
                <Text style={styles.text}>Confirmar</Text>
            </Pressable>
            <Pressable style={styles.button2} onPress={()=> {dispatch(clearCart())}}>
                <Text style={styles.text}>Limpiar carrito</Text>
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
        backgroundColor:colors.blue1,
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:5
    },
    button2:{
        backgroundColor:'red',
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:5
    }
})