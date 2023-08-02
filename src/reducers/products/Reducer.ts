import { Product } from "../../context/ProductsContext";
import { ActionTypes, ProductAction } from "./Actions";




export function productReducer(state: Product[], action: any){
        console.log(state)
        console.log(action)
        switch(action.type){
            case ActionTypes.CREATE_NEW_PRODUCT:
                return [...state, action.payload.product]
            case ActionTypes.REMOVE_PRODUCT_IN_CART:
                return state.map((product) =>
                product.id === action.payload.productId ? { ...product, isInCart: false } : product
                );
            case ActionTypes.ADD_PRODUCT_IN_CART:
                return state.map((product) =>
                product.id === action.payload.productId ? { ...product, isInCart: true } : product
                );
            case ActionTypes.CHANGE_PRODUCT_QUANTITY:
                return state.map((product) =>
                product.id === action.payload.productId ? {...product, selectedQuantity: action.payload.quantity} : product)
            case ActionTypes.UPDATE_PRODUCTS:
                return state.map((product) =>{ 
                    const updatedQuantity = (product.totalQuantity ?? 0) - (product.selectedQuantity ?? 0);
                    return product.isInCart ? {...product, totalQuantity: updatedQuantity, isInCart: false} : product
                    })
            default: 
                return state
        }
}