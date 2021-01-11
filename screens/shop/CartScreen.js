import React from "react"
import {View,Text,Button} from "react-native"

const CartScreen = ()=>(
    <View>
        <View>
        <Text>Total:<Text>${99.9}</Text></Text>
        <Button title="Order Now"/>
        </View>
        <View>
        <Text>Cart Items</Text></View>
    </View>
)


const styles = StyleSheet.create({
    screen:{

    },
    amount:{

    },
    summary:{

    },
    summaryText:{
        
    }
})
export default CartScreen