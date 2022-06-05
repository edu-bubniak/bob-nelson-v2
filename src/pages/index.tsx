import type { NextPage } from 'next'
import { Carrossel } from '../components/Carrossel'
import { Header } from '../components/Header'
import { QuemSomos } from '../components/QuemSomos'
import { ComoAjudar } from '../components/ComoAjudar'
import { Container } from '../styles/pages/home'
import { DadosOng } from '../components/DadosOng'
import { Footer } from '../components/Footer'

const Home: NextPage = () => {
  return (
    <Container>
        <Header />
        <Carrossel id="header"/>
        <QuemSomos id="quem-somos"/>
        <ComoAjudar id="como-ajudar"/>
        <DadosOng id="dados-ong"/>
        <Footer />
    </Container>
  )
}

export default Home
