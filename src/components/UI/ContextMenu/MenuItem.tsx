import React from 'react'
import { Icon } from "../Icon"
import styles from './styles.scss'


export interface IMenuItemProps {
    label: string
    onClick?: (e: any) => any
    icon?: string
}

export const MenuItem: React.FC<IMenuItemProps> = (item) => {
    const {
        label,
        icon,
        onClick,
    } = item

    return (
      <span
        className={ styles.menuItem}
        onClick={ onClick }
        key={ label }
      >
      { icon && <Icon name={ icon }/> }
          { label }
      </span>
    )
}