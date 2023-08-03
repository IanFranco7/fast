import {NavLink} from 'react-router-dom'
import { HeaderContainer, Links, Logo, CartIcon, Mobile, ListMobile, ListMobileContainer } from './styles'
import {List, ShoppingCartSimple, X} from 'phosphor-react'
import { useProductsContext } from '../../hooks/useProductsContext'
import {useState} from 'react'



export function Header(){

    const {products} = useProductsContext()
    const [isMobile, setIsMobile] = useState(false)

    const cartProducts = products.filter((product) => product.isInCart)

    return(
        <HeaderContainer>
            <div>
                <Logo>Fast</Logo>
            </div>
            <Links isMobile={isMobile}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/products/form'>Novo Produto</NavLink>
                    <CartIcon>
                        <NavLink to='/chart'><ShoppingCartSimple size={30}/> {cartProducts.length > 0 && <span>{cartProducts.length}</span>}</NavLink>
                    </CartIcon>
            </Links>
            <Mobile>
                {!isMobile ? <List size={32} onClick={() => setIsMobile(true)}/> : <X size={32} onClick={() => setIsMobile(false)}/>}
                {isMobile && 
                <ListMobileContainer onClick={() => setIsMobile(false)}>
                    <ListMobile>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/products/form'>Novo Produto</NavLink>
                        <CartIcon>
                        <NavLink to='/chart'><ShoppingCartSimple size={30}/> {cartProducts.length > 0 && <span>{cartProducts.length}</span>}</NavLink>
                        </CartIcon>
                    </ListMobile>
                </ListMobileContainer>}
            </Mobile>
        </HeaderContainer>
    )
}