import React, { Fragment } from "react"
import {
    PrimaryButton,
    SuccessButton,
    BasicButton,
    DefaultButton, WarningButton, InfoButton, DangerButton, ButtonsGroup
} from "components/UI/Button"
import styles from './styles.scss'
import cx from 'classnames'

const style = {
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center'
}

const PrimaryButtons = () => {
    return (
      <Fragment>
          <div className={ cx(styles.column, styles.center) }>
              Buttons
          </div>
          <div className={ cx(styles.column, styles.center) }>
              <div style={ style }>
                  <BasicButton text={ 'basic' }/>
              </div>
              <div style={ style }>
                  <DefaultButton icon={ 'business-chart' }/>
              </div>
              <div style={ style }>
                  <DefaultButton text={ 'basic' } icon={ 'business-chart' }/>
              </div>
              <div style={ style }>
                  <DefaultButton disabled text={ 'basic' } icon={ 'business-chart' }/>
              </div>
              <div style={ style }>
                  <DefaultButton outline text={ 'basic' } icon={ 'business-chart' }/>
              </div>
              <div style={ style }>
                  <DefaultButton disabled outline icon={ 'business-chart' }/>
              </div>
          </div>
          <div className={ cx(styles.column, styles.center) }>
              <div style={ style }>
                  <PrimaryButton text={ "primary" }/>
              </div>
              <div style={ style }>
                  <PrimaryButton icon={ 'business-chart' }/>
              </div>
              <div style={ style }>
                  <PrimaryButton icon={ 'business-chart' } text={ "primary/icon" }/>
              </div>
              <div style={ style }>
                  <PrimaryButton disabled icon={ 'business-chart' } text={ "primary/icon" }/>
              </div>
              <div style={ style }>
                  <PrimaryButton outline icon={ 'business-chart' } text={ "primary/icon" }/>
              </div>
              <div style={ style }>
                  <PrimaryButton outline disabled icon={ 'business-chart' }/>
              </div>
          </div>
          <div className={ cx(styles.column, styles.center) }>
              <div style={ style }>
                  <SuccessButton text={ "primary" }/>
              </div>
              <div style={ style }>
                  <SuccessButton icon={ 'business-chart' }/>
              </div>
              <div style={ style }>
                  <SuccessButton icon={ 'business-chart' } text={ "primary/icon" }/>
              </div>
              <div style={ style }>
                  <SuccessButton disabled icon={ 'business-chart' } text={ "primary/icon" }/>
              </div>
              <div style={ style }>
                  <SuccessButton outline icon={ 'business-chart' } text={ "primary/icon" }/>
              </div>
              <div style={ style }>
                  <SuccessButton outline disabled icon={ 'business-chart' }/>
              </div>
          </div>
          <div className={ cx(styles.column, styles.center) }>
              <div style={ style }>
                  <InfoButton text={ "info" }/>
              </div>
              <div style={ style }>
                  <InfoButton icon={ 'business-chart' }/>
              </div>
              <div style={ style }>
                  <InfoButton icon={ 'business-chart' } text={ "info/icon" }/>
              </div>
              <div style={ style }>
                  <InfoButton disabled icon={ 'business-chart' } text={ "info/icon" }/>
              </div>
              <div style={ style }>
                  <InfoButton outline icon={ 'business-chart' } text={ "info/icon" }/>
              </div>
              <div style={ style }>
                  <InfoButton outline disabled icon={ 'business-chart' }/>
              </div>
          </div>
          <div className={ cx(styles.column, styles.center) }>
              <div style={ style }>
                  <WarningButton text={ "warning" }/>
              </div>
              <div style={ style }>
                  <WarningButton icon={ 'business-chart' }/>
              </div>
              <div style={ style }>
                  <WarningButton icon={ 'business-chart' } text={ "warning/icon" }/>
              </div>
              <div style={ style }>
                  <WarningButton disabled icon={ 'business-chart' } text={ "warning/icon" }/>
              </div>
              <div style={ style }>
                  <WarningButton outline icon={ 'business-chart' } text={ "warning/icon" }/>
              </div>
              <div style={ style }>
                  <WarningButton outline disabled icon={ 'business-chart' }/>
              </div>
          </div>
          <div className={ cx(styles.column, styles.center) }>
              <div style={ style }>
                  <DangerButton text={ "primary" }/>
              </div>
              <div style={ style }>
                  <DangerButton icon={ 'business-chart' }/>
              </div>
              <div style={ style }>
                  <DangerButton icon={ 'business-chart' } text={ "primary/icon" }/>
              </div>
              <div style={ style }>
                  <DangerButton disabled icon={ 'business-chart' } text={ "primary/icon" }/>
              </div>
              <div style={ style }>
                  <DangerButton outline icon={ 'business-chart' } text={ "primary/icon" }/>
              </div>
              <div style={ style }>
                  <DangerButton outline disabled icon={ 'business-chart' }/>
              </div>
          </div>
          <div className={ cx(styles.column, styles.center) }>
              <div style={ style }>
                  <PrimaryButton round text={ "primary" }/>
              </div>
              <div style={ style }>
                  <WarningButton round icon={ 'business-chart' }/>
              </div>
              <div style={ style }>
                  <InfoButton round icon={ 'business-chart' } text={ "primary/icon" }/>
              </div>
              <div style={ style }>
                  <DangerButton round disabled icon={ 'business-chart' } text={ "primary/icon" }/>
              </div>
              <div style={ style }>
                  <BasicButton round outline icon={ 'business-chart' } text={ "primary/icon" }/>
              </div>
              <div style={ style }>
                  <PrimaryButton round outline disabled icon={ 'business-chart' }/>
              </div>
          </div>
          <div className={ cx(styles.column, styles.center) }>
              <div style={ style }>
                  <PrimaryButton size={ 2 } round text={ "primary" }/>
              </div>
              <div style={ style }>
                  <WarningButton size={ 3 } round icon={ 'business-chart' }/>
              </div>
              <div style={ style }>
                  <InfoButton size={ 4 } round icon={ 'business-chart' } text={ "primary/icon" }/>
              </div>
              <div style={ style }>
                  <DangerButton size={ 5 } round disabled icon={ 'business-chart' } text={ "primary/icon" }/>
              </div>
              <div style={ style }>
                  <BasicButton round outline icon={ 'business-chart' } text={ "primary/icon" }/>
              </div>
              <div style={ style }>
                  <PrimaryButton round outline disabled icon={ 'business-chart' }/>
              </div>
          </div>
          <div className={ cx(styles.column, styles.center) }>
              <div style={ style }>
                  <ButtonsGroup>
                      <PrimaryButton text={ "primary" }/>
                      <BasicButton text={ 'basic' }/>
                      <InfoButton text={ " info" } icon={ 'business-chart' }/>
                      <DangerButton outline icon={ 'business-chart' }/>
                      <DangerButton outline disabled text={ 'disabled' }/>
                  </ButtonsGroup>
              </div>
          </div>
      </Fragment>
    )
}

export {
    PrimaryButtons
}
