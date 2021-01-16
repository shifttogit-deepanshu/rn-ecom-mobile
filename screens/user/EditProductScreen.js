import React,{useLayoutEffect,useReducer} from "react"
import {View,ScrollView,Text,TextInput,StyleSheet,Alert,Button} from "react-native"
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import IconheaderButton from "../../Components/UI/IconHeaderButton"
import {connect} from "react-redux"
import {updateProduct} from "../../store/actions/product"
import {addProduct} from "../../store/actions/product"
import Input from "../../Components/UI/Input"

const EditProductScreen = (props)=>{
    const prodId = props.route.params.productId
    let product
        
    if(prodId!=0){
        product = props.products.find(product=>product.id==prodId)
    }

    const UPDATE_FORM_INPUT = "UPDATE_FORM_INOUT"

    const inputReducer = (state,action)=>{
        if(action.type==UPDATE_FORM_INPUT){
            const updateInputValues = {
                ...state.inputValues,
                [action.inputIdentifier]:action.fieldValue
            }
            const updateInputValidaties = {
                ...state.inputValidities,
                [action.inputIdentifier]:action.isValid
            }
            let updateFormIsvalid = true
            for (const key in updateInputValidaties){
                updateFormIsvalid = updateFormIsvalid && updateInputValidaties[key]
            }
            return {
                inputValues:updateInputValues,
                inputValidities:updateInputValidaties,
                formIsValid:updateFormIsvalid
            }
        }
        else {
        return state
        }
    }

    const [inputState,dispatchInput] = useReducer(inputReducer,{
        inputValues:{
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
        let isValid=true
        if(fieldValue.length==0){
            isValid=false
        }

        dispatchInput({type:UPDATE_FORM_INPUT,fieldValue,isValid,inputIdentifier})
    }
        // const [title,setTitle] = useState(prodId?product.title:'')
        // const [imageUrl,setImageUrl] = useState(prodId?product.imageUrl:'')
        // const [price,setPrice] = useState(prodId?parseInt(product.price,10).toString():'')
        // const [description,setDescription] = useState(prodId?product.description:'')
        // const [titleIsValid,setTitleIsValid] = useState(false)
    
    const onAddEdit = ()=>{
        if(!inputState.formIsValid){
            Alert.alert("Invalid Input","One or more input iis invalid!",[{text:"confirm"}])
            return 
        }
        prodId==0?props.createItem('u2',inputState.inputValues.title,inputState.inputValues.imageUrl,inputState.inputValues.description,inputState.inputValues.price):
        props.updateItem(prodId,inputState.inputValues.title,inputState.inputValues.imageUrl,inputState.inputValues.description,inputState.inputValues.price)
        props.navigation.goBack()
        
    }
    useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerRight:()=>(
                <HeaderButtons HeaderButtonComponent={IconheaderButton} >
                    <Item title={prodId==0?"Add":"Edit"} 
                    onPress={()=>onAddEdit()} 
                    />
                </HeaderButtons>
            ),
        })
    })




    // const titlevalidationHandler = (text)=>{
    //     if(text.trim().length==0){
    //         setTitleIsValid(false)
    //     }
    //     else{
    //         setTitleIsValid(true)
    //     }
    //     setTitle(text)
    // }
    return (
        <ScrollView>
        <View style={styles.form}>
        <Input value={inputState.inputValues.title} onChangeText={text=>onInputChange(text,"title")} autoCapitalize="sentences" label="title" hasError={!inputState.inputValidities.title}/>
        <Input value={inputState.inputValues.imageUrl} onChangeText={text=>onInputChange(text,"imageUrl")} autoCapitalize="sentences" label="image Url" hasError={!inputState.inputValidities.imageUrl}/>
        <Input value={inputState.inputValues.price} onChangeText={text=>onInputChange(text,"price")} autoCapitalize="sentences" keyboardType='decimal-pad' label="price" hasError={!inputState.inputValidities.price}/>
        <Input value={inputState.inputValues.description} onChangeText={text=>onInputChange(text,"description")} autoCapitalize="sentences" label="description" multiline numberOfLines={3} hasError={!inputState.inputValidities.description}/>       
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form:{
        margin:20
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
        createItem :(ownerId,title,imageUrl,description,price)=>dispatch(addProduct(ownerId,title,imageUrl,description,price))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(EditProductScreen)