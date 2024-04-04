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
