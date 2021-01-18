import React,{useLayoutEffect} from "react"
import {FlatList,Button} from "react-native"
import ProductItem from "../../Components/shop/ProductItem"
import {connect} from "react-redux"
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import IconheaderButton from "../../Components/UI/IconHeaderButton"
import Colors from "../../settings/Colors"
import {deleteProduct} from "../../store/actions/product"
import {database} from "../../firebase/firebaseConfig"

const UserProductScreen = (props)=>{

    useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerLeft:()=>(
                <HeaderButtons HeaderButtonComponent={IconheaderButton} >
                    <Item title="menu" iconName="ios-menu" onPress={()=>{props.navigation.toggleDrawer()}} />
                </HeaderButtons>
            ),
            headerRight:()=>(
                <HeaderButtons HeaderButtonComponent={IconheaderButton} >
                    <Item title="create" iconName="ios-create" onPress={()=>{props.navigation.navigate("Edit Item",{productId:0})}} />
                </HeaderButtons>
            )
        })
    })
    const deleteProduct=(id)=>{
        const setId = "-" + id
        database.ref('/products/' + setId).remove()
    }
    return (
        <FlatList data={props.userProducts} renderItem={itemData=><ProductItem title={itemData.item.title} image={itemData.item.imageUrl} price={itemData.item.price}
        onSelect={()=>{props.navigation.navigate("Edit Item",{productId:itemData.item.id})}}>
            <Button title="Edit" onPress={()=>{props.navigation.navigate("Edit Item",{productId:itemData.item.id})}} color={Colors.primaryColor}/>
            <Button title="Delete" onPress={()=>deleteProduct(itemData.item.id)} color={Colors.primaryColor}/>
        
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