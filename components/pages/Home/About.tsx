import Container from '../../layout/Container'
import H2 from '../../text/H2'
import H3 from '../../text/H3'

const About = () => (
  <div className={'about'}>
    <Container>
      <H2 isTitle>About Us</H2>
      <H3 style={{ textAlign: 'center' }}>Our Commitment to You</H3>

      <p>Bosphorus SARL is a creator and provider of high quality hotel and restaurant supplies in the Middle East, with a specialization in all hotel products (Amenities, Electronic, Textile Accessories and Equipments).</p>
  
      <p>Since its inception in Turkey , Bosphorus has managed to differentiate itself through products of high caliber. The company is the exclusive representative of numerous international suppliers that are leaders in their fields, thus bringing forth impeccable quality products and services to the region.</p>
      
      <p>Bosphorus reputation is that of an elegant provider of the most carefully crafted products, to the region’s best hotels. The company has managed to build a strong network of manufacturers and product suppliers, ensuring prompt and efficient service with guaranteed quality products.</p>
      
      <p>Bosphorus products highlight your commitment towards your guests and their absolute comfort.</p>
    </Container>
    <style jsx>{`
      .about {
        padding: 7em 0;
      }  
    `}</style>
  </div>
)

export default About
