import {useContext} from 'react'
import { ProductsContext } from '../context/ProductsContext'

export function useProductsContext(){
    const context = useContext(ProductsContext)

    return context
}