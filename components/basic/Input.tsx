import { useRef } from 'react'
import uniqueId from 'lodash/uniqueId'
import colors from '../../core/theme/colors'
import fonts from '../../core/theme/fonts'

type Props = {
  label?: string
  onChangeText?: (text: string) => void
  textarea?: boolean
} & import('react').HTMLProps<HTMLInputElement | HTMLTextAreaElement>

const Input: import('react').FC<Props> = ({ label, onChangeText, textarea = false, onChange, ...props }) => {
  const input = useRef(uniqueId())
  const Component = textarea ? 'textarea' : 'input' as unknown as any
  
  const handleOnChange = (e: import('react').ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChangeText && onChangeText(e.target.value)
    onChange && onChange(e)
  }

  return (
    <div className={'Input'}>
      <label htmlFor={input.current}>{label}</label>
      <Component id={input.current} className={'control'} rows={3} onChange={handleOnChange} {...props} />
      <style jsx>{`
        .Input {
          display: flex;
          flex-direction: column;
        }
  
        label {
          display: block;
          font-family: ${fonts.titles};
          cursor: pointer;
          margin-bottom: .2em;
        }
  
        .control {
          border: 1px solid ${colors.lightGray};
          padding: .8em 1em;
          font-size: 1rem;
        }
  
      `}</style>
    </div>
  )
}

export default Input
