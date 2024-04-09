// componentes
import StyledSection from './styles'

const NewsLetter = () => {
    return (
        // componente de newsletter
        // contêm um título e um formulário sem funcionamento
        <StyledSection>
            <h3>Deseja receber novidades?</h3>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='email'>
                    Insira seu e-mail e receba ofertas
                </label>
                <input
                    type='email'
                    id='email'
                    autoComplete='off'
                    placeholder='exemplo@gmail.com'
                    required
                />
                <button type='submit'>Enviar</button>
            </form>
        </StyledSection>
    )
}

export default NewsLetter
