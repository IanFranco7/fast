import styled from 'styled-components'

export const HomeContainer = styled.div`
    padding: 4rem;
    width:100%;
    
    h1{
        padding-top: 3rem;
        text-align: center;
    }
`

export const ProductsContainer = styled.div`
    padding-top: 4rem;

`

export const c = styled.p`
        height: 2rem;
        cursor: pointer;

        &:hover{
            background: #bbb;
        }

        span{
            padding: 0 .5rem;
            box-sizing: border-box;
            font-size: .9rem;
            transition: .1s ease-in-out;
            line-height: 1.75rem;
        }
`