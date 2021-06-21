// TODO: закомментировал части, отвечающие за подсветку (в будущем они будут использоваться)
import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import { Icon } from 'components/UI/Icon'
import styles from './styles.scss'
import cx from 'classnames'
import { IControlsColors } from 'components/UI/Controls/i'

interface ICheckboxProps {
    color?: IControlsColors;
    checked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    required?: boolean;
    label?: string;
    className?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<ICheckboxProps> = (props) => {
    const {
        color = 'default',
        checked = false,
        indeterminate = false,
        disabled = false,
        required = false,
        label,
        className,
        onChange,
    } = props

    const [ isChecked, setIsChecked ] = useState<boolean>(checked || indeterminate)
    const [ isIndeterminate, setIsIndeterminate ] = useState<boolean>(indeterminate)
    // const [ isFocus, setIsFocus ] = useState(false)

    useEffect(() => {
        setIsChecked(checked || indeterminate)
        setIsIndeterminate(indeterminate)
    }, [ checked, indeterminate ])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setIsChecked(isChecked => !isChecked)
        setIsIndeterminate(false)
        onChange && onChange(e)
    }

    const iconClass = cx(
      styles.basicCheckboxIconContainer,
      {
          [styles[color]]: true,
          [styles.checked]: isChecked,
          [styles.disabled]: disabled,
          [styles.indeterminate]: isIndeterminate,
          //   [styles.focus]: isFocus
      }
    )

    return (
      <div className={ cx(styles.basicCheckboxContainer, className) }>
          <label>
              <div className={ iconClass }>
                  { isChecked && <Icon className={ styles.basicCheckboxIcon }
                                       name={ isIndeterminate ? 'signs-minus-a' : 'signs-checkbox-done' }/> }
              </div>
              { label && <div className={ styles.basicCheckboxLabel }>{ label }</div> }
              <input
                type="checkbox"
                checked={ isChecked }
                disabled={ disabled }
                required={ required }
                className={ styles.basicCheckboxInput }
                onChange={ onChangeHandler }
                // onFocus={ () => setIsFocus(true) }
                // onBlur={ () => setIsFocus(false) }
              />
          </label>
      </div>
    )
}

export { Checkbox }
