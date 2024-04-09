// componentes
import StyledSection from './styles'
import Product from './Product'

// json
import products from '@/mocks/products.json'

const ProductsList = () => {
    return (
        // contém a lista que exibirá todos os produtos
        // a informação de cada produto está contida no json acima
        // esse json é iterado e cada elemento dele será passado para o componente 'Product'
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
