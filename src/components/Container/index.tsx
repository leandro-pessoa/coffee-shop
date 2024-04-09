// componentes
import React from 'react'
import StyledSection from './styles'

// tipagem dos props
interface ContainerProps {
    children:
        | React.ReactElement
        | React.ReactElement[]
        | string
        | (React.ReactElement | string)[]
}

const Container = ({ children }: ContainerProps) => {
    // esse componente tem a função de dar uma margem para que os elementos filhos não ocupem toda a tela
    return <StyledSection className='container'>{children}</StyledSection>
}

export default Container
