import React, { useState, useEffect } from 'react';
import { PrimaryButton } from 'components/UI/Button';
import style from './style.scss';

/**
 * @name ToggleButton
 * @extends `PrimaryButton`
 * @description Renders an icon and a text into an `PrimaryButton`.
 * @param {string} props.addClass Add extra class styles to overwrite default class.
 * @param {number} props.width Width of the button: defaults to 40.
 * @param {number} props.height Height of the button: defaults to 25.
 * @param {string} props.color Color for the toggle: defaults to #30597f.
 * @param {string} props.colorIsOff Color for the off state toggle: defaults to #4D4F5C.
 * @param {boolean} props.disabled Disables the toggle button.
 * @param {function} props.onToggle onclick event function of the button: receives the state `Boolean` of the toggle as an argument.
 * @returns {JSX.Element} A toggle button.
 */

interface IToggleButton {
    addClass?: string;
    width?: number;
    height?: number;
    color?: string;
    colorIsOff?: string;
    disabled?: boolean;
    borderRadius?: string;
    on?: boolean;
    onToggle?: (e?: boolean) => void;
}

export function ToggleButton(props: IToggleButton) {
    const [state, setState] = useState(props.on || false);
    const { width = 50, height = 25, color = '#30597f', colorIsOff, borderRadius = height * 0.5 } = props;
    const anchorHeight = height * 0.6;
    const anchorWidth = Math.min(width * 0.4, anchorHeight);
    const margin = (anchorWidth / 0.6 * (0.4 / 2) - 1);

    useEffect(() => {
        setState(props.on);
    }, [props.on]);

    const buttonStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '0',
        borderColor: props.disabled ? '#ccc' : state ? color : colorIsOff || '#4D4F5C',
        borderRadius
    }

    const spanStyle = {
        height: anchorHeight,
        width: anchorWidth,
        marginLeft: state ? `calc(100% - ${anchorWidth}px - ${margin}px)` : margin,
        backgroundColor: props.disabled ? '#ccc' : state ? color : colorIsOff || '#4D4F5C',
        borderRadius
    }

    const addClass = `${style.toggle_button} ${props.addClass || ''} ${props.disabled ? `${style.disabled}` : ''}`;

    const toggle = () => {
        if (props.disabled) return;

        setState(!state);
        props.onToggle && props.onToggle(!state);
    }

    return (
        <PrimaryButton
            style={buttonStyle}
            addClass={addClass}
            onClick={toggle}
            width={width}
            height={height}
            disabled={props.disabled}
        >
            <span style={spanStyle}></span>
        </PrimaryButton>
    )
}