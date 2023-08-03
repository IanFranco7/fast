import styled from 'styled-components'

export const FilterContainer = styled.div`
    margin-top: .5rem;
    display: flex;
    gap: 1rem;
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid ${(props) => props.theme['gray-300']};  

    @media(max-width:700px){
        justify-content: center;
    }

    @media(max-width: 500px){
        flex-direction: column;
        align-items: center;
    }
`

export const FilterButton = styled.button`
    padding: .6rem 1.4rem;
    font-size: .8rem;
    background: ${(props) => props.theme['gray-300']};
    border-radius: 8px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.1rem;
`

export const FilterDiv = styled.div`
    position: relative;
`

export const InsideFilterDiv = styled.div`
    top: 125%;
    width: 13rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    background: #Fff;
    color: #000;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
    z-index: 50;


`

interface PropsInsideP {
    activeP: boolean
}

export const InsideP = styled.p<PropsInsideP>`
        height: 2rem;
        cursor: pointer;
        background: ${(props) => (props.activeP ? props.theme['gray-500'] : 'transparent')};

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