import React,{useLayoutEffect,useEffect,useState} from "react"
import {View,Text,FlatList,StyleSheet,Button,ActivityIndicator, RefreshControl}  from "react-native"
import {connect} from"react-redux"
import ProductItem from "../../Components/shop/ProductItem"
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import IconheaderButton from "../../Components/UI/IconHeaderButton"
import Colors from "../../settings/Colors"
import { addToCart } from "../../store/actions/cart"
import { fetchProducts } from "../../store/actions/product"

const ProductOverviewScreen = (props)=>{

    const [isLoading,setIsLoading] = useState(true)
    const [refresh,setRefresh] = useState()
    const fetched = ()=>{
        setIsLoading(false)
        console.log("fetched")
    }
    useEffect(()=>{
        props.fetchProducts(fetched)
    },[props.fetchProducts,refresh])

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

    if(isLoading){
        return (
            <View style={styles.screen}>
                <ActivityIndicator size="large" color={Colors.primaryColor}/>
            </View>
        )
    }
    if(!isLoading && props.products.length==0){
        return (
            <View style={styles.errorScreen}>
            <Text>No products found! Start by adding some</Text>
             </View>
        )
    }
    return (
    <View style={styles.screen}>
        <FlatList data={props.products} renderItem={itemData=><ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price} 
            onSelect={()=>props.navigation.navigate('ProductDetailScreen',{productId:itemData.item.id,productTitle:itemData.item.title})}
            ><Button title="View Details" color={Colors.primaryColor} onPress={()=>props.navigation.navigate('ProductDetailScreen',{productId:itemData.item.id,productTitle:itemData.item.title})}/>
            <Button title="To Cart" color={Colors.primaryColor} onPress={()=>props.toCart(itemData.item)}/></ProductItem>} />
    </View>)
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
    },
    errorScreen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

const  mapStateToProps=(state)=>{
  return {
      products:state.product.availableProducts
  }
}
const mapDispatchToprops = (dispatch) =>{
    return {
        toCart : (id)=>dispatch(addToCart(id)),
        fetchProducts : (fetched)=>dispatch(fetchProducts(fetched))
    }
}
export default connect(mapStateToProps,mapDispatchToprops)(ProductOverviewScreen)