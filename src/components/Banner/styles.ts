// funções
import styled from 'styled-components'

// imagens
import banner from '/images/coffee-banner.png'

// variáveis
import { variables, flex } from '@/variables'

const StyledSection = styled.section`
    ${flex('row', 'flex-end', 'flex-end')}
    background: url(${banner}) no-repeat center;
    background-size: cover;
    height: 200px;
    padding: 2rem;
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, .5);

    h2 {
        font-family: ${variables.secondaryFont};
        color: ${variables.white};
        font-size: 4rem;
        text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
    }

    @media (max-width: ${variables.tablet}) {
        h2 {
            font-size: 3.5rem;
        }
    }
    @media (max-width: ${variables.smartphone}) {
        height: 180px;
        h2 {
            font-size: 3rem;
        }
    }
    @media (max-width: ${variables.smallSmartphone}) {
        ${flex('row', 'center', 'center')}
        height: 150px;
    }
`

export default StyledSection
