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

    // faz o nav desaparecer ao scrolar a página
    window.addEventListener('scroll', () => {
        if (navDisplay) setNavDisplay(false)
    })

    return (
        // o header contêm:
        // o button do menu lateral, que só irá aparecer quando a tela for menor do que 669px
        // o logo da empresa fictícia e seu nome, que estão inseridos em um link, levando para a página inicial
        // o componente do nav
        // uma div para dar espaçamento para o nav em telas maiores
        <StyledHeader>
            <div className='menu-logo'>
                <button
                    onClick={() => setNavDisplay(!navDisplay)}
                    aria-label='Menu lateral'
                >
                    <LuMenu size={30} color={variables.white} />
                </button>
                <StyledLink to='/'>
                    <img src={logo} alt='Logo do Tia Rosa coffee' />
                    <h1>Tia Rosa coffee</h1>
                </StyledLink>
            </div>
            <Nav display={navDisplay} setNavDisplay={setNavDisplay} />
            <div className='espc'></div>
        </StyledHeader>
    )
}

export default Header
