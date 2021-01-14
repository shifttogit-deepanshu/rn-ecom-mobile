import React from "react"
import {View,Text,StyleSheet,TextInput} from "react-native"

const Input =(props)=>{
    return (
        <View style={styles.formControl}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput style={styles.input} value={props.value} onChangeText={props.onChangeText} {...props}/>  
        {props.hasError && <Text style={styles.errorText}>Please fill this field</Text>}     
        </View>
    )
}

const styles = StyleSheet.create({
    formControl:{
        width:"100%"
    },
    label:{
        marginVertical:8
    },
    input:{
        paddingHorizontal:2,
        paddingVertical:5,
        borderBottomColor:"#ccc",
        borderBottomWidth:2
    },
    errorText:{
        color:"red"
    }
})


export default Input