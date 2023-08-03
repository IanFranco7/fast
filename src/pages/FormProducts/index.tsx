import { useRef, FormEvent } from "react";
import { FormProducts, InsertContainer, LabelForm, ButtonForm} from "./styles";
import { Product } from "../../context/ProductsContext";
import { useProductsContext } from "../../hooks/useProductsContext";
import { createNewProductAction } from "../../reducers/products/Actions";



export function InsertProducts(){

    const {dispatch} = useProductsContext()
    const formRef = useRef<HTMLFormElement>(null)

    const nameInputRef = useRef<HTMLInputElement>(null)
    const priceInputRef = useRef<HTMLInputElement>(null)
    const quantityInputRef = useRef<HTMLInputElement>(null)
    const categorySelectRef = useRef<HTMLSelectElement>(null)
    const urlInputRef = useRef<HTMLInputElement>(null)

    function handleSubmit(e: FormEvent){
        e.preventDefault()
        const product: Product = {
            id: String(new Date().getTime()),
            nameProduct: nameInputRef.current?.value,
            price: Number(priceInputRef.current?.value),
            totalQuantity: Number(quantityInputRef.current?.value),
            category: categorySelectRef.current?.value,
            selectedQuantity: 1,
            isInCart: false,
            url: urlInputRef.current?.value
        }

        dispatch(createNewProductAction(product))
        
        formRef.current?.reset()
    }

    return(
        <InsertContainer>
            <h1>Adicione os produtos aqui: </h1>
            <FormProducts onSubmit={(e) => handleSubmit(e)} ref={formRef}>
                    <LabelForm>
                        <span>Nome do produto:</span>
                        <input type="text" required ref={nameInputRef} placeholder="Insira o nome do produto"/>
                    </LabelForm>
                    <LabelForm>
                        <span>Preço do produto:</span>
                        <input type="number" min={1} required ref={priceInputRef} placeholder="Insira o preço do produto"/>
                    </LabelForm>
                    <LabelForm>
                        <span>Quantidade:</span>
                        <input type="number" min={0} max={200} required ref={quantityInputRef} placeholder="Insira a quantidade do produto"/>
                    </LabelForm>
                    <LabelForm>
                        <span>Categoria:</span>
                        <select defaultValue="" ref={categorySelectRef}>
                        <option value="" disabled>Selecione uma categoria</option>
                        <option value="electronics">Eletrônicos</option>
                        <option value="sneakers">Roupas e Calçados</option>
                        <option value="home">Casa</option>
                        <option value="other">Outros</option>
                        </select>
                    </LabelForm>
                    <LabelForm>
                        <span>Url da imagem</span>
                        <input type="url" placeholder="(Opcional)" ref={urlInputRef}/>
                    </LabelForm>

                    <ButtonForm>Cadastrar</ButtonForm>
            </FormProducts>
           
        </InsertContainer>
    )
}