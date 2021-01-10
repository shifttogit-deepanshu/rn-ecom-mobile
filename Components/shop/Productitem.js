import React from "react"
import {View,StyleSheet,Text,Image, Button} from "react-native"
import Colors from "../../settings/Colors"


const ProductItem = (props)=>{
    return (
        <View style={styles.product}>
            <Image style={styles.image} source={{uri:props.image}}/>
            <View style={styles.details}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.action}>
            <Button title="View Details" color={Colors.primaryColor} onPress={()=>props.navigation.navigate('ProductDetailScreen',{productId:props.productId,productTitle:props.title})}/>
            <Button title="To Cart" color={Colors.primaryColor}/>
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