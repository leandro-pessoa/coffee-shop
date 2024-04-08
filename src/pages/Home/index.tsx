// componentes
import Slide from '@/pages/Home/Slide'
import Container from '@/components/Container'
import NewsLetter from '@/components/NewsLetter'

const Home = () => {
    return (
        <>
            <Slide />
            <Container>
                <h2>Sobre o Coffee shops Tia Rosa</h2>
                <NewsLetter />
            </Container>
        </>
    )
}

export default Home
