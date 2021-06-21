import loadable from '@loadable/component'
import React, { CSSProperties } from "react"
import styles from './styles.scss'
import cx from 'classnames'

export const LoadableIcon = loadable<{ name: string }>(({ name }) => {
    const converted = name.split('-')
      .map((i) => {
          const [ f, ...other ] = i
          return f.toUpperCase() + other.join('')
      }).join('')

    return import(/* webpackChunkName: "icons" */ `./iconsModule/${ converted }`)
})

export interface IIconProps {
    name: string,
    onClick?: any,
    className?: string,
    text?: string
    iconStyle?: CSSProperties
    textStyle?: CSSProperties

}

export const Icon: React.FC<IIconProps> =
  (props) =>
    <span
      onClick={ props.onClick }
      className={ cx(props.className, { [styles.text]: props.text }) }
      style={ { display: "inherit", alignItems: "center", fontSize: "inherit", ...props.iconStyle } }
      key={ props.name }>
      <LoadableIcon name={ props.name }/>
        { props.text && <span style={ props.textStyle }>{ props.text }</span> }
    </span>