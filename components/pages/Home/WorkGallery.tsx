import { useState } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { resolve } from 'styled-jsx/css'
import Img from '../../basic/Img'
import H2 from '../../text/H2'

const images = [
  { source: '/static/slides/photo-1.jpeg' }, 
  { source: '/static/slides/photo-2.jpeg' }, 
  { source: '/static/slides/photo-3.jpeg' }, 
  { source: '/static/slides/photo-4.jpeg' }, 
  { source: '/static/slides/photo-5.jpeg' }, 
  { source: '/static/slides/photo-6.jpeg' },
]

const imageStyles = resolve`
  img:hover {
    width: 110%;
    margin-left: -5%;
    margin-top: -5%;
    height: 110%;
  }
`

const imageContainerStyles = resolve`
  div {
    height: 300px;
    width: 100%;
    cursor: pointer;
    overflow: hidden;
  }

  div:hover {
    opacity: .9;
  }
`

const WorkGallery = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className={'work'}>
      <H2 isTitle>Our Work</H2>

      <div className={'gallery'}>
        {images.map((image) => (
          <Img
            onClick={() => setIsVisible(true)}
            containerClassName={imageContainerStyles.className}
            className={imageStyles.className} 
            src={image.source} />
        ))}

        <ModalGateway>
          {isVisible && (
            <Modal onClose={() => setIsVisible(false)}>
              <Carousel views={images} />
            </Modal>
          )}
        </ModalGateway>
        {imageStyles.styles}
        {imageContainerStyles.styles}
      </div>

      <style jsx>{`
        .work {
          padding: 5em 0;
        }

        .gallery {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: repeat(2, 300px);
          grid-gap: 5px;
        }
        
      `}</style>
    </div>
    
  )
}

export default WorkGallery
