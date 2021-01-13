import React from "react"
import {View,Text,StyleSheet} from "react-native"

const EditProductScreen = (props)=>{
    const id = props.route.params.productId
    return (
        <View><Text>Edit product Screen{id}</Text></View>
    )
}

const styles = StyleSheet.create({

})

export default EditProductScreen