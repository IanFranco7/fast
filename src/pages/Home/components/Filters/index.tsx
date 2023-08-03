import { useState } from "react"
import { useProductsContext } from "../../../../hooks/useProductsContext"
import { FilterButton, FilterContainer, FilterDiv, InsideFilterDiv, InsideP } from "./styles"
import { CaretDown } from "phosphor-react"

export function Filters(){
    const {setActiveFilter, activeFilter, ChangeFilterType, activeFilterType} = useProductsContext()
    const [isCategoryOpen, setIsCategoryOpen] = useState(false)
    const [isPriceOpen, setIsPriceOpen] = useState(false)
    const [isQuantityOpen, setIsQuantityOpen] = useState(false)

    function ChangeFilter(filter: string | number, type: string){
        if(activeFilter === filter){
            setActiveFilter('')
        }
        else{
            setActiveFilter(filter)
            ChangeFilterType(type)
        }
    }

    function OpenCategory(){
        if(isCategoryOpen === false){
            setIsCategoryOpen(true)
            setIsPriceOpen(false)
            setIsQuantityOpen(false)
        }
        else{
            setIsCategoryOpen(false)
        }
    }

    function OpenPrice(){
        if(isPriceOpen === false){
        setIsCategoryOpen(false)
        setIsPriceOpen(true)
        setIsQuantityOpen(false)
        }
        else{
            setIsPriceOpen(false)
        }
    }

    function OpenQuantity(){
        if(isQuantityOpen === false){
        setIsCategoryOpen(false)
        setIsPriceOpen(false)
        setIsQuantityOpen(true)
        }else{
            setIsQuantityOpen(false)
        }
    }
    return(
        <FilterContainer>
            <FilterDiv>
                <FilterButton onClick={() =>OpenCategory()}>Categoria <CaretDown size={16}/></FilterButton>
                {isCategoryOpen && 
                <InsideFilterDiv onClick={() => setIsCategoryOpen(false)}>
                    <InsideP 
                        activeP={activeFilter === 'sneakers'} 
                        onClick={() => ChangeFilter('sneakers', 'category')}>
                            <span>Roupas e Calçados</span>
                    </InsideP>
                    <InsideP 
                        activeP={activeFilter === 'electronics'} 
                        onClick={() => ChangeFilter('electronics', 'category')}>
                            <span>Eletrônicos</span>
                    </InsideP>
                    <InsideP 
                        activeP={activeFilter === 'home'} 
                        onClick={() => ChangeFilter('home', 'category')}>
                            <span>Casa e Decoração</span>
                    </InsideP>
                    <InsideP 
                        activeP={activeFilter === 'other'} 
                        onClick={() => ChangeFilter('other', 'category')}>
                            <span>Outros</span>
                    </InsideP>
                </InsideFilterDiv>
                } 
            </FilterDiv>
            <FilterDiv>
                <FilterButton onClick={() => OpenPrice()}>Preço <CaretDown size={16}/></FilterButton> 
                {isPriceOpen && 
                <InsideFilterDiv onClick={() => setIsPriceOpen(false)}>
                    <InsideP 
                        activeP={activeFilter === 100 && activeFilterType === "price"} 
                        onClick={() => ChangeFilter(100, 'price')}>
                            <span>Acima de R$ 100</span>
                    </InsideP>
                    <InsideP 
                        activeP={activeFilter === 200 && activeFilterType === "price"} 
                        onClick={() => ChangeFilter(200, 'price')} >
                            <span>Acima de R$ 200</span>
                    </InsideP>
                    <InsideP 
                        activeP={activeFilter === 500 && activeFilterType === "price"} 
                        onClick={() => ChangeFilter(500, 'price')}>
                            <span>Acima de R$ 500</span>
                    </InsideP>
                </InsideFilterDiv>
                } 
            </FilterDiv>
            <FilterDiv>
                <FilterButton onClick={() => OpenQuantity()}>Quantidade <CaretDown size={16}/></FilterButton>
                {isQuantityOpen && 
                <InsideFilterDiv onClick={() => setIsQuantityOpen(false)}>
                    <InsideP 
                        onClick={() => ChangeFilter(20, 'quantity')}
                        activeP={activeFilter === 20 && activeFilterType === "quantity"}>
                            <span>Acima de 20 unidades</span>
                    </InsideP>
                    <InsideP 
                        onClick={() => ChangeFilter(35, 'quantity')} 
                        activeP={activeFilter === 35 && activeFilterType === "quantity" } >
                            <span>Acima de 35 unidades</span>
                    </InsideP>
                    <InsideP 
                        onClick={() => ChangeFilter(50, 'quantity')}
                        activeP={activeFilter === 50 && activeFilterType === "quantity"} >
                            <span>Acima de 50 unidades</span>
                    </InsideP>
                </InsideFilterDiv>
                }
            </FilterDiv>
    </FilterContainer>
    )
}