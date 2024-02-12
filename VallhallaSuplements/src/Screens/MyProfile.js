import { StyleSheet, View,Image,Text, Pressable } from 'react-native'
import AddButton from '../Components/AddButton'
import { useGetProfileImageQuery } from '../Services/shopService'
import { useDispatch, useSelector } from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons'
import { deleteAllSession } from '../Database'
import { clearUser } from '../Features/Auth/authSlice'

const MyProfile = ({navigation}) => {
    const localId = useSelector(state => state.authReducer.value.localId)
    const {data} = useGetProfileImageQuery(localId)
    const dispatch = useDispatch()

    const onLogout = ()=>{
        deleteAllSession(localId)
        dispatch(clearUser())
    }

  return (
    <View>

        <View style={styles.container}>
            <Image
                source={data ? {uri:data.image} : require("../../assets/Images/user.png")}
                style={styles.image}
                resizeMode='cover'
                />
            <Text>{location?.address}</Text>
            <AddButton title={"Agregar foto"} onPress={()=> navigation.navigate("ImageSelector")}/>
        </View>
        <Pressable style={styles.logoutButton} onPress={onLogout}>
            <MaterialIcons name='logout' size={30}/>
            <Text>Logout</Text>
        </Pressable>
    </View>
  )
}


export default MyProfile


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:20
    },
    image:{
        width:200,
        height:200
    },
    logoutButton:{
        backgroundColor: 'red',
        width:"70%",
        paddingVertical:8,
        margin:10
    }
})