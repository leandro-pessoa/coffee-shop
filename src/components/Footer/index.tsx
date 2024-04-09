// componentes
import StyledFooter from './styles'

// ícones
import { FaXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa'
import Container from '../Container'

const Footer = () => {
    return (
        // componente do footer
        // contêm alguns links fictícios de redes sociais e o link para o meu github
        <StyledFooter>
            <Container>
                <div className='social-media'>
                    <h3>Tia Rosa coffee shop</h3>
                    <ul>
                        <li>
                            <a
                                href='#'
                                aria-label='Siga a gente no x (antigo twitter)'
                            >
                                <FaXTwitter size={24} />
                                <span>X</span>
                            </a>
                        </li>
                        <li>
                            <a href='#' aria-label='Siga a gente no Instagram'>
                                <FaInstagram size={24} />
                                <span>Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a href='#' aria-label='Siga a gente no Youtube'>
                                <FaYoutube size={24} />
                                <span>Youtube</span>
                            </a>
                        </li>
                        <li>
                            <a href='#' aria-label='Siga a gente no Facebook'>
                                <FaFacebook size={24} />
                                <span>Facebook</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='dev'>
                    Desenvolvido por{' '}
                    <a
                        href='https://github.com/leandro-pessoa'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Leandro Pessoa
                    </a>
                </div>
            </Container>
        </StyledFooter>
    )
}

export default Footer
