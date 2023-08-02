import styled from "styled-components";


export const ProductListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem;
  
`

export const ProductItem = styled.div`
    border: 0.1rem solid rgba(0,0,0, 0.1);
    width: 30%;
    padding: 2rem;
    background: #f9f9f9;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    border-radius: 8px;
    
    img{
        width: 8rem;
        height: 8rem;
        object-fit: contain;
        mix-blend-mode: multiply;
        margin-bottom: 1.5rem;
    }

    @media(max-width: 780px){
        width: 45%;
    }

    @media(max-width: 590px){
        width: 85%;
    }

`

export const ProductName = styled.h3`
    font-size: 1.56rem;
    color: ${(props) => props.theme['blue-400']};
    text-align: center;
`

export const ProductPrice = styled.p`
    font-size: 1.31rem;
    color: ${(props) => props.theme['orange-300']};
    margin-bottom: .7rem;
`

export const ProductQuantity = styled.span`
    font-size: .7rem;
    text-align: center;
`

const ButtonBase = styled.button`
    padding: .7rem 1.3rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: ${(props) => props.theme['blue-400']};  
    margin-bottom: 1.5rem;
    transition: .2s ease-in-out;

`

export const BuyButton = styled(ButtonBase)`
    border: 0.15rem solid ${(props) => props.theme['blue-400']};  
    background: #fff;

    &:hover{
        background: ${(props) => props.theme['orange-300']};  
    }
     &:disabled{
        opacity: 0.7;
        cursor: not-allowed;
     }

`

  
export const CartButton = styled(ButtonBase)`
    
    border: 0.15rem solid ${(props) => props.theme['red-300']};  
    background: #2E3532;
    color: #fff;

    &:hover{
        background: ${(props) => props.theme['black']};  
    }  
`