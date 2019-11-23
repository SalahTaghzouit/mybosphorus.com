import fonts from '../../core/theme/fonts'
import colors from '../../core/theme/colors'

type Props = {
  
} & import('react').HTMLAttributes<HTMLHeadingElement>

const H3: import ('react').FC<Props> = ({ children, ...props }) => (
  <h3 {...props}>
    {children}
    <style jsx>{`
      h3 {
        font-family: ${fonts.titles};
        font-size: 20px;
        line-height: 1.8em;
        color: ${colors.black};
      }
    `}</style>
  </h3>
)

export default H3
