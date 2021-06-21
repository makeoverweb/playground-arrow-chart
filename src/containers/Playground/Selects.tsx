import React, { Fragment } from "react"
import styles from './styles.scss'
import cx from 'classnames'
import { Select } from "components/UI/Select"

const style = {
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center'
}


const Selects = () => {
    return (
      <Fragment>
          <div className={ cx(styles.column, styles.center) }>
              Selects
          </div>
          <div className={ cx(styles.column, styles.center) }>
        <span style={ style }>
          <Select
            options={ [
                { value: 111, label: 'label1' },
                { value: 222, label: 'label2' },
                { value: 333, label: 'label3' },
            ] }
            label={ 'THis is label' }
            handle={ () => {
            } }/>
        </span>
          </div>
      </Fragment>
    )
}

export {
    Selects
}
