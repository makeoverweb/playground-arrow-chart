import React, { Fragment } from "react"
import { Spinner } from "components/UI/Spinner"
import { SpinnerNew } from "components/UI/SpinnerNew"
import cx from 'classnames'
import styles from './styles.scss'
import ProgressBar from "../../components/UI/ProgressBar"

const style = {
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center'
}

const LoadersAndProgresses = () => {
    return (
      <Fragment>
          <div className={ cx(styles.column, styles.center) }>
              Spinners
          </div>
          <div className={ cx(styles.column, styles.center) }>
              <div style={ style }>
                  <Spinner/>
              </div>
              <div style={ style }>
                  <SpinnerNew size={ 4 }/>
              </div>
              <div style={ style }>
                  <SpinnerNew size={ 5 }/>
              </div>
              <div style={ style }>
                  <SpinnerNew size={ 6 }/>
              </div>
              <div style={ style }>
                  <SpinnerNew size={ 7 }/>
              </div>
              <div style={ style }>
                  <SpinnerNew size={ 8 }/>
              </div>
          </div>
          <div className={ cx(styles.column, styles.center) }>
              <div style={ style }>
                  <ProgressBar size={ 1 } value={ 16.5 }/>
              </div>
              <div style={ style }>
                  <ProgressBar value={ 36.3 }/>
              </div>
              <div style={ style }>
                  <ProgressBar size={ 3 } value={ 56.4 }/>
              </div>
              <div style={ style }>
                  <ProgressBar size={ 4 } value={ 100 }/>
              </div>
              <div style={ style }>
                  <ProgressBar size={ 5 } value={ 11 }/>
              </div>
          </div>
      </Fragment>
    )
}

export { LoadersAndProgresses }
