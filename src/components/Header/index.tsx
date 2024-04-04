// componentes
import { StyledHeader, StyledLink } from './styles'
import Nav from '../Nav'

// imagens
import logo from '/images/coffee-logo.webp'

const Header = () => {
    return (
        <StyledHeader>
            <StyledLink to='/'>
                <img src={logo} />
                <h1>Tia Rosa coffee</h1>
            </StyledLink>
            <Nav />
            <div></div>
        </StyledHeader>
    )
}

export default Header
