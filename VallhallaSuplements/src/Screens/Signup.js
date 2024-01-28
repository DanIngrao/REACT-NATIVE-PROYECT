import InputForm from '../Components/InputForm'
import { colors } from '../Global/colors'


const Signup = ({navigation}) => {

    const onSubmit = () => {}

    return (
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
        <InputForm
            label={"confirm password"}
            onChange={()=>{}}
            error={""}
            isSecure={true}
        />
        <SubmitButton
            onPress={onSubmit}
            title= "Send"
        />
        <Text style={styles.sub}>Already have an account?</Text>
        <Pressable onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.subLink}>Login</Text>
        </Pressable>
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