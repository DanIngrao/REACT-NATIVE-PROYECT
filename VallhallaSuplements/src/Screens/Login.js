import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'
import InputForm from '../Components/InputForm'

const Login = ({navigation}) => {
  
    const onSubmit = () => {}
  
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Login to start</Text>        
                <InputForm
                    label={"email"}
                    onChange={()=>{}}
                    error={""}
                />
                <InputForm
                    label={"password"}
                    onChange={()=>{}}
                    error={""}
                    isSecure={true}
                />
                <SubmitButton
                    onPress={onSubmit}
                    title= "Send"
                />
                <Text style={styles.sub}>Not registered yet?</Text>
                <Pressable onPress={()=>navigation.navigate('Signup')}>
                    <Text style={styles.subLink}>Sign up</Text>
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
        alignItems:'center'
    },
    container:{
        width: '90%',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: colors.blue1,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10
    },
    title:{
        fontSize: 22,
        fontFamily: 'Lobster',
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