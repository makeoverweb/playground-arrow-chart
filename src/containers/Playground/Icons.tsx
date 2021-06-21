import React, { Fragment } from "react"

import { Icon } from 'components/UI/Icon'
import { getAssetsList } from "../../components/UI/Icon/utils"
import styles from './styles.scss'

const icons = getAssetsList()

const Icons = () => {
    return (
      <Fragment>
          <div className={ styles.iconsContainer }>
              { icons.map(icon => <div title={ icon } key={ icon } className={ styles.icon }><Icon name={ icon }/>
              </div>) }
          </div>
      </Fragment>)
}

export {
    Icons
}
