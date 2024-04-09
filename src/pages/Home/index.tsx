// componentes
import Slide from '@/pages/Home/Slide'
import Container from '@/components/Container'
import NewsLetter from '@/components/NewsLetter'
import About from './About'

const Home = () => {
    return (
        <>
            <Slide />
            <Container>
                <About />
                <NewsLetter />
            </Container>
        </>
    )
}

export default Home
