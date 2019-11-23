import fonts from '../../core/theme/fonts'
import colors from '../../core/theme/colors'

type Props = {
  
} & import('react').HTMLAttributes<HTMLHeadingElement>

const H1: import ('react').FC<Props> = ({ children, ...props }) => (
  <h1 {...props}>
    {children}
    <style jsx>{`
      h1 {
        font-family: ${fonts.titles};
        font-size: 48px;
        line-height: 1.8em;
        color: ${colors.black};
      }
    `}</style>
  </h1>
)

export default H1
