import React, { CSSProperties } from "react"
import styles from './styles.scss'
import cx from 'classnames'

export enum ACTION_TYPE {
    DEFAULT = 'default',
    PRIMARY = 'primary',
    SUCCESS = 'success',
    INFO = 'info',
    DANGER = 'danger',
    SECONDARY = 'secondary',
    WARNING = 'warning'
}

export interface IBadge {
    text: string
    invert?: boolean
    type?: ACTION_TYPE
    className?: string
    onClick?: () => void
    style?: CSSProperties
}

export const Badge: React.ElementType<IBadge> = (
  {
      text,
      invert = false,
      type = ACTION_TYPE.DEFAULT,
      className,
      onClick = () => true,
      style
  }: IBadge) => {
    return <span className={ cx(styles.badgeContainer, [ styles[type] ], { [styles.invert]: invert }, className) }
                 onClick={ onClick } style={ style }>
        { text }
    </span>
}