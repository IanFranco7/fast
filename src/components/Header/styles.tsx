import styled, {css} from "styled-components";

interface PropsList {
    isMobile: boolean
}

export const HeaderContainer = styled.nav`
    height: 4rem;
    background-color: #000;
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 2rem;
    align-items: center;
    box-shadow: 2px 2px 3px #3531312b;
    color: #fff;
    position: fixed;
    left: 0; right: 0; top: 0;
    z-index: 10;
`

export const Logo = styled.p`
    font-size: 2rem;
    font-weight: bold;
`
export const Links = styled.div<PropsList>`
    display:flex;
    gap: 0.5rem;
    align-items: center;

    
        @media(max-width:700px){
            display: none
        }
    
    a{
        color: #fff;
        text-decoration: none;
        padding: .5rem;
        transition: .2s ease-in-out;
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
        transform-origin: left;

        &:hover{
            border-bottom: 1px solid ${(props) => props.theme['blue-300']}
        }
        
    }
`

export const CartIcon = styled.div`
    position: relative;


    svg{
            color: ${props => props.theme["blue-300"]};
            position: relative;
        }

        span{
            position: absolute;
            display: block;
            width: 22px;
            height: 22px;
            background-color: lightcoral;
            border-radius: 50%;
            bottom: 0;
            right: 0;
            display: flex;
            align-items:center;
            justify-content: center;
            font-size: .85rem;
        }
`

export const Mobile = styled.div`
    display: none;
    @media(max-width: 700px){
        display: block;
        cursor: pointer;
    }
`
export const ListMobileContainer = styled.div`
    position: absolute;
    top: 100%;
    background: #0a0a0a;
    left: 0;
    right: 0;
`
export const ListMobile = styled.div`
   
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;

    a{
        color:#fff;
        padding: .6rem ;
        text-decoration: none;
        width: 100%;
        text-align: center;
    }

    svg{
        width: 100vw;
    }
`