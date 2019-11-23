import Img from '../basic/Img'
import H3 from '../text/H3'

type Props = {
  image: string
  title: string
  description: import('react').ReactNode
  reversed?: boolean
}

const Offering: import('react').FC<Props> = ({ image, title, description, reversed }) => (
  <div className={`Offering ${reversed ? ' reversed' : ''}`}>

    <div className={'image'}>
      <Img src={image} />
    </div>

    <div className={'title'}>
      <H3 style={{ fontSize: '1.8em', margin: 0 }}>{title}</H3>
    </div>

    <div className={'description'}>
      {description}
    </div>

    <style jsx>{`
      .Offering {
        display: grid;
        grid-template-rows: 400px min-content min-content;
        grid-template-columns: 1fr;
        grid-template-areas:
          "image"
          "title"
          "description";
        grid-gap: 1em;
      }

      .reversed {
        grid-template-areas:
          "image"
          "title"
          "description";
      }

      .image {
        grid-area: image;
        max-height: 400px;
        overflow: hidden;
      }

      .title {
        grid-area: title;
      }

      .description {
        grid-area: description;
      }
    `}</style>
  </div>
)

export default Offering
