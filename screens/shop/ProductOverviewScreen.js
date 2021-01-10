import React from "react"
import {View,FlatList,StyleSheet}  from "react-native"
import {connect} from"react-redux"
import ProductItem from "../../Components/shop/ProductItem"

const ProductOverviewScreen = (props)=>{
    return (
    <View style={styles.screen}>
        <FlatList data={props.products} renderItem={itemData=><ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            navigation={props.navigation}
            productId={itemData.item.id}            
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