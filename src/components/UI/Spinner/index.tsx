import React, { useState, useEffect } from 'react'
import styles from './style.scss'
import cx from 'classnames'

/**
 * @name Spinner
 * @extends `IconButton`
 * @description Renders a `Spinner` component into an `IconButton`.
 * @param {string} props.className The default class of the button.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button.
 * @param {number} props.height Height of the button.
 * @param {number} props.size The size of the width and height of the `Spinner`.
 * @param {string} props.color A single color for the `Spinner`.
 * @param {[string]} props.colors An array of color hex strings for the `Spinner`. It overides `props.color`.
 * @param {string} props.duration The duration of a complete revolution of the `Spinner` in seconds.
 * @param {number} props.depth The thickness of the `Spinner` border.
 * @param {function} props.onClick onclick event function of the button.
 * @return {JSX.Element} A rotating spinner icon.
 */

interface ISpinner {
    className?: string,
    // addClass?: string,
    width?: number,
    height?: number,
    size?: number,
    color?:  string,
    colors?: string[],
    duration?: string,
    depth?: string,
    thickness?: number,
    onClick?: (e?: React.SyntheticEvent) => void,
}
const Spinner = (props: ISpinner): JSX.Element => {
    const [ counter, setCounter ] = useState(0)

    useEffect(() => {
        const x = setTimeout(() => {
            setCounter(counter + 1)
        }, +props.duration || 450)

        return () => {
            clearTimeout(x)
        }
    })

    // const className = `${ props.addClass || '' }`

    const color = props.colors
        ? `${ props.colors[counter % props.colors.length] } `
        : props.color || '#3b73ff'

    const style = {
        borderColor: `${ color.repeat(3) } transparent`,
        width: props.size || 24,
        height: props.size || 24,
        animationDuration: props.duration,
        borderWidth: props.thickness || 1,
        borderStyle: 'solid'
    }

    return (
        <span className={ cx(styles.spinner, props.className) } style={ style } />
    )
}

export { Spinner }
