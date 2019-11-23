import classnames from 'classnames'
import { MouseEventHandler } from 'react'


type Props = {
  a?: boolean
  action?: string | import('react').MouseEventHandler
  title: string
  className?: string
  disabled?: boolean
} & import('react').HTMLProps<HTMLAnchorElement | HTMLButtonElement>

const Button: import('react').FC<Props> = ({ a = false, action, title, className, disabled = false, ...props }) => {
  const Component: any = a ? 'a' : 'button'
  const buttonProps = {
    ...props,
    className: classnames([
      'button',
      { disabled },
      className
    ])
  }

  if(a || typeof action === 'string') {
    buttonProps.href = action
  } else {
    // buttonProps.onClick = action
  }

  return (
    <>
      <Component disabled={disabled} {...buttonProps}>{title}</Component>
      <style jsx>{`
        .button {
          outline: none;
          text-decoration: none;
          border: none;
          padding: .5em 1em;
          background-color: black;
          color: white;
          transition: all .2s ease-in-out;
          font-size: 1.1em;
          display: flex;
        }

        .button:hover, .button:active {
          outline: none;
          text-decoration: none;
          border: none;
          background-color: rgba(0, 0, 0, 0.7);
        }

        .disabled {
          background-color: rgba(0, 0, 0, 0.5);
        }

      `}</style>
    </>
  )
}

export default Button
