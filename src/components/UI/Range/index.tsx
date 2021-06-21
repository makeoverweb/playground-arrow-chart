import React, { useEffect, useState } from "react"
import { getTrackBackground, Range as R } from 'react-range'
import styles from './styles.scss'
import { isArray, isEmpty } from 'lodash'

export interface IRangeProps {
    step?: number
    min?: number
    max?: number
    value?: Array<number> | Object,
    onChange?: (value: any) => void
    measureUnit?: string
}

const Range: React.FC<IRangeProps> = (
  {
      step = 1,
      min = 0,
      max = 100,
      value = [ 0, 100 ],
      onChange,
      measureUnit = '%'
  }) => {

    const arrValue = isArray(value) ? value : Object.values(value)

    const parseValues = (value) => {
        return value.map((item, index) => {
            if (isEmpty(`${ item }`)) {
                if (index === 0) {
                    return 0
                } else if (index === value.length - 1) {
                    return 100
                }
                return 50
            }
            return item
        })
    }

    const parseResult = (arr, obj) => {
        if (isArray(obj)) {
            return arr
        }
        let i = 0
        for (let val in obj) {
            obj[val] = arr[i]
            i++
        }
        return obj
    }

    const [ values, setValues ] = useState(parseValues(arrValue))
    useEffect(() => {
        setValues(parseValues(arrValue))
    }, [value])

    return (
      <div
        className={ styles.rangeContainer }
      >
          <div className={ styles.minLabel }>{ `${ min } ${ measureUnit }` }</div>
          <div className={ styles.maxLabel }>{ `${ max } ${ measureUnit }` }</div>
          <R
            values={ values }
            step={ step }
            min={ min }
            max={ max }
            onChange={ (newVal) => {
                setValues(newVal)
                onChange && onChange(parseResult(newVal, value))
            } }
            renderTrack={ ({ props, children }) => (
              <div
                className={ styles.truckContainer }
                onMouseDown={ props.onMouseDown }
                onTouchStart={ props.onTouchStart }
                style={ {
                    ...props.style,
                } }
              >
                  <div
                    className={ styles.truck }
                    ref={ props.ref }
                    style={ {
                        background: getTrackBackground({
                            values: values,
                            colors: [ '#ccc', '#548BF4', '#ccc' ],
                            min: min,
                            max: max
                        }),
                    } }
                  >
                      { children }
                  </div>
              </div>
            ) }
            renderThumb={ ({ index, props }) => (
              <div
                className={ styles.thumbContainer }
                { ...props }
              >
                  <div
                    className={ styles.label }
                  >
                      { `${ values[index] }${ measureUnit }` }
                  </div>
              </div>
            ) }
          />
      </div>)
}

export {
    Range
}