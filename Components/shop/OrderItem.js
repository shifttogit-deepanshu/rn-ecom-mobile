import React from "react"
import {View,StyleSheet,Text,Button} from "react-native"

const OrderItem = (props)=>{
    return (
        <View>
            <View>
                <Text>${props.price.toFixed(2)}</Text>
                <Text>{props.date}</Text>
            </View>
                <Button title="View Details"/>
        </View>
    )
}



const styles = StyleSheet.create({
    
})

export default OrderItem