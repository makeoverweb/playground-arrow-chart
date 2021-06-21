// TODO: закомментировал части, отвечающие за подсветку (в будущем они будут использоваться)
import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import { Icon } from 'components/UI/Icon';
import styles from './styles.scss';
import cx from 'classnames';
import { IControlsColors } from 'components/UI/Controls/i';

interface IToggleProps {
    color?: IControlsColors;
    isOn?: boolean;
    disabled?: boolean;
    className?: string;
    onToggle?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Toggle: FC<IToggleProps> = (props) => {
    const {
        color,
        isOn = false,
        disabled = false,
        className,
        onToggle
    } = props;

    const [isNowOn, setIsNowOn] = useState<boolean>(isOn);
    // const [isFocus, setIsFocus] = useState<boolean>(false);

    useEffect(() => {
        setIsNowOn(isOn);
    }, [isOn]);

    const onToggleHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setIsNowOn(isNowOn => !isNowOn);
        onToggle && onToggle(e);
    };

    const toggleContainer = cx(
        styles.basicToggleContainer,
        {
            [styles[color]]: true,
            [styles.isNowOn]: isNowOn,
            [styles.disabled]: disabled,
            // [styles.focus]: isFocus
        },
        className
    );

    return (
        <label>
            <div className={ toggleContainer } >
                <div className={ styles.toggleSwitch }>
                    { isNowOn && <Icon className={ styles.toggleIcon } name='signs-checkbox-done' /> }
                </div>
                <input
                    type="checkbox"
                    checked={ isNowOn }
                    disabled={ disabled }
                    className={ styles.basicToggleInput }
                    onChange={ onToggleHandler }
                    // onFocus={ () => setIsFocus(true) }
                    // onBlur={ () => setIsFocus(false) }
                />
            </div>
        </label>
    );
}

export { Toggle };
