// componentes
import StyledSection from './styles'
import Product from './Product'

// json
import products from '@/mocks/products.json'

const ProductsList = () => {
    return (
        <StyledSection>
            <ul>
                {products.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </ul>
        </StyledSection>
    )
}

export default ProductsList
