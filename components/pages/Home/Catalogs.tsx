import { faBath, faBed, faChargingStation, faHotel } from '@fortawesome/free-solid-svg-icons'
import Container from '../../layout/Container'
import H2 from '../../text/H2'
import H3 from '../../text/H3'
import Img from '../../basic/Img'
import IconBox from '../../fancy/IconBox'

const Catalogs = () => (
  <div className={'offerings'}>
    <div className={'left-photo'}>
      <Img src={'/static/slides/image1.webp'} alt={'catalogs'} />
    </div>
    <div className={'right-text'}>
      <Container>
        <H2 style={{ marginBottom: '.6em' }}>Catalogs</H2>
        <H3 style={{ fontSize: '1.1em' }}>We are offering a wide range of products that suit most of hotels needs, Check our catalogs or contact us directly.</H3>
        
        <div className={'icons'}>
          <div className={'item'}>
            <IconBox 
              icon={faBed}
              title={'Textile'}
              subTitle={'Let your guests indulge in a luxurious feel.'}
              action={'https://drive.google.com/file/d/1fA0U158FTXm3IkjRULCWVcxxUcre5Mpi/view?usp=sharing'} />
          </div>
          
          <div className={'item'}>
            <IconBox 
              icon={faBath}
              title={'Amenities'}
              subTitle={'Your Brand. Their Satisfaction.'}
              action={'https://drive.google.com/file/d/1tGtYzBo50NKBPB0RW7XQeoHm0xKt5Fu2/view?usp=sharing'} />
          </div>

          <div className={'item'}>
            <IconBox 
              icon={faChargingStation}
              title={'Electronics'}
              subTitle={'Safetly, efficiency and ease for your guests.'}
              action={'https://drive.google.com/file/d/1sHqij6ofBTTjMXImAP2embLPi1-84UT2/view?usp=sharing'} />
          </div>

          <div className={'item'}>
            <IconBox 
              icon={faHotel}
              title={'General Equipments'}
              subTitle={'Designer tables, elegant chairs, mirrors, cutlery, glassware, kitchenware, buffet equipment, and others. We\'ve got you covered.'}
              action={'https://drive.google.com/file/d/1_8OAJADJgzQn96Zd6rHTjNetT9g22nqP/view?usp=sharing'} />
          </div>
        </div>  
      </Container>
    </div>
    <style jsx>{`
      .offerings {
        display: flex;
      }

      .left-photo {
        width: 50%;
      }

      .right-text {
        padding: 7em 3em;
        width: 50%;
      }

      .icons {
        margin-top: 2em;
        display: flex;
        flex-direction: column;
      }

      .icons .item {
        margin: 1em;
      }
    `}</style>
  </div>
)

export default Catalogs
