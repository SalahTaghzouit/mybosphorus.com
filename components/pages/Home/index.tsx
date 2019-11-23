import About from './About'
import WorkGallery from './WorkGallery'
import Offerings from './Offerings'
import Catalogs from './Catalogs'
import Section from '../../layout/Section'
import Container from '../../layout/Container'
import Img from '../../basic/Img'

const HomePage = () => (
  <>
    <Section color={'white'} id={'about'}>
      <About />
    </Section>

    <Section color={'gray'} id={'work'}>
      <WorkGallery />
    </Section>

    <Section color={'white'} id={'offerings'}>
      <Offerings />
    </Section>

    <Section color={'white'} id={'clients'} style={{ padding: '0 0 3em' }}>
      <Container>
        <Img src={'/static/clients.jpg'} />
      </Container>
    </Section>

    <Section color={'gray'} id={'catalogs'}>
      <Catalogs />
    </Section>
  </>
)

export default HomePage
