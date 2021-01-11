import React from "react"
import {View,ScrollView,Text,Button,Image,StyleSheet}  from "react-native"
import Colors  from "../../settings/Colors"
import {connect} from"react-redux"

const ProductDetailScreen = (props)=>{
    
    const productId = props.route.params.productId
    const title = props.route.params.productTitle


    const product = props.products.find((product)=>product.id===productId)


    return (
    <ScrollView>
        <Image style={styles.images} source={{uri:product.imageUrl}}/>
        <Button color={Colors.primaryColor} title="Add To Cart"/>
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
    price:{
        fontSize:20,
        color:'#888',
        textAlign:"center",
        marginVertical:20
    },
    description:{
        fontSize:15,
        color:'#000000',
        textAlign:"center",
        marginVertical:20
    },


})

const  mapStateToProps=(state)=>{
  return {
      products:state.product.availableProducts
  }
}

export default connect(mapStateToProps)(ProductDetailScreen)