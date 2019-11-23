import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../basic/Button'
import fonts from '../../core/theme/fonts'

type Props = {
  icon: import('@fortawesome/react-fontawesome').FontAwesomeIconProps['icon']
  title: string
  subTitle: string
  action: string
}

const IconBox: import('react').FC<Props> = ({ icon, title, subTitle, action }) => (
  <div className={'IconBox'}>
    <div className={'icon'}>
      <div className={'icon-container'}>
        <FontAwesomeIcon icon={icon} fixedWidth />
      </div>
    </div>

    <div className={'title'}>
      <h3>{title}</h3>
    </div>

    <div className={'sub-title'}>
      {subTitle}
    </div>

    <div className={'action'}>
      <Button a action={action} title={'Get Catalog'} />
    </div>
    <style jsx>{`
      .IconBox {
        display: grid;
        grid-template-columns: 60px 1fr;
        grid-template-rows: min-content min-content min-content;
        grid-template-areas: 
          "icon title"
          "icon subTitle"
          "icon action";
      }  

      .icon {
        grid-area: icon;
      }

      .title {
        grid-area: title;
        font-size: 1.41em;
        font-family: ${fonts.titles};
      }

      h3 {
        margin: 0;
      }

      .sub-title {
        grid-area: subTitle;
        font-size: 1.12em;
        padding: .5em 0;
      }

      .action {
        grid-area: action;
        display: flex;
        justify-content: flex-start;
      }

      .icon {
        grid-area: 'icon'
      }

      .icon-container {
        width: 30px;
      }
    `}</style>
  </div>
)

export default IconBox
