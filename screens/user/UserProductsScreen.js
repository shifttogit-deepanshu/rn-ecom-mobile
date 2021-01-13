import React,{useLayoutEffect} from "react"
import {FlatList,Button} from "react-native"
import ProductItem from "../../Components/shop/ProductItem"
import {connect} from "react-redux"
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import IconheaderButton from "../../Components/UI/IconHeaderButton"
import Colors from "../../settings/Colors"
import {deleteProduct} from "../../store/actions/product"


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
            <Button title="Edit" onPress={()=>{props.navigation.navigate("Edit Item")}} color={Colors.primaryColor}/>
            <Button title="Delete" onPress={()=>{props.deleteProduct(itemData.item.id)}} color={Colors.primaryColor}/>
        
        </ProductItem>}/>
    )
}

const mapStateToProps = (state)=>(
    {
        userProducts : state.product.userProducts
    }
)

const mapDispatchToProps = (dispatch)=>({
    deleteProduct : (id)=>dispatch(deleteProduct(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(UserProductScreen)