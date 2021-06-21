import React, { useState, useEffect, useCallback } from 'react'
import Downshift from 'downshift'
import styles from "./styles.scss"
import cx from 'classnames'
import { get } from 'lodash';
import { Icon } from "components/UI/Icon"

interface ISelectedItem {
  value: number;
  label: string;
  isCustomRange?: boolean;
}

export const Select = (props) => {
  const {
    disabled,
    handle,
    options,
    threshold,
    default:
      {
        value: defaultValue,
        label: defaultPlaceholder,
        isCustomRange
      } = {
            value: props.options[0].value,
            label: props.options[0].label,
            isCustomRange: false
          },
  } = props;

  const [firstValue, setFirstValue] = useState(null);
  const [firstLabel, setFirstLabel] = useState(null);

  const [selectedItem, setSelectedItem] = useState<ISelectedItem>({
    value: defaultValue,
    label: defaultPlaceholder,
  });
  const [height, setHeight] = useState(null);
  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.offsetHeight * options.length);
    }
    
    const value = get(selectedItem, 'value', false) ? selectedItem.value : defaultValue;
    
    handle(threshold ? threshold(value, defaultValue) : value);
  }, [selectedItem, defaultValue, handle, options.length]);

  const handleStateChange = (state, changes) => {
    if (state.hasOwnProperty('selectedItem')) {
      if( state.selectedItem.isCustomRange ) {
        setSelectedItem({value: selectedItem.value, label: '', isCustomRange: true});
      }else {
        setSelectedItem(state.selectedItem);
      }
    } else if ( state.hasOwnProperty('inputValue'))  {
      if( selectedItem.isCustomRange ) {
        changes.setState({isOpen: false});
        setSelectedItem({value: state.inputValue, label: state.inputValue, isCustomRange: true});
      }
    }
  }
  const itemToString = item => item ? item.label : '';

  useEffect(() => {
    if (firstValue === null || firstLabel === null) {
      setFirstValue(defaultValue);
      setFirstLabel(defaultPlaceholder);
    }
    setSelectedItem(
      isCustomRange
        ? { value: defaultValue, label: defaultPlaceholder, isCustomRange }
        : { value: defaultValue, label: defaultPlaceholder }
    );
  }, [defaultValue, defaultPlaceholder, isCustomRange, props.options, firstLabel, firstValue]);

  return (
    (
      defaultValue
    ) ? (
      <Downshift
      selectedItem={selectedItem}
      itemToString={itemToString}
      onStateChange={handleStateChange}
      initialInputValue={defaultValue.toString()}
      >
        {({
          getInputProps,
          getMenuProps,
          getItemProps,
          isOpen,
          highlightedIndex,
          getToggleButtonProps,
          inputValue,
          selectedItem,
        }) => (
          <div 
            className={styles.content}
          >
            <div 
              className={styles.inputWrapper}  
              {...getToggleButtonProps({ disabled })}
            >
              <input
                className={cx(styles.input, { [styles.disabled]: disabled })}
                readOnly={ !selectedItem.isCustomRange }
                {...getInputProps({ disabled })}
              />
              <div 
                className={cx(styles.icon, {[styles.iconClose]: !selectedItem.isCustomRange})}
                onClick={() => {setSelectedItem({value: firstValue, label: firstLabel})}}
              >
                <span className={cx(styles.iconLine, {[styles.disabled]: disabled})} />
                <span className={cx(styles.iconLine, {[styles.disabled]: disabled})} />
              </div>
            </div>
            <ul 
              className={cx(styles.dropdown, {[styles.dropdownActive]: isOpen})}
              {...getMenuProps()}
              style={{
                'height': isOpen ? `${height}px` : '',
              }}
            >
              {options
                .map((item, index) => (
                  <li
                    className={cx(styles.item, {[styles.itemHover]: highlightedIndex === index, [styles.itemActive]: item.label === inputValue})}
                    {...getItemProps({
                      item,
                      index,
                      key: index
                    })}
                    ref={measuredRef}
                  >
                    {itemToString(item)}
                    {get(selectedItem, 'value') === item.value ? <Icon name='signs-done-check-c' /> : null}
                  </li>
              ))}
            </ul>
          </div>
        )}
      </Downshift>
    ) : null
  )
}
