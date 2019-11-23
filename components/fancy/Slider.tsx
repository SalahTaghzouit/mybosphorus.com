import Head from 'next/head'
import SlickSlider from 'react-slick'
import Img from '../basic/Img'
import H1 from '../text/H1'
import H2 from '../text/H2'

type Props = {
  photos: string[]
  bigTitle?: string
  bigDescription?: string
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Slider: import('react').FC<Props> = ({ photos, bigTitle, bigDescription }) => (
  <div className={'slider'}>
    <Head>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>

    <div className={'image-container'}>
      <SlickSlider {...settings}>
        {photos.map((photo) => (
          <Img key={photo} src={photo} />
        ))}
      </SlickSlider>
      <div className={'big-text-container'}>
        <div className={'big-text'}>
          <H1 style={{ color: 'white', marginBottom: '1em' }}>{bigTitle}</H1>
          <H2 style={{ color: 'white', fontSize: '32px' }}>{bigDescription}</H2>
        </div>
      </div>
    </div>
    <style jsx>{`
      .image-container {
        position: relative;
      }

      .big-text-container {
        
      }


      .big-text {
        background-color: rgba(0, 0, 0, .3);
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2;
      }
    `}</style>
  </div>
)

export default Slider
