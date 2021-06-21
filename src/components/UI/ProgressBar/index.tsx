import React from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import colorVar from '../../../static/styles/colors.scss'
import styles from './styles.scss'
import cx from 'classnames'
import { isNaN, isUndefined } from 'lodash'
import { t } from "@lingui/macro"
import { loc } from "../../../utils/i18n"

/**
 * @name ProgressBar
 * @description Renders a circular progressbar with children HTML elements
 * @param {number} percent number equal progress level
 * @returns {JSX.Element} A ProgressBar component
 */
interface IProgressBarProps {
    value?: number
    size?: number
    text?: string
}

const ProgressBar: React.FC<IProgressBarProps> = ({ value = 0, size = 2, text }: IProgressBarProps) => {
    const isIncorrect = isNaN(value) || isUndefined(value)
    let color = 'none'
    switch (true) {
        case value === 0 || isIncorrect:
            break
        case value > 0 && value < 30:
            color = 'danger500'
            break
        case value > 30 && value < 50:
            color = 'warning600'
            break
        case value >= 50 && value < 100:
        default:
            color = 'success700'
            break
    }


    return (
      <div className={ cx(styles.progressBar, styles[`s${ size }`]) } title={ text }>
          <CircularProgressbarWithChildren
            value={ value }
            strokeWidth={ 6 }
            styles={ {
                root: {
                    display: 'block',
                },
                path: {
                    strokeLinecap: 'round',
                    stroke: colorVar[color],
                },
                trail: {
                    stroke: colorVar['basic030']
                },
            } }
          >
              <div className={ styles.count }>
                  <div className={ styles.countPercent }>
                      {
                          isIncorrect && <div>{ loc._(t`basic.noDataShort`)}</div>
                      }
                      {
                          !isIncorrect && <>
                              <span className={ styles.countData }>{ value }</span>
                              <span className={ styles.countMeasure }>%</span>
                          </>
                      }
                  </div>
                  { text && <div className={ styles.countText }>{ text }</div> }
              </div>
          </CircularProgressbarWithChildren>
      </div>)
}

export default ProgressBar