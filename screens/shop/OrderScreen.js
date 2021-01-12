import React,{useLayoutEffect} from "react"
import {View,Text,FlatList} from "react-native"
import {connect} from 'react-redux'
import ProductItem from "../../Components/shop/ProductItem"
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import IconheaderButton from "../../Components/UI/IconHeaderButton"

const OrderScreen = (props)=>{
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

        <FlatList data={props.orders} renderItem={itemData=><Text>{itemData.item.id}</Text>}/>
    )
}

const mapStateToProps = (state)=>{
    return {
        orders : state.orders
    }
}   


export default connect(mapStateToProps)(OrderScreen)