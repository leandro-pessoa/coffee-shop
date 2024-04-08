// funções
import styled from 'styled-components'

// variáveis
import { variables, flex } from '@/variables'

const StyledFooter = styled.footer`
    background-color: ${variables.green};
    color: ${variables.white};
    padding: 0.1rem 0;

    .container {
        ${flex('row', 'space-between', 'center')}
    }

    .social-media {
        h3 {
            font-size: 2.5rem;
            font-family: ${variables.secondaryFont};
            margin-bottom: 1rem;
        }

        ul {
            ${flex('column', 'auto', 'auto', '1rem')}
            margin: 0 1rem;

            li {
                a {
                    ${flex('row', 'auto', 'center', '1rem')}
                    color: ${variables.white};
                    text-decoration: none;
                    transition: 0.2s;
                }
            }
        }
    }

    .dev {
        a {
            color: ${variables.white};
        }
    }

    @media (max-width: ${variables.smartphone}) {
        .container {
            ${flex('column', 'auto', 'auto', '2rem')}
        }

        .social-media {
            h3 {
                text-align: center;
                font-size: 2.2rem;
            }

            ul {
                ${flex('row', 'auto', 'center', '1rem')}

                span {
                    display: none;
                }
            }
        }

        .dev {
            font-size: 0.9rem;
        }
    }

    @media (hover: hover) {
        .social-media {
            li {
                a {
                    &:hover {
                        transform: translate(5px);
                    }
                }
            }
        }
    }
`

export default StyledFooter
