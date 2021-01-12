import React from "react"
import {View,StyleSheet,Text,Button} from "react-native"
import Colors from "../../settings/Colors"

const OrderItem = (props)=>{
    return (
        <View style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <View style={styles.viewDetails}>
                <Button title="View Details" color={Colors.primaryColor}/>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    orderItem:{
        shadowColor:"black",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.7,
        borderRadius:10,
        elevation:5,
        shadowRadius:10,
        backgroundColor:'white',
        margin:10,
        padding:10
    },
    summary:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        marginBottom:20
    },
    price:{
        fontSize:15,
        color:"black"
    },
    date:{
        color:"#888"
    },
    viewDetails:{
        margin:10
    }
    
})

export default OrderItem