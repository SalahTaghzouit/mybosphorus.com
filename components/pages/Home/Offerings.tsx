import Offering from '../../fancy/Offering'
import Container from '../../layout/Container'
import Separator from '../../basic/Separator'
import H2 from '../../text/H2'

const Offerings = () => (
  <div className={'offerings'}>
    <Container>
      <H2>Our Offerings</H2>
      
      <div className={'wrapper'}>
        <Offering
          image={'/static/slides/grand-hotel-towels.webp'}
          title={'Amenities'}
          description={<>
            <p>We create exclusive lines of toiletries and accessories and offer a custom-made service. We also offer the largest branded lines’ selections. Our cosmetic products use top quality ingredients and are manufactured according to Eco-friendly regulations.</p>
          </>} />

        <Separator space={'6em'} />
        
        <Offering
          reversed
          image={'/static/textile.jpeg'}
          title={'Bedroom Textile & Bathroom Towels'}
          description={<>
            <p>Exquisite softness via luxury linen made from the finest cotton.</p>
            <p>We specialize in the supply of top quality bed linen, with a finish that ranges from 200-thread to 500-thread count. Our collection includes bed sheets, pillowcases, as well as duvet covers, and includes all sizes.</p>
            <p>Choose from a selection of numerous materials – cotton rich blends to 100% cotton linens – available in plain satin, percale finish, 1cm stripe, as well as other jacquard and bobby designs.</p>
            <p>Soft, fluffy terry towels made from the finest quality yarns.  Our towels are soft and strong, available from 550GM, 650GM and higher. Range includes towel sets, bathrobes, bath rugs and slippers.  Pamper your guests with ultimate com- fort and desirable absorbency.</p>
            <p> Give a touch of class to your bed set.</p>
          </>} />

        <Separator space={'6em'} />

        <Offering
          image={'/static/slides/electronic.webp'}
          title={'Coffee Kettle, Station, Ironing & Trousers Press, Mini Bar & Safe Deposit Box, ScalesTowels'}
          description={<>
            <p>Guests are important, and they deserve the best of every- thing. Good service and a flexible customer focus are not the only priorities: individual attention and the ability to offer a complete package of modern, innovative room facilities are just as important.</p>
            <p>Both business and holiday guests appreciate when hotel rooms are provided with easy to use electronic scales as well as a functional welcome tray with a reliable kettle in their room. After a long trip, it is comfortable to be able to boil water and make a cup of coffee & tea.</p>
            <p>Also a functional ironing units. Whether it is for a business meeting or a gala dinner in the evening: wrinkles are not welcome in clothes, whatever the time zone may be.</p>
            <p>In addition to a full functional and trendy hotel electronic safe with a multi user friendly display.</p>
            <p>Our mini bars are eco-friendly, with an Ammoniac system that ensures a full night sleep without any noise.</p>
          </>} />

        <Separator space={'6em'} />

        <Offering
          reversed
          image={'/static/dryer.jpeg'}
          title={'Hair Dryers & Magnifying Mirror'}
          description={<>
            <p>The manufacturers focus on their core expertise in the field of hair care appliances and ensure that the special requirements for hotel hairdryers are met in full.</p>
            <p>Eco friendly: Our hairdryers make  energy saving  settings possible, have a long life and achieve high drying rates even at low wattage's.</p>
            <p>The manufacturers are committed to making a positive contribution towards sustainable development. All ‘Swiss Made’ products are manufactured from materials 95% of which can be recycled and they do not contain any hazardous or dangerous substances.</p>
          </>} />
      </div>
      
    </Container>
    <style jsx>{`
      .offerings {
        padding: 7em 0;
      }
      .wrapper {
        display: grid;
        flex-direction: column;
      }
    `}</style>
  </div>
)

export default Offerings
