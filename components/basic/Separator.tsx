type Props = {
  space?: number | string
} & import('react').HTMLProps<HTMLDivElement>

const Separator: import('react').FC<Props> = ({ space, ...props }) => (
  <div {...props}>
    <style jsx>{`
      div {
        height: .5px;
        width: 100%;
        margin: ${space ? space : '1em'} 0;
        background-color: #cfcfcf;
      }
    `}</style>
  </div>
)
export default Separator
