import colors from '../../core/theme/colors'

type Props = {
  color: 'dark' | 'gray' | 'white'
} & import('react').HTMLProps<HTMLDivElement>

const Section: import('react').FC<Props> = ({ color = 'white', children, ...props }) => (
  <div className={color} {...props}>
    {children}
    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
      }

      .white {
        background-color: ${colors.white};
      }

      .gray {
        background-color: ${colors.grayBackground};
      }

      .dark {
        background-color: ${colors.darkBackground};
      }
    `}</style>
  </div>
)

export default Section
