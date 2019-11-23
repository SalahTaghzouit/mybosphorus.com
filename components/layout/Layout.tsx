import Footer from './Footer'
import Slider from '../fancy/Slider'
import Navigation from '../../core/Navigation'

type Props = {
  sliderPhotos?: string[]
  bigTitle?: string
  bigDescription?: string
}

const Layout: import('react').FC<Props> = ({ children, sliderPhotos, bigTitle, bigDescription }) => (
  <div>
    <Navigation />
    {sliderPhotos && sliderPhotos.length && <Slider photos={sliderPhotos} bigTitle={bigTitle} bigDescription={bigDescription} />}
    <main>
      {children}
      <style jsx>{`
        main {
          padding-top: 20px;
          padding-bottom: 20px;
        }
      `}</style>
    </main>
    <Footer />
  </div>
)

export default Layout
