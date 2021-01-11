import React from "react"
import {View,Text,Button,StyleSheet,FlatList} from "react-native"
import Colors from "../../settings/Colors"
import {connect} from "react-redux"
import CartItem from "../../Components/shop/CartItem"


const CartScreen = (props)=>{

    const transformedcartitems = []
    for (const key in props.cartItems){
        transformedcartitems.push({
            id: key,
            title:props.cartItems[key].productTitle,
            quantity:props.cartItems[key].quantity,
            price:props.cartItems[key].productPrice,
            sum:props.cartItems[key].sum
            
        })
    } 
    return (
    <View style={styles.screen}>
        <View style={styles.summary}>
        <Text style={styles.summaryText}>Total: <Text style={styles.amount}>${props.totalAmount}</Text></Text>
        <Button title="Order Now"/>
        </View>
        <View>
        <FlatList data={transformedcartitems} renderItem={itemData=><CartItem quantity={itemData.item.quantity} title={itemData.item.title} 
        amount={itemData.item.sum} product={itemData.item}/>} />
        </View>
    </View>
    )
}


const styles = StyleSheet.create({
    screen:{
        margin:20,

    },
    amount:{
        color:Colors.primaryColor
    },
    summary:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between",
        marginBottom:20,
        padding:15,
        shadowColor:"black",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.3,
        borderRadius:5,
        elevation:5,
        shadowRadius:10,

    },
    summaryText:{
        fontSize:18
    }
})

const mapStateToProps = (state)=>{
    return {totalAmount : state.cart.totalAmount,cartItems:state.cart.items}
}


export default connect(mapStateToProps)(CartScreen)