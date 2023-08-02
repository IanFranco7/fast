import styled from "styled-components";


export const CheckoutContainer = styled.div`
    width: 100%;
    padding: 2rem;

    h1{
        padding-top: 4rem;
        text-align: center;
        margin-bottom: 1rem;
    }
    
`

export const NoProductsDiv = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    button{
        padding: .8rem 1.3rem;
        border-radius: 8px;
        background-color: ${(props) => props.theme['blue-300']};
        color: #fff;
        border: 1px solid ${(props) => props.theme['blue-400']};
        cursor: pointer;
        transition: .1s ease;

        &:hover{
            transform: scale(1.05);
        }
    }
    `

export const TableContainer = styled.div`
    width: 100%;
    border: 1px solid #ccc;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 2px 2px 3px #0000002b;
    overflow: auto;
    

    table{
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;
        overflow: scroll;
    }
`

export const TableTh = styled.th`
        background-color:  ${(props) => props.theme['gray-700']};
        padding: 2rem;
        text-align: left;
        font-size: 1rem;
        line-height: 1.7;
        padding: 1rem;
            
        &:first-child{
            border-top-left-radius: 8px;
            padding-left: 1.5rem;
         }

        &:last-child{
            border-top-right-radius: 8px;
            padding-right: 1.5rem;
        }
`

export const TableTd = styled.td`
            background-color: #dfdfdf;
            border-top: 4px solid #b1b1b1;
            padding: 1rem;
            font-size: 1.1rem;
            line-height: 0;
            color: #000;

            &:first-child{
                position: relative;
                width: 50%;
                padding-left: 1.5rem;
                

                span{
                    position: absolute;
                    top: 50%;
                    left: 30%;

                    @media(max-width: 810px){
                        left: 50%;
                    }
                    
                }
            }

            &:last-child{
                padding-right: 1.5rem;
            }

            img{
                width: 5rem;
                height: 5rem;
                object-fit: contain;
                mix-blend-mode: multiply;
            }

`
export const CheckoutProduct = styled.div`
    display:flex;
    justify-content: space-between;
`

export const ProductImage = styled.img`
        width: 23rem;
`

export const BuyProductsContainer = styled.div`
    display:flex;
    justify-content: flex-end;
    width: 100%;
    padding-top: 2rem;
`

export const BuyProductsDiv = styled.div`
    width:30%;
    padding: 1rem 1.5rem;
    border: 1px solid #c9c9c9;
    border-radius: 8px;
    
    @media(max-width:760px){
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
    }

    h3{
        margin-bottom: 1rem;
    }

    table{
        width:100%;
        margin-bottom: 1.8rem;
        border-collapse: collapse;

        td{
            width: 50%;
            border: 1px solid #ccc;
            padding: .7rem;
            font-size: .9rem;
        }
    }
`

export const BuyButton = styled.button`

    background-color: ${(props) => props.theme['blue-300']};
    border-radius: 8px;
    padding: .7rem 1.3rem;
    border: none;
    color: #fff;
    cursor: pointer;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);

`