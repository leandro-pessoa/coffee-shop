// componentes
import Banner from '@/pages/Products/Banner'
import ProductsList from './ProductsList'
import Container from '@/components/Container'

const Products = () => {
    return (
        <>
            <Banner />
            <Container>
                <ProductsList />
            </Container>
        </>
    )
}

export default Products
