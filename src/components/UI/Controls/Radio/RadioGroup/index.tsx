import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import { RadioButton } from '../RadioButton';
import styles from './styles.scss';
import cx from 'classnames';
import { IControlsColors } from 'components/UI/Controls/i';

interface IRadioValue {
    label?: string;
    value: string;
};

interface IRadioGroupProps {
    color?: IControlsColors;
    groupName: string;
    values: IRadioValue[];
    selectedValue?: any;
    disabled?: boolean;
    required?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
};

const RadioGroup: FC<IRadioGroupProps> = (props) => {
    const {
        color,
        groupName,
        values,
        selectedValue,
        disabled = false,
        required = false,
        onChange,
        className
    } = props;

    const [selected, setSelected] = useState(selectedValue);

    useEffect(() => {
        setSelected(selectedValue);
    }, [selectedValue]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setSelected(e.target.value);
        onChange && onChange(e);
    };

    return (
        <div className={ cx(styles.basicRadioGroupContainer, className) } >
            {values.map((el, i) => {
                return <RadioButton
                    key={ `${groupName}-${el}-${i}` }
                    color={ color }
                    label={ el.label }
                    inputName={ groupName }
                    inputValue={ el.value }
                    checked={ el.value === selected }
                    disabled={ disabled }
                    required={ required }
                    onChange={ onChangeHandler }
                    className={ className }
                />
            })}
        </div>
    );
}

export { RadioGroup };
