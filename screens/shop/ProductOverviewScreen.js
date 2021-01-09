import React from "react"
import {View,Text,FlatList,StyleSheet}  from "react-native"
import {connect} from"react-redux"

const ProductOverviewScreen = (props)=>{
    return (
    <View style={styles.screen}>
        <FlatList data={props.products} renderItem={itemData=><Text>{itemData.item.title}</Text>} />
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