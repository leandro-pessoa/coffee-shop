// funções
import styled from 'styled-components'

// variáveis
import { variables, flex } from '@/variables'

// componentes
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
    ${flex('row', 'space-between', 'center')}
    padding: .8rem 3rem;
    background-color: ${variables.green};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

    .menu-logo {
        ${flex('row', 'auto', 'center', '2rem')}
    }

    button {
        display: none;
        background-color: transparent;
        border: none;
        border-radius: 50%;
        padding: 0.3rem 0.4rem;
        transition: 0.2s;

        &:active {
            background-color: ${variables.white}1a;
        }
    }

    @media (max-width: ${variables.tablet}) {
        padding: 0.8rem 2rem;

        .espc {
            display: none;
        }
    }

    @media (max-width: ${variables.smartphone}) {
        padding: 0.4rem 1.5rem;

        .menu-logo {
            gap: 1rem;
        }

        button {
            display: block;
        }
    }

    @media (max-width: ${variables.smallSmartphone}) {
        padding: 0.4rem 1rem;
    }
`

const StyledLink = styled(Link)`
    ${flex('row', 'auto', 'center', '2rem')}
    text-decoration: none;

    img {
        width: 80px;
    }

    h1 {
        font-size: 3rem;
        color: ${variables.white};
        font-family: ${variables.secondaryFont};
    }

    @media (max-width: ${variables.tablet}) {
        img {
            width: 70px;
        }
        h1 {
            font-size: 2.5rem;
        }
    }

    @media (max-width: ${variables.smartphone}) {
        gap: 1rem;

        img {
            width: 65px;
        }
        h1 {
            font-size: 2.3rem;
        }
    }
    @media (max-width: ${variables.smallSmartphone}) {
        h1 {
            font-size: 2rem;
        }
    }
`

export { StyledHeader, StyledLink }
