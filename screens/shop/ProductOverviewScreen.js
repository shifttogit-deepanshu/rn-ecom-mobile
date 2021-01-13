import React,{useLayoutEffect} from "react"
import {View,FlatList,StyleSheet,Button}  from "react-native"
import {connect} from"react-redux"
import ProductItem from "../../Components/shop/ProductItem"
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import IconheaderButton from "../../Components/UI/IconHeaderButton"
import Colors from "../../settings/Colors"
import { addToCart } from "../../store/actions/cart"

const ProductOverviewScreen = (props)=>{

    useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerRight:()=>(
                <HeaderButtons HeaderButtonComponent={IconheaderButton} >
                    <Item title="cart" iconName="ios-cart" onPress={()=>{props.navigation.navigate('Cart')}} />
                </HeaderButtons>
            ),
            headerLeft:()=>(
                <HeaderButtons HeaderButtonComponent={IconheaderButton} >
                    <Item title="menu" iconName="ios-menu" onPress={()=>{props.navigation.toggleDrawer()}} />
                </HeaderButtons>
            )
        })
    })
    return (
    <View style={styles.screen}>
        <FlatList data={props.products} renderItem={itemData=><ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price} 
            onSelect={()=>props.navigation.navigate('ProductDetailScreen',{productId:itemData.item.productId,productTitle:itemData.item.productTitle})}
            ><Button title="View Details" color={Colors.primaryColor} onPress={()=>props.navigation.navigate('ProductDetailScreen',{productId:itemData.item.id,productTitle:itemData.item.title})}/>
            <Button title="To Cart" color={Colors.primaryColor} onPress={()=>props.toCart(itemData.item)}/></ProductItem>} />
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
const mapDispatchToprops = (dispatch) =>{
    return {
        toCart : (id)=>dispatch(addToCart(id))
    }
}
export default connect(mapStateToProps,mapDispatchToprops)(ProductOverviewScreen)