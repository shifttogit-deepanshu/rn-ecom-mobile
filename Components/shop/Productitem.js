import React from "react"
import {View,StyleSheet,Text,Image, Button,TouchableNativeFeedback,Platform, Touchable} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

const ProductItem = (props)=>{
    let TouchableCmp = Platform.OS=='android' && Platform.Version>=21 ?TouchableNativeFeedback:TouchableOpacity
    return (
        <TouchableCmp onPress={props.onSelect}>     
        <View style={styles.product}>
            <Image style={styles.image} source={{uri:props.image}}/>
            <View style={styles.details}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>${parseInt(props.price,10).toFixed(2)}</Text>
            </View>
            <View style={styles.action}>{props.children}</View>
        </View>
        </TouchableCmp> 
    )
}

const styles= StyleSheet.create({
    product:{
        shadowColor:"black",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.5,
        borderRadius:10,
        elevation:5,
        shadowRadius:10,
        backgroundColor:'white',
        height:300,
        margin:20,
        
    },
    image:{
        width:"100%",
        height:"60%"
    },
    title:{
        fontSize:16,
        marginVertical:4
    },
    price:{
        fontSize:14,
        color:"#888"
    },
    details:{
        height:"15%",
        justifyContent:"center",
        alignItems:"center"
    },
    action:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20,
        height:"25%"
    }
})


export default ProductItem