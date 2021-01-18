import React from "react"
import {View,StyleSheet,Text, Button} from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Colors from "../../settings/Colors"
const UserAuthSCreen = (props)=>{
    console.log(props)
    return (
        <View style={styles.screen}>
        <LinearGradient
        // Background Linear Gradient
        colors={['transparent',"rgba(194,24,91,0.3)"]}
        style={styles.background}
      >
    <View style={styles.card}>
    <Text>Login Here</Text>
    <Button title="login" />
    </View>
    </LinearGradient>
    </View>
        
        
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        width:"100%",
        height:"100%",
        
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
      },
    card:{
        shadowColor:"black",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.5,
        borderRadius:10,
        elevation:5,
        shadowRadius:10,
        backgroundColor:'white',
        width:"80%",
        height:300,
        margin:20,  
        justifyContent:"center",
        alignItems:"center"
    }
})

export default UserAuthSCreen