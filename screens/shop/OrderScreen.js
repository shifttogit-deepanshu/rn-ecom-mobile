import React from "react"
import {View,Text,FlatList} from "react-native"
import {connect} from 'react-redux'

const OrderScreen = (props)=>{
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