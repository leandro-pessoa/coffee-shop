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
    return <StyledSection className='container'>{children}</StyledSection>
}

export default Container
