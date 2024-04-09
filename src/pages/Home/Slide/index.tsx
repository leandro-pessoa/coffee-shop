// componentes
import { Carousel } from 'react-responsive-carousel'

// estilos do carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'

// imagens
import banner1 from '/images/carousel/banner1.webp'
import banner2 from '/images/carousel/banner2.webp'
import banner3 from '/images/carousel/banner3.webp'

const Slide = () => {
    return (
        // componente que exibirá o carousel
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
            dynamicHeight={true}
            centerMode={true}
        >
            <div>
                <img
                    src={banner1}
                    alt='Imagem de uma xícara de café quentinho.'
                />
            </div>
            <div>
                <img
                    src={banner2}
                    alt='Imagem de uma xícara de café com folhas em volta.'
                />
            </div>
            <div>
                <img
                    src={banner3}
                    alt='Imagem de uma xícara de café com grãos e pó de café em volta.'
                />
            </div>
        </Carousel>
    )
}

export default Slide
