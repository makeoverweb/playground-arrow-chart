import React, { useState, useEffect } from 'react'
import Downshift from 'downshift'
import styles from './styles.scss'
import cx from 'classnames'
import { Icon } from 'components/UI/Icon'
import { Highlight } from "../Highlight"
import { get, isEmpty } from 'lodash'

export interface ISearchProps {
    items?: Array<any>
    placeholder?: string
    label?: string
    onSearch?: (filter: any) => any
    onChange?: (selection: any) => any
    onReset?: () => any,
    searchFields?: Array<string>,
    keyName?: string,
    itemName?: string,
    className?: string,
    initialItem?: string | { value: string, key: string }
    theme?: SearchType,
    renderResults?: (items: any, getItemProps: any, inputValue: string, highlightedIndex: any, selectedItem: string, keyName?: string) => React.ReactNode
    isMinimized?: boolean,
    autoHide?: boolean,
    saveSelection?: boolean
}

export enum SearchType {
    box = 'box',
    line = 'line'
}

export const Search: React.FC<ISearchProps> = (
  {
      items,
      onSearch,
      onChange,
      keyName,
      placeholder,
      label,
      className,
      itemName,
      initialItem,
      theme,
      renderResults,
      isMinimized = false,
      autoHide = false,
      onReset,
      saveSelection
  }) => {


    const renderItems = renderResults ? renderResults : (
      items,
      getItemProps,
      inputValue,
      highlightedIndex,
      selectedItem,
      keyName
    ) => {
        return items.map((item, index) => (
          <li
            className={ cx(styles.item, {
                [styles.isActive]: highlightedIndex === index,
                [styles.isSelected]: selectedItem === item
            }) }
            key={ keyName ? item[keyName] : item }
            { ...getItemProps({
                item,
                index,
            }) }
          >
              <Highlight search={ inputValue }>{ itemName ? item[itemName] : item }</Highlight>
          </li>
        ))
    }


    const refSelect = React.createRef<HTMLUListElement>()
    const refDiv = React.createRef<HTMLDivElement>()

    const [ isShow, setIsShow ] = useState(false)
    const [ isUp, setIsUp ] = useState(false)
    const [ isFocus, toggleFocus ] = useState(false)
    const [ minimized, toggleMinimize ] = useState(isMinimized)

    const [ value, setValue ] = useState()

    useEffect(() => {
        toggleMinimize(isMinimized)
    }, [ isMinimized ])

    const onFocus = () => {
        toggleFocus(true)
    }
    const onBlur = () => {
        toggleFocus(false)
    }

    useEffect(() => {
        if (isShow) {
            const nodeSelect = refSelect.current
            const nodeSelectProps = nodeSelect.getBoundingClientRect()
            const nodeSelectHeight = nodeSelectProps.height

            const nodeDiv = refDiv.current
            const nodeDivProps = nodeDiv.getBoundingClientRect()
            const nodeDivOffsetTop = nodeDivProps.top
            const windowHeight = window.innerHeight
            if (windowHeight - nodeDivOffsetTop < nodeSelectHeight) setIsUp(true)
            else setIsUp(false)
        }
    }, [ isShow, refDiv, refSelect ])


    return (
      <Downshift
        onStateChange={ (state) => {
            if (state.inputValue !== undefined) {
                setValue(state.inputValue)
            }
            if (state.isOpen) {
                setIsShow(true)
            } else {
                setIsShow(false)
            }
        } }
        initialSelectedItem={ initialItem }
        onOuterClick={ (state) => {
            if (autoHide && isEmpty(value)) {
                toggleMinimize(true)
            }
            saveSelection ? state.setState({ inputValue: value} ) : onReset()
        } }
            onChange={ onChange }
            itemToString={ (i) => itemName ? get(i, itemName) : i }
            onInputValueChange={ onSearch }
            >{ ({
            getLabelProps,
            getInputProps,
            getToggleButtonProps,
            getMenuProps,
            getItemProps,
            isOpen,
            clearSelection,
            selectedItem,
            inputValue,
            highlightedIndex,
        }) => {
            const { value, ...inputProps } = getInputProps({ placeholder, onFocus, onBlur })

            const reset = () => {
            clearSelection()
            onReset && onReset()
            setValue('')
        }

            return (
            <div
            className={ cx(styles.inputSelectWrapper, { [styles[theme]]: theme }, { [styles.minimized]: minimized }, className) }>
            { label && <label className={ styles.label } { ...getLabelProps() }>{ label }</label> }
            <div ref={ refDiv } className={ styles.relative }>
            <input
            className={ cx(styles.input, { [styles.isOpen]: isOpen }) }
            { ...inputProps }
            value={ value || '' }
            />
            <Icon onClick={ () => !minimized && toggleMinimize(true) }
            className={ cx(styles.searchIcon, { [styles.focus]: isFocus }) }
            name={ 'internet-search' }/>
            { selectedItem ? (
              <button
                key={ 1 }
                className={ cx(styles.controllerButton, { [styles.focus]: isFocus }) }
                onClick={ reset }
                aria-label="clear selection"
              >
                  <Icon name={ 'signs-delete-close' }/>
              </button>
            ) : (
              <button
                key={ 2 }
                className={ cx(styles.controllerButton, { [styles.focus]: isFocus }) }
                { ...getToggleButtonProps() }
              >
                  <Icon className={ styles.resetBtn }
                        onClick={ () => !value ? toggleMinimize(!minimized) : reset() }
                        name={ minimized ? 'internet-search' : inputValue ? 'signs-delete-close' : 'arrows-right-a' }/>
              </button>
            ) }
            </div>
            <div className={ cx(styles.baseMenuWrapper, { [styles.isOpen]: isOpen, [styles.toUp]: isUp }) }>
            <ul
            className={ cx(styles.baseMenu, { [styles.isOpen]: isOpen, [styles.toUp]: isUp }) }
            { ...getMenuProps({ open: isOpen }, { suppressRefError: true }) }
            ref={ refSelect }
            >
            {
                renderItems(items, getItemProps, inputValue, highlightedIndex, selectedItem, keyName)
            }
            </ul>
            </div>
            </div>
            )
        } }
            </Downshift>
            )
            }