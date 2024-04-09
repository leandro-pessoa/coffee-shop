// componentes
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// páginas
import DefaultPage from './pages/DefaultPage'
import Home from './pages/Home'
import Products from './pages/Products'

const AppRoutes = () => {
    return (
        // aqui é possível visualizar as rotas que compõem a aplicação
        // temos a rota home, que seria a página inicial
        // e também a página de produtos
        // a default page disponibiliza elementos que serão utilizados nas duas páginas (como o header e o footer)
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <DefaultPage /> }>
                    <Route index element={ <Home /> }/>
                    <Route path='produtos' element={ <Products /> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
