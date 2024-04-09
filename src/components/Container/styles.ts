// funções
import styled from 'styled-components'

// variáveis
import { variables } from '@/variables'

const StyledSection = styled.section`
    margin: 3rem 10rem;

    @media (max-width: ${variables.notebook}) {
        margin: 3rem 8rem;
    }
    @media (max-width: ${variables.tablet}) {
        margin: 3rem 5rem;
    }
    @media (max-width: ${variables.smartphone}) {
        margin: 3rem;
    }
    @media (max-width: ${variables.smallSmartphone}) {
        margin: 3rem 2rem;
    }
`

export default StyledSection
