// componentes
import Slide from '@/pages/Home/Slide'
import Container from '@/components/Container'
import NewsLetter from '@/components/NewsLetter'
import About from './About'

const Home = () => {
    return (
        // página inicial
        <>
            {/* aqui está o carousel */}
            <Slide />

            {/* e aqui está o container, que conterá a seção sobre e o newsletter */}
            <Container>
                <About />
                <NewsLetter />
            </Container>
        </>
    )
}

export default Home
