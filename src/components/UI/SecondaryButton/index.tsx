import React from 'react'
import {SecondaryButton } from 'components/UI/Button'
import cx from 'classnames'


/**
 * @name NormalSecondaryButton
 * @extends `SecondaryButton`
 * @description Renders a HTML Button element
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {string} props.text Text for the button.
 * @param {string} props.icon Icon for the button.
 * @param {JSX.Element} props.children React Elements
 * @param {function} props.onClick onclick event function of the button.
 * @return {JSX.Element} A `SecondaryButton` with normal style.
 */
const NormalSecondaryButton = (props) => {
    const className = cx("normal-secondary-button", { [props.className]: props.className })
    return (
      <SecondaryButton { ...props } className={ className } text={ props.text }/>
    )
}

/**
 * @name SuccessSecondaryButton
 * @extends `SecondaryButton`
 * @description Renders a HTML Button element
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {string} props.text Text for the button.
 * @param {JSX.Element} props.children React Elements
 * @param {function} props.onClick onclick event function of the button.
 * @return {JSX.Element} A `SecondaryButton` with success style.
 */
const SuccessSecondaryButton = (props) => {
    const className = cx("success-secondary-button", { [props.className]: props.className })
    return (
      <SecondaryButton { ...props } className={ className } text={ props.text }/>
    )
}

/**
 * @name DangerSecondaryButton
 * @extends `SecondaryButton`
 * @description Renders a HTML Button element
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {string} props.text Text for the button.
 * @param {JSX.Element} props.children React Elements
 * @param {function} props.onClick onclick event function of the button.
 * @return {JSX.Element} A `SecondaryButton` with danger style.
 */
const DangerSecondaryButton = (props) => {
    const className = cx("danger-secondary-button", { [props.className]: props.className })
    return (
      <SecondaryButton { ...props } className={ className } text={ props.text }/>
    )
}

export {
    SecondaryButton,
    SuccessSecondaryButton,
    DangerSecondaryButton,
    NormalSecondaryButton,
}
