
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { InsertProducts } from './pages/FormProducts'
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { DefaultLayout } from './layouts/DefaultLayout'
import { ProductsContextProvider } from './context/ProductsContext'
import { ChartPage } from './pages/Cart'
function App() {

  return (
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
        <ProductsContextProvider>
          <Routes>
            <Route path='/' element={<DefaultLayout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/products/form' element={<InsertProducts/>}/>
              <Route path='/chart' element={<ChartPage/>}/>
            </Route>
          </Routes>
          </ProductsContextProvider>
        </BrowserRouter>
        <GlobalStyle/>
      </ThemeProvider>
  )
}

export default App
