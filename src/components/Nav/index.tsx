// componentes
import StyledNav from './styles'
import HeaderNavLink from './HeaderNavLink'

const Nav = () => {
    return (
        <StyledNav>
            <ul>
                <HeaderNavLink to='/'>Home</HeaderNavLink>
                <HeaderNavLink to='/produtos'>Produtos</HeaderNavLink>
                <HeaderNavLink to='/sobre'>Sobre</HeaderNavLink>
            </ul>
        </StyledNav>
    )
}

export default Nav
