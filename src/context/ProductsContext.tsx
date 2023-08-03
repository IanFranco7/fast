import { ReactNode, createContext, useState, useReducer} from "react";
import { initialProducts } from "../data/ProductsData";
import { productReducer } from "../reducers/products/Reducer";


interface ProductsContextProviderProps{
    children: ReactNode
}

interface ProductsContextType{  
    products: Product[]
    dispatch: any
    activeFilter: string | number
    setActiveFilter: React.Dispatch<React.SetStateAction<string | number>>
    activeFilterType: string
    ChangeFilterType(typeFilter: string): void
}
export interface Product{
    id: string
    nameProduct: string | undefined
    price: number | undefined
    totalQuantity: number | undefined
    selectedQuantity: number | undefined
    category: string | undefined
    isInCart: boolean
    url?: string
}



export const ProductsContext = createContext({} as ProductsContextType);
export function ProductsContextProvider({children}: ProductsContextProviderProps){

    const [products, dispatch] = useReducer(productReducer, initialProducts)
    const [activeFilter, setActiveFilter] = useState<string | number>('')
    const [activeFilterType, setActiveFilterType] = useState('')

    function ChangeFilterType(typeFilter: string){
        setActiveFilterType(typeFilter)
    }

    return(
        <ProductsContext.Provider value={{products, dispatch, activeFilter, setActiveFilter, activeFilterType, ChangeFilterType}}>
            {children}
        </ProductsContext.Provider>
    )
}

