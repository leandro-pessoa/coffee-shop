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
