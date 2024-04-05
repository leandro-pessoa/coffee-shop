// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

// tipagem dos props
interface StyledNavProps {
    readonly $display: boolean
}

const headerHeight = '77.78px' /* altura do header */
const navWidth = '180px'

const StyledNav = styled.nav<StyledNavProps>`
    .overlay {
        display: none;
    }

    ul {
        ${flex('row', 'auto', 'auto', '3rem')}
    }

    @media (max-width: ${variables.notebook}) {
        ul {
            gap: 2rem;
        }
    }
    @media (max-width: ${variables.smartphone}) {
        display: ${(props) => (props.$display ? 'block' : 'none')};

        .overlay {
            display: block;
            position: fixed;
            right: 0;
            top: ${headerHeight};
            bottom: 0;
            z-index: 12;
            width: calc(100vw - ${navWidth} - 96px); /* padding lateral da ul*/
            background-color: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(2px);
        }

        ul {
            ${flex('column', 'auto', 'flex-start', '2rem')}
            padding: 2.5rem 3rem;
            position: fixed;
            top: ${headerHeight};
            bottom: 0;
            left: 0;
            width: ${navWidth};
            background-color: ${variables.white};
            z-index: 11;
        }
    }
`

export default StyledNav
