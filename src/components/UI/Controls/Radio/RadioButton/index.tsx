// TODO: закомментировал части, отвечающие за подсветку (в будущем они будут использоваться)
import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import styles from './styles.scss';
import cx from 'classnames';
import { IControlsColors } from 'components/UI/Controls/i';

interface IRadioButtonProps {
    color?: IControlsColors;
    label?: string;
    inputName: string;
    inputValue: string;
    checked?: boolean;
    disabled?: boolean;
    required?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
};

const RadioButton: FC<IRadioButtonProps> = (props) => {
    const {
        color,
        label,
        inputName,
        inputValue,
        checked = false,
        disabled = false,
        required = false,
        onChange,
        className
    } = props;

    const [isChecked, setIsChecked] = useState<boolean>(checked);
    // const [isFocus, setIsFocus] = useState<boolean>(false);

    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setIsChecked(isChecked => !isChecked);
        onChange && onChange(e);
    };

    const statusClass = {
        [styles[color]]: true,
        [styles.checked]: isChecked,
        [styles.disabled]: disabled,
        // [styles.focus]: isFocus
    };

    return (
        <label>
            <div className={ cx(styles.basicRadioButtonContainer, className) } >
                <div className={ cx(styles.basicRadioButtonIconContainer, statusClass) }>
                    { isChecked && <div className={ cx(styles.basicRadioButtonIcon, statusClass) } /> }
                </div>
                {label && <div className={ styles.basicRadioButtonLabel }>{label}</div>}
                <input
                    type="radio"
                    name={ inputName }
                    value={ inputValue }
                    checked={ isChecked }
                    disabled={ disabled }
                    required={ required }
                    className={ styles.basicRadioButtonInput }
                    onChange={ onChangeHandler }
                    // onFocus={ () => setIsFocus(true) }
                    // onBlur={ () => setIsFocus(false) }
                />
            </div>
        </label>
    );
}

export { RadioButton };
