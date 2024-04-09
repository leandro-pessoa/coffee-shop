// componentes
import { StyledLi, StyledNavLink } from './styles'

// tipagem dos props
interface HeaderNavLinkProps {
    to: string
    children:
        | React.ReactElement
        | string
        | React.ReactElement[]
        | (string | React.ReactElement)[]
}

const HeaderNavLink = ({ to, children }: HeaderNavLinkProps) => {
    return (
        // componente para os links de navegação do nav
        // recebe o caminho que ele o redirecionará e o elemento filho, que pode ser texto ou elementos react
        // o link recebe um estilo diferente quando o usuário está na sua rota 
        <StyledLi>
            <StyledNavLink
                to={to}
                className={({ isActive }) => `${isActive ? 'active' : ''}`}
            >
                {children}
            </StyledNavLink>
        </StyledLi>
    )
}

export default HeaderNavLink
