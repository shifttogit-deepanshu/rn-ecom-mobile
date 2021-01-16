export const DELETE_PRODUCT = "DELETE_PRODUCT"
export const CREATE_PRODUCT = "CREATE_PRODUCT"
export const UPDATE_PRODUCT = "UPDATE_PRODUCT"
export const SET_PRODUCTS = "SET_PRODUCTS"
import {database} from "../../firebase/firebaseConfig"


export const fetchProducts = ()=>{
    return (dispatch)=>{
        database.ref('/products').on('value',snapshot=>{
            const values = snapshot.val()
            for(const key in values){
                dispatch({type:SET_PRODUCTS,prodId:key.substr(1),fetchedProduct:values[key]})
                console.log({prodId:key.substr(1),prod:values[key]})
            }
        })
    }
}

export const deleteProduct = (id)=>{
    return {
        type:DELETE_PRODUCT,
        id:id
    }
}

export const createProduct = (id,title,imageUrl,description,price)=>(

        {type:CREATE_PRODUCT,productData:{
            id:id,
            title:title,
            imageUrl:imageUrl,
            description:description,
            price:price
        }}
)

export const addProduct = (title,imageUrl,description,price)=>{
    return (dispatch)=>{
        const messageRef = database.ref('/products').push()
        messageRef.set({
            title:title,
            imageUrl:imageUrl,
            description:description,
            price:price
        }).then(()=>{
            const id = messageRef.key.substring(1)

            dispatch(createProduct(id,title,imageUrl,description,price))
        })
    }
}

export const updateProduct = (id,title,imageUrl,description,price)=>(

        {type:UPDATE_PRODUCT,
            pid:id,
            productData:{
            title:title,
            imageUrl:imageUrl,
            description:description,
            price:price
        },
    }
    
)