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
`

export { StyledHeader, StyledLink }
