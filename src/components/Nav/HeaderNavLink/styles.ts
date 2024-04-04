// funções
import styled from 'styled-components'

// variáveis
import { variables } from '@/variables'

// componentes
import { NavLink } from 'react-router-dom'

const StyledLi = styled.li`
    transition: ease 0.1s;
    &:hover {
        transform: scale(1.05);
    }
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${variables.white};
    font-size: 1.2rem;
    font-weight: 300;

    &.active {
        text-shadow: 0px 0px 5px ${variables.white};
    }
`

export { StyledLi, StyledNavLink }
