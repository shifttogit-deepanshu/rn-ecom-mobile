import { Ionicons } from "@expo/vector-icons"
import React from "react"
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import {connect} from "react-redux"
import {removeFromCart} from "../../store/actions/cart"

const CartItem = (props)=>(
    <View style={styles.classItem}>
        <Text styles={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity} </Text><Text styles={styles.title}> {props.title}</Text> 
        </Text>
        
    
    <View style={styles.itemData}>
        <Text style={styles.price}>{props.amount.toFixed(2)} </Text>
       { props.deleteButton &&
        <TouchableOpacity style={styles.removeButton} onPress={()=>props.remove(props.product)}>
            <Ionicons name="trash" size={16} color="red" />
        </TouchableOpacity>}

    </View>
    </View>
)

const styles = StyleSheet.create({
    classItem:{
        padding:10,
        marginHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    itemData:{
        flexDirection:"row",
        alignItems:"center"
    },
    quantity:{
        color:"#888",
        fontSize:16
    },
    title:{
        fontSize:16
    },
    price:{
        marginLeft:20
    }
})
const mapDispatchToProps = (dispatch)=>{
    return {
        remove : (product)=>dispatch(removeFromCart(product))
    }
}
export default connect(undefined,mapDispatchToProps)(CartItem)