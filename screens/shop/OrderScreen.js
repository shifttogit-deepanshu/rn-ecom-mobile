import React,{useLayoutEffect} from "react"
import {View,Text,FlatList} from "react-native"
import {connect} from 'react-redux'
import ProductItem from "../../Components/shop/ProductItem"
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import IconheaderButton from "../../Components/UI/IconHeaderButton"
import OrderItem from "../../Components/shop/OrderItem"

const OrderScreen = (props)=>{
    // console.log(props.orders.orders)
    useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerLeft:()=>(
                <HeaderButtons HeaderButtonComponent={IconheaderButton} >
                <Item title="menu" iconName="ios-menu" onPress={()=>{props.navigation.toggleDrawer()}} />
                </HeaderButtons>
            )
        })
    })
    return (
        
        <FlatList data={props.orders.orders} renderItem={itemData=><OrderItem price={itemData.item.totalAmount} date={itemData.item.getReadableDate()} 
        
        items={itemData.item.items} />}/>
    )
}

const mapStateToProps = (state)=>{
    return {
        orders : state.orders
    }
}   


export default connect(mapStateToProps)(OrderScreen)