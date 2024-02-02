import { StyleSheet, View,Image,Text } from 'react-native'
import AddButton from '../Components/AddButton'
import { useGetProfileImageQuery } from '../Services/shopService'
import { useSelector } from 'react-redux'

const MyProfile = ({navigation}) => {
    const localId = useSelector(state => state.authReducer.value.localId)
    const {data} = useGetProfileImageQuery(localId)

  return (
    <View style={styles.container}>
        <Image
            source={data ? {uri:data.image} : require("../../assets/Images/user.png")}
            style={styles.image}
            resizeMode='cover'
        />
        <Text>{location?.address}</Text>
        <AddButton title={"Agregar foto"} onPress={()=> navigation.navigate("ImageSelector")}/>
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
    }
})