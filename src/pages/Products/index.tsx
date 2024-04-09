// componentes
import Banner from '@/pages/Products/Banner'
import ProductsList from './ProductsList'
import Container from '@/components/Container'

const Products = () => {
    return (
        // página de produtos, que contêm um banner e a lista de produtos
        <>
            <Banner />
            <Container>
                <ProductsList />
            </Container>
        </>
    )
}

export default Products
