import React, { Fragment } from "react"
import styles from './styles.scss'
import cx from 'classnames'
import { Input } from "components/UI/Input"
import { InputSelect } from "components/UI/InputSelect"

const style = {
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center'
}


const InputFields = () => {
    return (
      <Fragment>
          <div className={ cx(styles.column, styles.center) }>
              Input fields
          </div>
          <div className={ cx(styles.column, styles.center) }>
              <div style={ style }>
                  <Input placeholder={ "Input anything" } caption={ 'das das dsdas sa asdas ' }
                         help={ 'fdfsd das dsad sad ' }/>
              </div>
              <div style={ style }>
                  <Input status={ "success" } placeholder={ "Input anything" } caption={ 'das das dsdas sa asdas ' }
                         help={ 'fdfsd das dsad sad ' }/>
              </div>
              <div style={ style }>
                  <Input status={ "warning" } placeholder={ "Input anything" } caption={ 'das das dsdas sa asdas ' }
                         help={ 'fdfsd das dsad sad ' }/>
              </div>
              <div style={ style }>
                  <Input status={ "error" } placeholder={ "Input anything" } caption={ 'das das dsdas sa asdas ' }
                         help={ 'fdfsd das dsad sad ' }/>
              </div>
          </div>
          <div className={ cx(styles.column, styles.center) }>
              <div style={ style }>
                  <Input status={ "spotlight" } placeholder={ "Input anything" } caption={ 'das das dsdas sa asdas ' }
                         help={ 'fdfsd das dsad sad ' }/>
              </div>
              <div style={ style }>
                  <Input isHidden  status={ "error" } placeholder={ "Input anything" } caption={ 'das das dsdas sa asdas ' }
                         help={ 'fdfsd das dsad sad ' }/>
              </div>
          </div>
          <div className={ cx(styles.column, styles.center) }>
              <div style={ style }>
                  <InputSelect placeholder={ "input anything" } label="Input"
                               items={ [ 'one', 'two', 'three', 'four', 'fourrrrrr' ] }
                               onChange={ (selection => console.log(selection)) }
                  />
              </div>
          </div>
      </Fragment>
    )
}

export {
    InputFields
}
