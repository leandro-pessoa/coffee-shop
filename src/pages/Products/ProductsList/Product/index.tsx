// componentes
import StyledLi from './styles'

// tipagem dos props
interface ProductProps {
    name: string
    img: string
    description: string
}

const Product = ({ name, img, description }: ProductProps) => {
    return (
        // irá renderizar cada produto da lista
        // contêm imagem, título e descrição
        // cada elemento desse é passado por props
        <StyledLi>
            <img src={img} alt={name} />
            <div className='content'>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </StyledLi>
    )
}

export default Product
