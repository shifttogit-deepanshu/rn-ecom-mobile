import React from "react"
import {View,StyleSheet,Text,Image, Button} from "react-native"


const ProductItem = (props)=>{
    return (
        <View style={styles.product}>
            <Image style={styles.image} source={{uri:props.image}}/>
            <Text>{props.title}</Text>
            <Text>${props.price.toFixed(2)}</Text>
            <View>
            <Button title="View Details" />
            <Button title="To Cart" />
            </View>
        </View>
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
        height:300,
        margin:20
    },
    image:{
        width:"100%",
        height:'60%'
    }
})

export default ProductItem