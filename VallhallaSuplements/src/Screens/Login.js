import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { useLoginMutation } from '../Services/authService'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../Features/Auth/authSlice'

const Login = ({navigation}) => {
  
    const dispatch = useDispatch()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [triggerLogin,{data,isError,isLoading,isSuccess}]=useLoginMutation("")

    const onSubmit=()=>{
        triggerLogin({
            email,
            password
        })
    }

    useEffect(()=>{
        if(isSuccess) {dispatch(setUser(data))}
    },[data,isError,isSuccess])

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Ingrese para empezar</Text>        
                <InputForm
                    label={"email"}
                    onChange={(t)=>{setEmail(t)}}
                    error={""}
                />
                <InputForm
                    label={"contraseña"}
                    onChange={(t)=>{setPassword(t)}}
                    error={""}
                    isSecure={true}
                />
                <SubmitButton
                    onPress={onSubmit}
                    title= "Entrar"
                />
                <Text style={styles.sub}>No tiene cuenta?</Text>
                <Pressable onPress={()=>navigation.navigate('Signup')}>
                    <Text style={styles.subLink}>Registrarse</Text>
                </Pressable>
            </View>            
        </View>
  )
}

export default Login

const styles = StyleSheet.create({
    main:{
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: colors.cream
    },
    container:{
        width: '90%',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: colors.grey,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10
    },
    title:{
        fontSize: 22,
        fontFamily: 'Josefin',
    },
    sub:{
        fontSize: 14,
        fontFamily: 'Josefin',
    },
    subLink:{
        fontSize: 14,
        fontFamily: 'Josefin',
        color: 'blue'
    }
    
})