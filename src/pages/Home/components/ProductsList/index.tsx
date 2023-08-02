
import { CartButton, ProductItem, ProductListContainer, BuyButton, ProductName, ProductPrice, ProductQuantity } from "./styles"
import { useProductsContext } from "../../../../hooks/useProductsContext"
import { addProductInCartAction, removeProductInCartAction } from "../../../../reducers/products/Actions"


export function ProductsList(){

    const {dispatch, products, activeFilter, activeFilterType} = useProductsContext()
    
    function handleAddCart(productId: string){
          /*setProducts((prevProducts) => 
          (prevProducts.map((p) =>
          product.id === p.id ? {...p, isInCart: true} : p
          )))*/
          dispatch(addProductInCartAction(productId))
    }
    console.log(products)
    function handleRemoveCart(productId: string){
      dispatch(removeProductInCartAction(productId))
        /*setProducts((prevProducts) =>(
            prevProducts.map((p) =>
            p.id === product.id ? {...p, isInCart: false} : p)
        ))*/
    }

    const filteredProducts = products.filter((product) => {
        if (activeFilterType === "category") {
          return activeFilter ? product.category === activeFilter : product
        } else if (activeFilterType === "price") {
          return product.price !== undefined && product.price > Number(activeFilter)
        } else if (activeFilterType === "quantity") {
          return product.totalQuantity !== undefined && product.totalQuantity > Number(activeFilter)
        }
        return true; // Caso nenhum filtro esteja ativo, retorna todos os produtos
      });
    


    return(
        <ProductListContainer>
            {filteredProducts.length > 0 ? filteredProducts.map((product) => {
            return(
                <ProductItem key={product.id}>
                  {product.url && <img src={product.url} alt="" />}
                    <ProductName>{product.nameProduct}</ProductName>
                    <ProductPrice>R${product.price},00</ProductPrice>

                   {product.isInCart ? (<CartButton onClick={() => handleRemoveCart(product.id)}>Remover do carrinho</CartButton>): 
                   (<div>
                    <BuyButton disabled={product.totalQuantity === 0} onClick={() => handleAddCart(product.id)}>
                        Adicionar ao carrinho
                    </BuyButton>
                   </div>)}
                   <ProductQuantity>Quantidade em estoque: {product.totalQuantity}</ProductQuantity>

                   {product.totalQuantity === 0 && <span>Produto esgotado!</span>}
                </ProductItem>
            )
           }) : <div>
                  <span>Nenhum produto encontrado com esse filtro!</span>
                  
                </div>
                
          }
        </ProductListContainer>
       
    )
}