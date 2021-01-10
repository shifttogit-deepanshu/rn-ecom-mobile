import React from "react"
import {View,ScrollView,Text,Button,Image,StyleSheet}  from "react-native"
import {connect} from"react-redux"

const ProductDetailScreen = (props)=>{
    
    const productId = props.route.params.productId
    const title = props.route.params.productTitle


    const product = props.products.find((product)=>product.id===productId)


    return (
    <View style={styles.screen}>
    <Text>Product Detail Screen {product.title}</Text>
    </View>)
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
    }
})

const  mapStateToProps=(state)=>{
  return {
      products:state.product.availableProducts
  }
}

export default connect(mapStateToProps)(ProductDetailScreen)