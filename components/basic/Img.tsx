type Props = {
  fit?: 'contain' | 'cover'
  containerClassName?: string
} & import('react').ImgHTMLAttributes<HTMLImageElement>

const Img: import('react').FC<Props> = ({ fit = 'cover', containerClassName, ...props }) => (
  <div className={containerClassName}>
    <img {...props} />
    <style jsx>{`
      div {
        width: 100%;
        height: 100%;
        transition: .2s all ease;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: ${fit};
        transition: .2s all ease;
      }
    `}</style>
  </div>
)

export default Img
