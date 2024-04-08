// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

const StyledSection = styled.section`
    ul {
        ${flex('column', 'auto', 'auto', '2rem')}
    }

    @media (max-width: ${variables.smartphone}) {
        ul {
            gap: 2.5rem;
        }
    }
`

export default StyledSection
