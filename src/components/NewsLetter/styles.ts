// funções
import styled from 'styled-components'

// variáveis
import { variables } from '@/variables'

const StyledSection = styled.section`
    background-color: ${variables.lightGray};
    margin: 2rem 0;
    padding: 2rem;
    border-radius: 1rem;

    h3 {
        font-size: 1.5rem;
        font-weight: 300;
        margin-bottom: 2rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
    }

    input {
        border: none;
        outline: none;
        padding: 0.2rem 1rem;
        font-size: 1.1rem;
        font-family: ${variables.primaryFont};
        width: 50%;
        margin-right: 0.3rem;

        &:focus {
            outline: 2px solid ${variables.green};
        }
    }

    button {
        background-color: ${variables.green};
        color: ${variables.white};
        border: none;
        font-size: 1.1rem;
        padding: 0.2rem 1rem;
        font-family: ${variables.primaryFont};
        transition: 0.1s;

        &:hover {
            cursor: pointer;
        }

        &:active {
            transform: translate(1px, 1px);
        }
    }

    @media (max-width: ${variables.tablet}) {
        h3 {
            font-size: 1.3rem;
        }
        input {
            width: 60%;
        }
    }
    @media (max-width: ${variables.smartphone}) {
        padding: 1.5rem;
        h3 {
            font-size: 1.2rem;
        }
        label {
            font-size: 0.9rem;
        }
        input {
            font-size: 1rem;
            width: 60%;
        }
        button {
            font-size: 1rem;
        }
    }
    @media (max-width: ${variables.smallSmartphone}) {
        h3 {
            font-size: 1.1rem;
        }
        label {
            font-size: 0.8rem;
        }
        input {
            width: calc(100% - 32px); /* padding */
            margin-bottom: 0.5rem;
        }
    }
`

export default StyledSection
