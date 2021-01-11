import React from "react"
import {View,Text,Button,StyleSheet} from "react-native"
import Colors from "../../settings/Colors"
import {connect} from "react-redux"

const CartScreen = (props)=>(
    <View style={styles.screen}>
        <View style={styles.summary}>
        <Text style={styles.summaryText}>Total: <Text style={styles.amount}>${props.totalAmount}</Text></Text>
        <Button title="Order Now"/>
        </View>
        <View>
        <Text>Cart Items</Text></View>
    </View>
)


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
    return {totalAmount : state.cart.totalAmount}
}
export default connect(mapStateToProps)(CartScreen)