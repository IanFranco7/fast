import styled from 'styled-components'

export const InsertContainer = styled.div`
    margin-top: -1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 5rem);
    padding: 1.5rem 2rem;
    width: 100%;

    h1{
        padding-top: 4.5rem;
        text-align: center;

        @media(max-width: 750px){
            padding-top: 8rem;
         }
    }

`

export const FormProducts = styled.form`
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LabelForm = styled.label`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 40%;
    gap: .5rem;

    @media(max-width: 600px){
        width: 82%;
    }
    
    input, select{
        margin-bottom: .5rem;
        outline: none;
        padding: .1rem 0;
        padding-left: .3rem;
    }

`

export const ButtonForm = styled.button`
    margin-top: 1rem;
    padding: .8rem 1.4rem;
    background-color: #0f0f0f;
    color: #fff;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
`