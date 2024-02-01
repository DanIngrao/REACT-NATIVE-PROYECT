import { StyleSheet, Text, View,FlatList, Pressable } from 'react-native'
import CartItem from '../Components/CartItem'
import { useSelector } from 'react-redux'
import { usePostOrdersMutation } from '../Services/shopService'
import { colors } from '../Global/colors'

const Cart = () => {

  const cartItems = useSelector(state => state.cartReducer.value.items)
  const total= useSelector(state => state.cartReducer.value.total)
  const [triggerPost] = usePostOrdersMutation()
  
  const confirmCart = ()=>{
    triggerPost({total, cartItems, user: 'loggedUser'})
  }

  return (
    <View style={styles.container}>
        <FlatList
            data={cartItems}
            keyExtractor={cartItem => cartItem.id}
            renderItem={({item})=> <CartItem item={item}/>}
        />
        <View style={styles.confirmContainer}>
            <Pressable onPress={()=>confirmCart()}>
                <Text style={styles.text}>Confirmar</Text>
            </Pressable>
            <Text style={styles.text}>Total: $ {total} </Text>
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
    }
})