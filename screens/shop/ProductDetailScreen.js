import React from "react"
import {View,ScrollView,Text,Button,Image,StyleSheet}  from "react-native"
import {connect} from"react-redux"

const ProductDetailScreen = (props)=>{
    
    const productId = props.route.params.productId
    const title = props.route.params.productTitle


    const product = props.products.find((product)=>product.id===productId)


    return (
    <ScrollView>
        <Image style={styles.images} source={{uri:product.imageUrl}}/>
        <Button title="Add To Cart"/>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    image:{
        height:"100%",
        width:"100%"
    },
    
})

const  mapStateToProps=(state)=>{
  return {
      products:state.product.availableProducts
  }
}

export default connect(mapStateToProps)(ProductDetailScreen)