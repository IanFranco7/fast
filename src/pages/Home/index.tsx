import { ProductsList } from "./components/ProductsList"
import { HomeContainer,ProductsContainer,} from "./styles"
import { Filters } from "./components/Filters"

export function Home(){

    return(
        <HomeContainer>
            <h1>Produtos da nossa loja</h1>
           <Filters/>
            <ProductsContainer>
                <ProductsList/>
            </ProductsContainer>
        </HomeContainer>
    )
}