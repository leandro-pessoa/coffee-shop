// componentes
import GlobalStyles from './components/GlobalStyles'
import AppRoutes from './routes'

const App = () => {
    return (
        <>
            {/* estilos globais e o reset css */}
            <GlobalStyles />

            {/* rotas da aplicação */}
            <AppRoutes />
        </>
    )
}

export default App