import classnames from 'classnames'
import fonts from '../../core/theme/fonts'
import colors from '../../core/theme/colors'

type Props = {
  isTitle?: boolean
} & import('react').HTMLAttributes<HTMLHeadingElement>

const H2: import ('react').FC<Props> = ({ className, children, isTitle = false, ...props }) => (
  <h2 className={classnames([
    { title: isTitle },
    className
  ])} {...props}>
    {children}
    <style jsx>{`
      h2 {
        position: relative;
        font-family: ${fonts.titles};
        font-size: 40px;
        margin-bottom: 3rem;
        color: ${colors.black};
      }

      h2.title {
        text-align: center;
      }

      h2.title::after {
        width: 100px;
        bottom: -10px;
        left: calc(50% - 50px);
        content: "";
        position: absolute;
        height: 1px;
        background:
        #000;
      }
    `}</style>
  </h2>
)

export default H2
