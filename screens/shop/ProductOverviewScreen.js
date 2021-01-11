import React,{useLayoutEffect} from "react"
import {View,FlatList,StyleSheet}  from "react-native"
import {connect} from"react-redux"
import ProductItem from "../../Components/shop/ProductItem"
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
  import IconheaderButton from "../../Components/UI/IconHeaderButton"
  

const ProductOverviewScreen = (props)=>{

    useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerRight:()=>(
                <HeaderButtons HeaderButtonComponent={IconheaderButton} >
                    <Item title="cart" iconName="ios-cart" onPress={()=>{props.navigation.navigate('Cart')}} />
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
            navigation={props.navigation}
            productId={itemData.item.id}    
            product={itemData.item}   
            >{itemData.item.title}</ProductItem>} />
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

export default connect(mapStateToProps)(ProductOverviewScreen)