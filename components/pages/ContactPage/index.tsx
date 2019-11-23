import GoogleMapReact from 'google-map-react'
import H2 from '../../text/H2'
import Form from './Form'
import Section from '../../layout/Section'
import Container from '../../layout/Container'
import config from '../../../config'

type Props = {
  google?: any
}

const ContactPage: import('react').FC<Props> = ({ google }) => (
  <>
    <Section color={'gray'}>
      <div className={'pad'}>
        <Container wide>
          <div className={'contact'}>
            <div className={'address'}>
              <H2>Contact Us</H2>
              <p>Level 7, Oasis Wing, Brunsfield Oasis Tower 3 No. 2, Jalan PJU 1A/7A, Oasis Square, Oasis Damansara, 47301 Petaling Jaya Selangor Darul Ehsan. Malaysia.</p>
              <p>
                E: info@mybosphorus.com <br />
                F: +60 (3) 7848 5801 <br />
                T: +60 (3) 7848 5998
              </p>
              <p></p>
              <p></p>
            </div>
            <div className={'form'}>
              <Form />
            </div>
          </div>
        </Container>
      </div>
    </Section>

    <Section color={'white'} style={{ height: 600 }}>
    <GoogleMapReact
        bootstrapURLKeys={{ key: config.googleApiKey }}
        defaultCenter={{
          lat: 3.1143045,
          lng: 101.5716245
        }}
        defaultZoom={17}>
        {/* <AnyReactComponent
          lat={3.1143045}
          lng={3.1143045}
          text="Bosphorus Supply Solutions"
        /> */}
      </GoogleMapReact>
    </Section>


    <style jsx>{`
      .contact {
        display: flex;
        gap: 1em;
      }

      .pad {
        padding: 5em 0;
      }

      .address {
        flex: 1;
        padding: 4em;
        display: flex;
        flex-direction: column;
        align-items: center;
      }  

      .form {
        flex: 1;
      }
    `}</style>
  </>
)

export default ContactPage
