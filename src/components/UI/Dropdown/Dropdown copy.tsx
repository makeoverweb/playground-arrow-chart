import React, { useState, useEffect } from 'react'
import Downshift from 'downshift'
import styles from './styles.scss'
import cx from 'classnames'
import { Icon } from 'components/UI/Icon'
import matchSorter from 'match-sorter'
import { Highlight } from "../Highlight/Highlight"
import { get } from 'lodash'

export interface IInputSelectProps {
    items: Array<any>
    placeholder?: string
    label?: string
    onChange: (selection: any) => any
    searchFields?: Array<string>,
    keyName?: string,
    itemName?: string,
    className?: string,
    initialItem?: string | { value: string, key: string }
}

export const Dropdown: React.FC<IInputSelectProps> = ({ items, onChange, searchFields, keyName, placeholder, label, className, itemName, initialItem }) => {

    const getItems = (filter: string) => {
        return filter ? matchSorter(items, filter, searchFields && searchFields.length > 0 ? { keys: searchFields } : {}) : items
    }

    const refSelect = React.createRef<HTMLUListElement>();
    const refDiv = React.createRef<HTMLDivElement>();

    const [isShow, setIsShow] = useState(false);
    const [isUp, setIsUp] = useState(false);

    useEffect(() => {
        if(isShow) {
          const nodeSelect = refSelect.current; 
          const nodeSelectProps = nodeSelect.getBoundingClientRect();
          const nodeSelectHeight = nodeSelectProps.height;

          const nodeDiv = refDiv.current; 
          const nodeDivProps = nodeDiv.getBoundingClientRect();
          const nodeDivOffsetTop = nodeDivProps.top;  

          const windowHeight = window.innerHeight;

          if(windowHeight - nodeDivOffsetTop < nodeSelectHeight) setIsUp(true);
            else setIsUp(false);
        }
    }, [isShow, refDiv, refSelect])
    

    return (
      <Downshift
        onStateChange={(state) => {
          if(state.isOpen) {
            setIsShow(true);
          } else if(state.isOpen !== undefined) {
            setIsShow(false);
          }
        }}
        initialSelectedItem={ initialItem }
        onChange={ onChange }
        itemToString={ (i) => {
            return itemName ? get(i, itemName) : i
        } }
      >
          { ({
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
            }) => (
            <div 
              className={ styles.inputSelectWrapper }
            >
                { label && <label className={ styles.label } { ...getLabelProps() }>{ label }</label> }
                <div 
                  ref={refDiv}
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
                        className={ styles.controllerButton }
                        onClick={ () => clearSelection() }
                        aria-label="clear selection"
                      >
                          <Icon name={ 'arrows-right' }/>
                      </button>
                    ) : (
                      <button
                        key={ 2 }
                        className={ styles.controllerButton }
                        { ...getToggleButtonProps() }
                      >
                          { isOpen && <Icon name={ 'arrows-right' }/> }
                          { !isOpen && <Icon name={ 'arrows-right' }/> }
                      </button>
                    ) }
                </div>
                <div className={cx(styles.baseMenuWrapper, { [styles.isOpen]: isOpen, [styles.toUp]: isUp })}>
                  <ul
                      className={ cx(styles.baseMenu, { [styles.isOpen]: isOpen, [styles.toUp]: isUp }) } 
                      { ...getMenuProps({ open: isOpen }, {suppressRefError : true}) }
                      ref={refSelect}
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
                            <Highlight search={ inputValue } >{ itemName ? item[itemName] : item }</Highlight>
                          </li>
                        ))
                      }
                    </ul>
                </div>
            </div>
          ) }
      </Downshift>
    )
}

// const Menu = React.forwardRef((props, refSelect) => (
//   <ul className={ styles.baseMenu } innerRef={ refSelect } { ...props } />
// ))
