export const DELETE_PRODUCT = "DELETE_PRODUCT"
export const CREATE_PRODUCT = "CREATE_PRODUCT"
export const UPDATE_PRODUCT = "UPDATE_PRODUCT"


export const deleteProduct = (id)=>{
    return {
        type:DELETE_PRODUCT,
        id:id
    }
}

export const createProduct = ({title,imageUrl,description,price})=>(

        {type:CREATE_PRODUCT,productData:{
            title:title,
            imageUrl:imageUrl,
            description:description,
            price:price
        }}
)

export const updateProduct = ({id,title,imageUrl,description,price})=>(

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