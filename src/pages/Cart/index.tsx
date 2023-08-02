import { useProductsContext } from "../../hooks/useProductsContext"
import { CheckoutContainer,  TableContainer, CheckoutProduct, ProductImage, BuyProductsDiv, BuyProductsContainer, BuyButton, TableTh, TableTd, NoProductsDiv } from "./styles"
import { Product } from "../../context/ProductsContext"
import { useState, useEffect } from "react"
import { ActionTypes, changeProductQuantityAction, updateProductsAction } from "../../reducers/products/Actions"
import { NavLink } from "react-router-dom"


export function ChartPage(){
    const [total, setTotal] = useState(0)

    const {products, dispatch, setActiveFilter} = useProductsContext()
/*PORRA VOU COMEÇAR A MUDAR PEGA A VISAO EM*/
    const cartProducts = products.filter((product) => product.isInCart)

     function updateProducts(){
         dispatch(updateProductsAction())
    }

    function ChangeProductQuantity(e: React.ChangeEvent<HTMLInputElement>, product: Product){
        dispatch(changeProductQuantityAction(e, product))
    }
    
    useEffect(() => {
        const calculateSubtotal = () => {
            return cartProducts.reduce((total, product) => {
                return total + ((product.selectedQuantity ?? 1) * (product.price ?? 0));
            }, 0);
        };
        const subtotalValue = calculateSubtotal();
        setTotal(subtotalValue)

    }, [cartProducts])
  
    return(    
        <CheckoutContainer>
            <h1>Checkout</h1>
            
            <div>
               {cartProducts.length > 0 ? 
                <TableContainer>
                    <table>
                        <thead>
                            <tr>
                                <TableTh>Produto</TableTh>
                                <TableTh>Preço</TableTh>
                                <TableTh>Quantidade</TableTh>
                                <TableTh>Subtotal</TableTh>
                            </tr>
                        </thead>
                        <tbody>
                            {cartProducts.map((product) => (
                                <tr key={product.id}>
                                    <TableTd><ProductImage src={product.url}/><span>{product.nameProduct}</span></TableTd>
                                    <TableTd>R${product.price},00</TableTd>
                                    <TableTd>
                                        <input type="number" max={product.totalQuantity} min={1} defaultValue={1} onChange={(e) => ChangeProductQuantity(e, product)} value={product.selectedQuantity} />
                                    </TableTd>
                                    <TableTd>R${(product.selectedQuantity ?? 1) * (product.price ?? 0)},00</TableTd>
                                </tr>
                                
                            ))}
                        </tbody>
                    </table>
                </TableContainer>
                : <NoProductsDiv>
                    <span>Você não tem nenhum produto no carrinho</span>
                    <NavLink to="/"><button>Adicionar produto</button></NavLink>
                </NoProductsDiv>}
            </div>

            {cartProducts.length > 0 &&<BuyProductsContainer>
                <BuyProductsDiv>
                    <h3>Total do Carrinho</h3>
                    <table>
                        <tr>
                            <td>SubTotal</td>
                            <td>R${total},00</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>R${total},00</td>
                        </tr>
                    </table>
                    <BuyButton onClick={updateProducts}>Comprar Produtos</BuyButton>
                </BuyProductsDiv>
            </BuyProductsContainer>
            }
        </CheckoutContainer>
        )
}