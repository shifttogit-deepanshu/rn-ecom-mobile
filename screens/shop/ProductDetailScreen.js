import React,{useLayoutEffect} from "react"
import {View,ScrollView,Text,Button,Image,StyleSheet}  from "react-native"
import Colors  from "../../settings/Colors"
import {connect} from"react-redux"
import { addToCart } from "../../store/actions/cart"
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import IconheaderButton from "../../Components/UI/IconHeaderButton"

const ProductDetailScreen = (props)=>{
    useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerRight:()=>(
                <HeaderButtons HeaderButtonComponent={IconheaderButton} >
                    <Item title="cart" iconName="ios-cart" onPress={()=>{props.navigation.navigate('Cart')}} />
                </HeaderButtons>
            ),
        })
    })
    
    const productId = props.route.params.productId
    const title = props.route.params.productTitle


    const product = props.products.find((product)=>product.id===productId)


    return (
    <ScrollView>
        <Image style={styles.images} source={{uri:product.imageUrl}}/>
        <Button color={Colors.primaryColor} title="Add To Cart" onPress={()=>props.toCart(product)}/>
        <Text style={styles.price}>${parseInt(product.price,10).toFixed(2)}</Text>
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

const mapDispatchToprops = (dispatch) =>{
    return {
        toCart : (id)=>dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(ProductDetailScreen)