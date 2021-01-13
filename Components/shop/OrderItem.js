import React,{useState} from "react"
import {View,StyleSheet,Text,Button} from "react-native"
import Colors from "../../settings/Colors"
import CartItem from "./CartItem"

const OrderItem = (props)=>{
    const [showDetails,setShowDetails] = useState(false)
    const transformedcartitems = []
    for(const key in props.items)
    transformedcartitems.push({
        id:key,
        quantity:props.items[key].quantity,
        title:props.items[key].productTitle,
        amount:props.items[key].sum
    })
    return (
        <View style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <View style={styles.viewDetails}>
                <Button title="View Details" color={Colors.primaryColor} onPress={()=>setShowDetails(prevState=>!prevState)}/>
            </View>
            {showDetails && transformedcartitems.map(item=><CartItem key={item.id} quantity={item.quantity} amount={item.amount} title={item.title}/>)}
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