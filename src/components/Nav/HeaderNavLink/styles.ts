// funções
import styled from 'styled-components'

// variáveis
import { variables } from '@/variables'

// componentes
import { NavLink } from 'react-router-dom'

const StyledLi = styled.li`
    transition: ease 0.1s;

    @media (max-width: ${variables.smartphone}) {
        border-bottom: 2px solid ${variables.green};
        width: 100%;
        padding-bottom: 1rem;
    }
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${variables.white};
    font-size: 1.2rem;
    font-weight: 300;

    &.active {
        border-bottom: 1px solid ${variables.white};
    }

    @media (max-width: ${variables.tablet}) {
        font-size: 1.1rem;
    }
    @media (max-width: ${variables.smartphone}) {
        color: ${variables.green};
    }
`

export { StyledLi, StyledNavLink }
