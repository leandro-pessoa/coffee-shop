// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

const StyledLi = styled.li`
    ${flex('row', 'auto', 'auto', '2rem')}
    transition: .2s;

    img {
        width: 250px;
    }

    .content {
        ${flex('column', 'auto', 'auto', '1rem')}
        padding: 1rem 0;

        h3 {
            color: ${variables.green};
            font-weight: 300;
            font-size: 1.5rem;
        }

        p {
            color: ${variables.gray};
            text-indent: 1rem;
        }
    }

    @media (max-width: ${variables.tablet}) {
        .content {
            h3 {
                font-size: 1.3rem;
            }

            p {
                font-size: 0.9rem;
            }
        }
    }
    @media (max-width: ${variables.smartphone}) {
        img {
            width: 180px;
        }

        .content {
            padding: 0;

            p {
                font-size: 0.8rem;
                text-indent: 0;
            }
        }
    }
    @media (max-width: ${variables.smallSmartphone}) {
        ${flex('column-reverse', 'auto', 'center')}

        img {
            width: 300px;
        }
    }
    @media (hover: hover) {
        &:hover {
            background-color: ${variables.lightGray};
        }
    }
`

export default StyledLi
