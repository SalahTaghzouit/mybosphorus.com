import ReactModal from 'react-modal'
import Link from 'next/link'
import Cookies from 'js-cookie'
import About from './About'
import WorkGallery from './WorkGallery'
import Offerings from './Offerings'
import Catalogs from './Catalogs'
import Section from '../../layout/Section'
import Container from '../../layout/Container'
import Img from '../../basic/Img'
import { useState, useEffect } from 'react'
import Form from '../ContactPage/Form'
import Button from '../../basic/Button'


const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if(Cookies.get('covid') !== '1') {
      setIsModalOpen(true)
    }
  }, [])
  
  return (
    <>
      <ReactModal
        isOpen={isModalOpen}
        closeOnDocumentClick
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        onAfterClose={() => Cookies.set('covid', '2', { expires: 10 })}
        onRequestClose={() => setIsModalOpen(false)}>
          <div className={'container'}>
            <div className={'close'}>
              <Button onClick={() => setIsModalOpen(false)} title={'X Close'} />
            </div>
            <div className={'pop'}>
              
              <div className={'image'}>
                <Link href={'/'}>
                  <a>
                    <img src={'/static/covid.jpeg'} />
                  </a>
                </Link>
              </div>

              <div className={'form'}>
                <h2>Coronavirus Equipments</h2>
                <h3>Get a quote now</h3>
                <p>We are supplying masks, respiratories, gloves, sanitizers, and all sanitary equipments. Contact us today to get the best prices in the market.</p>
                <Form />
              </div>
            </div>
          </div>
      </ReactModal>

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
      <style jsx global>{`
        .ReactModal__Overlay {
          z-index: 99999;
          background-color: rgba(0, 0, 0, 0.55);
        }
        
        @media (max-width: 500px) {
          .ReactModal__Content {
            inset: 10px!important;
          }
        }
      `}</style>
      <style jsx>{`
        .container {
          padding: 35px;
        }
        .pop {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 25px;
        }

        .close {
          display: flex;
          justify-content: flex-end;
          padding: 10px 0;
        }

        .image {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        h3 {
          margin-bottom: 30px;
        }

        .image img {
          object-fit: contain;
          max-width: 100%;
          max-height: 100%;
        }

        @media (max-width: 600px) {
          .pop {
            grid-template-columns: 1fr;
          }
          .container {
            padding: 5px;
          }
        }
      `}</style>
    </>
  )
}

export default HomePage
