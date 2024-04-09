// componentes
import StyledNav from './styles'
import HeaderNavLink from './HeaderNavLink'
import { Dispatch, SetStateAction } from 'react'

// tipagem dos props
interface NavProps {
    display: boolean
    setNavDisplay: Dispatch<SetStateAction<boolean>>
}

const Nav = ({ display, setNavDisplay }: NavProps) => {
    return (
        // o nav tem dois modos
        // o modo de telas maiores, que sempre será visível
        // e o modo de telas de smartphone, em que pode ser alternado o display
        // o overlay só irá aparecer quando o menu lateral estiver ativo e ao ser clicado nele, o menu some
        <StyledNav $display={display}>
            <ul>
                <HeaderNavLink to='/'>Home</HeaderNavLink>
                <HeaderNavLink to='/produtos'>Produtos</HeaderNavLink>
            </ul>
            <div className='overlay' onClick={() => setNavDisplay(false)}></div>
        </StyledNav>
    )
}

export default Nav
