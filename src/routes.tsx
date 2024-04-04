// componentes
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// páginas
import DefaultPage from './pages/DefaultPage'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <DefaultPage /> }>
                    <Route index element={ <Home /> }/>
                    <Route path='produtos' element={ <Products /> }/>
                    <Route path='sobre' element={ <About /> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
