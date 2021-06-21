import React, { Fragment, useEffect, useState } from "react"
import styles from './styles.scss'
import cx from 'classnames'
import { DatePicker, PICKER_FORM } from "components/UI/DatePicker"

const style = {
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center'
}


const DatePickers = () => {

    const [ date, setDate ] = useState('2019-01-01')
    const [ range, setRange ] = useState('2019-01-01/2019-02-03')
    useEffect(() => {
        setTimeout(() => setDate('2019-05-20'), 1500)
        setTimeout(() => setDate(undefined), 3000)
        setTimeout(() => setRange('2019-02-01/2019-04-03'), 1500)
        setTimeout(() => setRange(undefined), 3000)
    }, [])

    return (
      <Fragment>
          <div className={ cx(styles.column, styles.center) }>
              Date picker
          </div>
          <div className={ cx(styles.column, styles.center) }>
            <span style={ style }>
                <DatePicker/>
            </span>
              <span style={ style }>
                <DatePicker value={ date }/>
            </span>
          </div>
          <div className={ cx(styles.column, styles.center) }>
              <span style={ style }>
                <DatePicker isRange/>
            </span>
              <span style={ style }>
                <DatePicker isRange value={ range }/>
            </span>
          </div>
          <div className={ cx(styles.column, styles.center) }>
               <span style={ style }>
                <DatePicker form={ PICKER_FORM.inline }/>
            </span>
              <span style={ style }>
                <DatePicker form={ PICKER_FORM.inline } value={ date }/>
            </span>
          </div>
      </Fragment>
    )
}

export {
    DatePickers
}
