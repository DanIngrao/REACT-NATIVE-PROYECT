import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { useEffect, useState } from 'react'
import { useSignUpMutation } from '../Services/authService'
import { signupSchema } from '../Validations/signupShema'
import { useDispatch } from 'react-redux'
import { setUser } from '../Features/Auth/authSlice'


const Signup = ({navigation}) => {

    const dispatch = useDispatch()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const [triggerSignup,{data,isError,isSuccess,isLoading}]=useSignUpMutation()

    const [errorMail,setErrorMail]=useState("")
    const [errorPassword,setErrorPassword]=useState("")
    const [errorConfirmPassword,setErrorConfirmPassword]=useState("")

    useEffect(()=>{
        if(isSuccess) {dispatch(setUser(data))}
    },[data,isError,isSuccess])

    const onSubmit = ()=>{
        try{
            signupSchema.validateSync({email,password,confirmPassword})
            triggerSignup({
                email,
                password
            })
        }catch(err){
            switch(err.path){
                case 'email':
                    setErrorMail(err.message)
                    break;
                case 'password':
                    setErrorPassword(err.message)
                    break;
                case 'confirmPassword':
                    setErrorConfirmPassword(err.message)
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Registrese para empezar</Text>        
                <InputForm
                    label={"email"}
                    onChange={(t)=>{setEmail(t)}}
                    error={errorMail}
                />
                <InputForm
                    label={"contraseña"}
                    onChange={(t)=>{setPassword(t)}}
                    error={errorPassword}
                    isSecure={true}
                />
                <InputForm
                    label={"confirmar contraseña"}
                    onChange={(t)=>{setConfirmPassword(t)}}
                    error={errorConfirmPassword}
                    isSecure={true}
                />
                <SubmitButton
                    onPress={onSubmit}
                    title= "Enviar"
                />
                <Text style={styles.sub}>Ya tiene cuenta?</Text>
                <Pressable onPress={()=>navigation.navigate('Login')}>
                    <Text style={styles.subLink}>Ingresar</Text>
                </Pressable>
            </View>
        </View>   
    )

}

export default Signup

const styles = StyleSheet.create({
    main:{
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        alignItems:'center'
    },
    container:{
        width: '90%',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: colors.blue2,
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
        color: 'black'
    },
    subLink:{
        fontSize: 14,
        fontFamily: 'Josefin',
        color: 'blue'
    }
    
})