// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

const StyledSection = styled.section`
    ${flex('column', 'auto', 'auto', '2rem')}
    margin: 4rem 0;

    h2 {
        font-size: 3rem;
        font-family: ${variables.secondaryFont};
    }

    p {
        line-height: 2rem;
        font-size: 1.2rem;
        text-indent: 2rem;
        font-weight: 300;
        text-align: justify;
    }

    @media (max-width: ${variables.smartphone}) {
        h2 {
            font-size: 2.5rem;
        }

        p {
            font-size: 1rem;
        }
    }

    @media (max-width: ${variables.smallSmartphone}) {
        h2 {
            font-size: 2.2rem;
            text-align: center;
        }
    }
`

export default StyledSection
