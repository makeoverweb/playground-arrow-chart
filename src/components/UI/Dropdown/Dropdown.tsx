import React, { useEffect, useState } from 'react'
import Downshift from 'downshift'
import styles from './styles.scss'
import cx from 'classnames'
import { Icon } from 'components/UI/Icon'
import matchSorter from 'match-sorter'
// import { Highlight } from "../Highlight/Highlight"
import { get } from 'lodash'

export interface IDropdownProps {
    items: Array<any> // ok - набор options
    placeholder?: string // ok
    label?: string // ok
    onChange: (selection: any) => any // ok
    searchFields?: Array<string>, // ok - используется для фильтрации options, соодержит массив с названием полей в котором будет искаться сопоставление
    keyName?: string, // ok - если options - объект, то keyName используется для react-key
    itemName?: string, // ok - если options - объект, то itemName используется для отображения в input
    className?: string, // ok
    initialItem?: string | { value: string, key: string } // ok
}

export const Dropdown: React.FC<IDropdownProps> = ({
                                                       items,
                                                       onChange,
                                                       searchFields,
                                                       keyName,
                                                       placeholder,
                                                       label,
                                                       className,
                                                       itemName,
                                                       initialItem
                                                   }) => {

    const getItems = (filter: string) => {
        return filter ? matchSorter(items, filter, searchFields && searchFields.length > 0 ? { keys: searchFields } : {}) : items
    }

    const refSelect = React.createRef<HTMLUListElement>()
    const refDiv = React.createRef<HTMLDivElement>()

    const [ isShow, setIsShow ] = useState(false)
    const [ isUp, setIsUp ] = useState(false)

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

    const [ selected, setSelectedItem ] = useState(items.find(item => keyName ? item[keyName] === initialItem : item === initialItem))
    const [ inputVal, setInputVal ] = useState(get(items.find(item => keyName ? item[keyName] === initialItem : item === initialItem), 'value', ""))

    useEffect(() => {
        const foundItem = items.find(item => keyName ? item[keyName] === initialItem : item === initialItem)
        setSelectedItem(foundItem)
        if(!foundItem) {
            setInputVal("")
        }
    }, [ initialItem ])

    return (
      <Downshift
        inputValue={inputVal}
        onInputValueChange={setInputVal}
        onStateChange={ (state) => {
            if (state.isOpen) {
                setIsShow(true)
            } else if (state.isOpen !== undefined) {
                setIsShow(false)
            }
        } }
        initialSelectedItem={ selected }
        onChange={ onChange }
        itemToString={ (i) => {
            return itemName ? get(i, itemName) : i
        } }
      >
          { ({
                 getLabelProps, // ok
                 getInputProps, // ok
                 getToggleButtonProps, // ok
                 getMenuProps, // ok
                 getItemProps, // ok
                 isOpen, // ok
                 clearSelection, // ok
                 selectedItem, // ok
                 inputValue, // ok
                 highlightedIndex, // ok
             }) => {
              return (
                <div
                  className={ styles.dropdownWrapper }
                >
                    { label && <label className={ styles.label } { ...getLabelProps() }>{ label }</label> }
                    <div
                      ref={ refDiv }
                      className={ styles.relative }
                    >
                        <input
                          className={ cx(styles.input, { [styles.isOpen]: isOpen }, className) }
                          { ...getInputProps({
                              placeholder
                          }) }
                        />
                        { selectedItem ? (
                          <button
                            key={ 1 }
                            className={ cx(styles.controllerButton, styles.isSelected) }
                            onClick={ (e) => {
                                e.stopPropagation()
                                clearSelection()
                            } }
                            aria-label="clear selection"
                          >
                              <Icon name={ 'signs-delete-close' }/>
                          </button>
                        ) : (
                          <button
                            key={ 2 }
                            className={ cx(styles.controllerButton, { [styles.isOpen]: isOpen }) }
                            { ...getToggleButtonProps() }
                          >
                              { isOpen && <Icon name={ 'arrows-right' }/> }
                              { !isOpen && <Icon name={ 'arrows-right' }/> }
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
                                getItems(inputValue).map((item, index) => (
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
                                      {/* <Highlight search={ inputValue } >{ itemName ? item[itemName] : item }</Highlight> */ }
                                      { itemName ? item[itemName] : item }
                                  </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
              )
          } }
      </Downshift>
    )
}
