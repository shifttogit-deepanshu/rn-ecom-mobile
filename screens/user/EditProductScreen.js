import React,{useLayoutEffect,useState,useReducer} from "react"
import {View,ScrollView,Text,TextInput,StyleSheet} from "react-native"
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import IconheaderButton from "../../Components/UI/IconHeaderButton"
import {connect} from "react-redux"
import {updateProduct} from "../../store/actions/product"
import {createProduct} from "../../store/actions/product"

const EditProductScreen = (props)=>{
    const prodId = props.route.params.productId
    let product
        
    if(prodId!=0){
        product = props.products.find(product=>product.id==prodId)
    }

    const UPDATE_FORM_INPUT = "UPDATE_FORM_INOUT"

    const inputReducer = (state,action)=>{
        if(action.type==UPDATE_FORM_INPUT){
            const updateInputValue = {

            }
            return {

            }
        }
        return state
    }

    const [inputState,dispatchInput] = useReducer(inputReducer,{
        InputValues:{
            title:prodId?product.title:'',
            imageUrl:prodId?product.imageUrl:'',
            price:prodId?parseInt(product.price,10).toString():'',
            description:prodId?product.description:'',
            
        },
        inputValidities:{
            title:prodId?true:false,
            imageUrl:prodId?true:false,
            price:prodId?true:false,
            description:prodId?true:false
        },
        formIsValid:prodId?true:false
    })
    
    const onInputChange = (fieldValue,inputIdentifier)=>{
        let isvalid=true
        if(fieldValue.length==0){
            isValid=false
        }

        dispatchInput({type:UPDATE_FORM_INPUT,fieldValue,isvalid,inputIdentifier})
    }
        // const [title,setTitle] = useState(prodId?product.title:'')
        // const [imageUrl,setImageUrl] = useState(prodId?product.imageUrl:'')
        // const [price,setPrice] = useState(prodId?parseInt(product.price,10).toString():'')
        // const [description,setDescription] = useState(prodId?product.description:'')
        // const [titleIsValid,setTitleIsValid] = useState(false)
        
    useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerRight:()=>(
                <HeaderButtons HeaderButtonComponent={IconheaderButton} >
                    <Item title={prodId==0?"Add":"Edit"} 
                    onPress={()=>{prodId==0?props.createItem(title,imageUrl,description,price):props.updateItem(prodId,title,imageUrl,description,price)} } 
                    />
                </HeaderButtons>
            ),
        })
    })




    const titlevalidationHandler = (text)=>{
        if(text.trim().length==0){
            setTitleIsValid(false)
        }
        else{
            setTitleIsValid(true)
        }
        setTitle(text)
    }
    return (
        <ScrollView>
        <View style={styles.form}>
        <View style={styles.formControl}>
        <Text style={styles.label}>title{prodId}</Text>
        <TextInput style={styles.input} value={title} onChangeText={text=>titlevalidationHandler(text)} autoCapitalize="sentences"/>
        {!titleIsValid && <Text>Please Enter a valid title</Text>}
        </View>
        <View style={styles.formControl}>
        <Text style={styles.label}>Image Url</Text>
        <TextInput style={styles.input} value={imageUrl} onChangeText={text=>setImageUrl(text)} />
        </View>
        <View style={styles.formControl}>
        <Text style={styles.label}>Price</Text>
        <TextInput style={styles.input} value={price} onChangeText={text=>setPrice(text)} keyboardType='decimal-pad'/>
        </View>
        <View style={styles.formControl}>
        <Text style={styles.label}>Description</Text>
        <TextInput style={styles.input} value={description} onChangeText={text=>setDescription(text)}/>
        </View>             
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form:{
        margin:20
    },
    formControl:{
        width:"100%"
    },
    label:{
        marginVertical:8
    },
    input:{
        paddingHorizontal:2,
        paddingVertical:5,
        borderBottomColor:"#ccc",
        borderBottomWidth:2
    }
})

const mapStateToProps = (state)=>{
    return {
        products : state.product.userProducts
    }
}

const mapDispatchToProps = (dispatch)=>(
    {
        updateItem :(prodId,title,imageUrl,description,price)=> dispatch(updateProduct(prodId,title,imageUrl,description,price)),
        createItem :(title,imageUrl,description,price)=>dispatch(createProduct(title,imageUrl,description,price))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(EditProductScreen)