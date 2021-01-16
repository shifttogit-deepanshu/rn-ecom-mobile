export const DELETE_PRODUCT = "DELETE_PRODUCT"
export const CREATE_PRODUCT = "CREATE_PRODUCT"
export const UPDATE_PRODUCT = "UPDATE_PRODUCT"
export const SET_PRODUCTS = "SET_PRODUCTS"
import Product from "../../models/product"
import {database} from "../../firebase/firebaseConfig"


export const fetchProducts = ()=>{
    return (dispatch)=>{
        database.ref('/products').once('value').then(snapshot=>{
            const values = snapshot.val()
            const fetchedValues = []
            for(const key in values){
                const fetchedProduct = new Product(key.substr(1),values[key].ownerId,values[key].title,values[key].imageUrl,values[key].description,values[key].price)
                fetchedValues.push(fetchedProduct)
            }
            dispatch({type:SET_PRODUCTS,productsFetched:fetchedValues})
        })
    }
}

export const deleteProduct = (id)=>{
    return {
        type:DELETE_PRODUCT,
        id:id
    }
}

export const createProduct = (id,ownerId,title,imageUrl,description,price)=>(

        {type:CREATE_PRODUCT,productData:{
            id:id,
            ownerId:ownerId,
            title:title,
            imageUrl:imageUrl,
            description:description,
            price:price
        }}
)

export const addProduct = (ownerId,title,imageUrl,description,price)=>{
    return (dispatch)=>{
        const messageRef = database.ref('/products').push()
        messageRef.set({
            ownerId:ownerId,
            title:title,
            imageUrl:imageUrl,
            description:description,
            price:price
        }).then(()=>{
            const id = messageRef.key.substring(1)

            dispatch(createProduct(id,ownerId,title,imageUrl,description,price))
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