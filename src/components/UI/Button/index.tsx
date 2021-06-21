import React, { CSSProperties } from 'react'
import { ShouldRender } from 'utils/render'
import { Icon } from 'components/UI/Icon'
import styles from './styles.scss'
import { omit, get } from 'lodash'
import cx from 'classnames'

interface IButton {
    className?: string
    style?: CSSProperties
    addClass?: string
    width?: number
    height?: number
    text?: React.ReactNode
    children?: React.ReactNode
    type?: 'submit' | 'reset' | 'button'
    outline?: boolean
    withoutBorders?: boolean
    round?: boolean
    size?: number
    active?: boolean
}

const BasicButton: React.ElementType<IButton> = (props: IButton) => {
    const style = { width: props.width, height: props.height, ...props.style }
    const className = cx(styles.basicBtn, props.className, {
        [styles.active]: props.active,
        [styles.outlineBtn]: props.outline,
        [styles.roundBtn]: props.round,
        [styles.withoutBorder] : props.withoutBorders,
        [styles[`s${ get(props, 'size', 1) }`]]: props.size
    })
    const newProps = omit(props, [ 'outline', 'round', 'withoutBorders' ])
    return (
      <button { ...newProps } type={ props.type } style={ style } className={ className }>
          { props.children || props.text }
      </button>
    )
}

interface ITextIconButton extends IButton {
    customIcon?: React.ElementType
    icon?: string
    iconStyle?: CSSProperties
    textStyle?: CSSProperties
    style?: CSSProperties
}

const DefaultButton: React.ElementType<ITextIconButton> = (props: ITextIconButton) => {
    const style = { width: props.width, height: props.height }
    return (
      <BasicButton { ...props }
                   className={ cx(styles.textIconBtn, { [props.className]: props.className }) }
                   style={ style }>
          <ShouldRender if={ !props.customIcon && props.icon }>
              <Icon className={ props.icon } style={ props.iconStyle } name={ props.icon }/>
          </ShouldRender>
          <ShouldRender if={ props.customIcon }>
              { props.customIcon }
          </ShouldRender>
          { props.text && <span className={ styles.textBtn } style={ props.textStyle }>{ props.text }</span> }
      </BasicButton>
    )
}

const PrimaryButton: React.ElementType<ITextIconButton> = (props: ITextIconButton) => {
    const className = cx(styles.primaryBtn, { [props.className]: props.className })
    return props.icon ? <DefaultButton { ...props } className={ className }/> :
      <BasicButton { ...props } className={ className }/>
}

const SuccessButton: React.ElementType<ITextIconButton> = (props: ITextIconButton) => {
    const className = cx(styles.successBtn, { [props.className]: props.className })
    return props.icon ? <DefaultButton { ...props } className={ className }/> :
      <BasicButton { ...props } className={ className }/>
}

const InfoButton: React.ElementType<ITextIconButton> = (props: ITextIconButton) => {
    const className = cx(styles.infoBtn, { [props.className]: props.className })
    return props.icon ? <DefaultButton { ...props } className={ className }/> :
      <BasicButton { ...props } className={ className }/>
}

const WarningButton: React.ElementType<ITextIconButton> = (props: ITextIconButton) => {
    const className = cx(styles.warningBtn, { [props.className]: props.className })
    return props.icon ? <DefaultButton { ...props } className={ className }/> :
      <BasicButton { ...props } className={ className }/>
}

const DangerButton: React.ElementType<ITextIconButton> = (props: ITextIconButton) => {
    const className = cx(styles.dangerBtn, { [props.className]: props.className })
    return props.icon ? <DefaultButton { ...props } className={ className }/> :
      <BasicButton { ...props } className={ className }/>
}

const SecondaryButton: React.ElementType<ITextIconButton> = (props: ITextIconButton) => {
    const className = cx(styles.secondaryBtn, { [props.className]: props.className })
    return props.icon ? <DefaultButton { ...props } className={ className }/> :
      <BasicButton { ...props } className={ className }/>
}

interface IButtonsGroup {
    className?: string
    children?: React.ReactNode
}

const ButtonsGroup: React.ElementType<IButtonsGroup> = (props: IButtonsGroup) => {
    return <div className={ cx(styles.groupBtn, props.className) }>
        { props.children }
    </div>
}

export {
    BasicButton,
    PrimaryButton,
    DangerButton,
    SuccessButton,
    WarningButton,
    InfoButton,
    DefaultButton,
    SecondaryButton,
    ButtonsGroup
}
