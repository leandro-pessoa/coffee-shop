// funções
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// componentes
import { StyledHeader, StyledLink } from './styles'
import Nav from '../Nav'

// imagens
import logo from '/images/coffee-logo.webp'

// ícones
import { LuMenu } from 'react-icons/lu'

// variáveis
import { variables } from '@/variables'

const Header = () => {
    // states
    const [navDisplay, setNavDisplay] = useState<boolean>(false)

    // url atual
    const { pathname } = useLocation()

    // faz o nav desaparecer ao mudar de url
    useEffect(() => {
        setNavDisplay(false)
    }, [pathname])

    window.addEventListener('scroll', () => {
        if (navDisplay) setNavDisplay(false)
    })

    return (
        <StyledHeader>
            <div className='menu-logo'>
                <button onClick={() => setNavDisplay(!navDisplay)}>
                    <LuMenu size={30} color={variables.white} />
                </button>
                <StyledLink to='/'>
                    <img src={logo} />
                    <h1>Tia Rosa coffee</h1>
                </StyledLink>
            </div>
            <Nav display={navDisplay} setNavDisplay={setNavDisplay} />
            <div className='espc'></div>
        </StyledHeader>
    )
}

export default Header
