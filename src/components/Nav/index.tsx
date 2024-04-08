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
