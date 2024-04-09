// componentes
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'

const DefaultPage = () => {
    return (
        // página padrão em que as outras irão derivar
        // o conteúdo da página derivada será exposto em 'Outlet'
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default DefaultPage
