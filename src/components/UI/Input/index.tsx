import React, { useEffect, useRef, useState } from 'react'
import { Icon } from 'components/UI/Icon'
import cx from 'classnames'
import styles from './styles.scss'

export interface IInputProps {
    className?: string
    done?: boolean
    placeholder?: string
    children?: React.ReactNode
    onChange?: (e?: React.SyntheticEvent) => void
    clearForm?: () => void
    caption?: string
    help?: string
    status?: 'success' | 'warning' | 'error' | 'spotlight'
    isHidden?: boolean
    disabled?: boolean
    disablePlaceholderOnTop?: boolean
    name?: string
    value?: string
}

const Input: React.ElementType<IInputProps> = (props: IInputProps) => {
    const [ isHidden, toggleHidden ] = useState(props.isHidden)
    const [ focus, setFocus ] = useState(false)
    const [ label, setLabel ] = useState('')
    const [ searching, setSearching ] = useState(false)
    const [ text, setText ] = useState(props.value)
    let input = useRef(null)

    useEffect(() => {
        setText(props.value)
    }, [props.value])


    const setPlaceholder = (text: string, currentValue: string = '') => {
        input.current.placeholder = text
        if (!props.disabled) {
            input.current.placeholder = text
        }
        !props.disablePlaceholderOnTop && setLabel(text.length > 0 && currentValue.length === 0 ? '' : props.placeholder)
    }

    const triggerSearchField = () => {
        if (focus) return
        setFocus(true)
        !props.disabled && setPlaceholder('')
        setTimeout(() => input.current.focus(), 100)
    }

    const clearFormValue = (e) => {
        e.stopPropagation()
        if (searching && !props.done) {
            setSearching(false)
        } else if ([ null, undefined, '' ].includes(input.current.value)) {
            setText('')
            setFocus(false)
            input.current.placeholder = props.placeholder
        } else {
            setText('')
            input.current.value = null
            input.current.focus()
        }
        if (props.clearForm) {
            props.clearForm()
        }
    }

    const className = cx(styles.inputForm, {
          [styles.disabled]: props.disabled,
          [styles[props.status]]: props.status,
          [styles.password]: props.isHidden
      },
      props.className
    )

    const controlIcon = (status: string, isHidden: boolean, isPassword: boolean) => {
        if (isPassword) return isHidden ? 'account-eye-show-visible' : 'account-eye-hidden'
        switch (status) {
            case "error":
            case 'warning':
                return 'signs-info'
            case "success":
                return 'signs-done-check'
        }
        return 'signs-done-check'
    }

    return (
      <div className={ className } onClick={ triggerSearchField }>
          <label>{ label }</label>
          <input
            value={ text }
            disabled={ props.disabled }
            type={ isHidden ? 'password' : 'text' }
            onChange={ (e) => {
                setText(e.target.value)
                if (props.onChange) props.onChange(e)
            } }
            name={ props.name }
            placeholder={ props.placeholder || 'Search' }
            required={ true }
            ref={ input }
            onBlur={ () => setPlaceholder(props.placeholder, input.current.value) }
            onFocus={ () => setPlaceholder('') }
          />
          { props.caption && <span title={ props.caption } className={ styles.caption }>{ props.caption }</span> }
          { props.help && <span title={ props.help } className={ styles.help }>{ props.help }</span> }
          { !props.status &&
          <span className={ styles.control } style={ { visibility: text && text.length > 0 ? 'visible' : 'hidden' } }
                id="close" onClick={ clearFormValue }>
              <Icon name={ "signs-delete-disabled-c" } className={ styles.status }/>
           </span>
          }
          { props.status &&
          <span className={ styles.control }>
              <Icon onClick={ (e) => props.isHidden ? toggleHidden(!isHidden) : clearFormValue(e) }
                    name={ controlIcon(props.status, isHidden, props.isHidden) } className={ cx(styles.status, {
                  [styles[props.status]]: props.status,
                  [styles.password]: props.isHidden
              }) }/>
          </span> }
      </div>
    )
}

export {
    Input
}
