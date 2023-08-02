import { Product } from "../../context/ProductsContext";

export enum ActionTypes{
    CREATE_NEW_PRODUCT = "CREATE_NEW_PRODUCT",
    REMOVE_PRODUCT_IN_CART = "REMOVE_PRODUCT_IN_CART",
    ADD_PRODUCT_IN_CART = "ADD_PRODUCT_IN_CART",
    CHANGE_PRODUCT_QUANTITY = "CHANGE_PRODUCT_QUANTITY",
    UPDATE_PRODUCTS = "UPDATE_PRODUCTS",
}

export type ProductAction =
  | { type: ActionTypes.CREATE_NEW_PRODUCT; payload: { product: Product } }
  | { type: ActionTypes.ADD_PRODUCT_IN_CART; payload: { productId: string } }
  | { type: ActionTypes.REMOVE_PRODUCT_IN_CART; payload: { productId: string } }
  | {type: ActionTypes.CHANGE_PRODUCT_QUANTITY; payload: { quantity: number; productId: string };}
  | { type: ActionTypes.UPDATE_PRODUCTS };

  export type ProductActionTypes = {
    type: ActionTypes,
    payload?: string | number
  }

export function createNewProductAction(product: Product){
    return{
        type: ActionTypes.CREATE_NEW_PRODUCT,
            payload: {
                product
            }
    }
}

export function addProductInCartAction(productId: string){
    return{
        type: ActionTypes.ADD_PRODUCT_IN_CART,
            payload:{
              productId
            }
    }
}

export function removeProductInCartAction(productId: string){
    return{
        type: ActionTypes.REMOVE_PRODUCT_IN_CART,
        payload:{
          productId
        }
    }
}
export function changeProductQuantityAction(e: React.ChangeEvent<HTMLInputElement>, product: Product){
    return{
        type: ActionTypes.CHANGE_PRODUCT_QUANTITY,
                payload: {
                    quantity: Number(e.target.value),
                    productId: product.id
                }
    }
}

export function updateProductsAction(){
    return{
        type: ActionTypes.UPDATE_PRODUCTS
    }
}