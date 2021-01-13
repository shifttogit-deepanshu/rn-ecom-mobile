import React,{useLayoutEffect} from "react"
import {FlatList,Button} from "react-native"
import ProductItem from "../../Components/shop/ProductItem"
import {connect} from "react-redux"
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import IconheaderButton from "../../Components/UI/IconHeaderButton"
import Colors from "../../settings/Colors"


const UserProductScreen = (props)=>{
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
        <FlatList data={props.userProducts} renderItem={itemData=><ProductItem title={itemData.item.title} image={itemData.item.imageUrl} price={itemData.item.price}
        onSelect={()=>console.log("selected from admin")}>
            <Button title="Edit" onPress={()=>{}} color={Colors.primaryColor}/>
            <Button title="Delete" onPress={()=>{}} color={Colors.primaryColor}/>
        
        </ProductItem>}/>
    )
}

const mapStateToProps = (state)=>(
    {
        userProducts : state.product.userProducts
    }
)

export default connect(mapStateToProps)(UserProductScreen)