import { forwardRef } from 'react'
import classnames from 'classnames'

type Props = {
  className?: string
  children?: import('react').ReactNode
  narrow?: boolean
  wide?: boolean
}

const Container = ({ children, className, narrow, wide, ...props }: Props, ref: import('react').Ref<any>) => (
  <div ref={ref} className={classnames([
    'container',
    { narrow },
    { wide }
  ])} {...props}>
    {children}
    <style jsx>{`
      .container {
        padding: 0px 12px;
        width: 100%;
        max-width: 100vw;
        margin: 0px auto;
      }

      @media (min-width: 768px) {
        .container {
          max-width: 900px;
        }

        .container.wide {
          max-width: 1120px;
        }
      }
    `}</style>
  </div>
)

export default forwardRef(Container)

