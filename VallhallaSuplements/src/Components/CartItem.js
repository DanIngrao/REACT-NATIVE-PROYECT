import { Pressable, StyleSheet, Text, View } from 'react-native'
import {Entypo} from "@expo/vector-icons"
import { colors } from '../Global/colors'
import { removeItem } from '../Features/Cart/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({item}) => {
    
    const dispatch = useDispatch()

    const deleteCartItem = ()=>{dispatch(removeItem(item))}

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text1}>{item.title}</Text>
                <Text  style={styles.text2}>{item.category}</Text>
                <Text  style={styles.text2}>Cantidad: {item.quantity} Precio $ {item.price}</Text>
            </View>
            <Pressable onPress={deleteCartItem}>
                <Entypo name='trash' size={25} color="red"/>
            </Pressable>
        </View>

    )
}

export default CartItem

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.blue2,
        margin:10,
        padding:10,
        height:100,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:10,
        borderWidth:2
    },
    textContainer:{
        width:"70",
        gap:5
    },
    text1:{
        fontSize:19,
        color: 'white',
        fontFamily:"Josefin"
    },
    text2:{
        fontSize:17,
        color:'white',
        fontFamily:"Josefin"
    }

})