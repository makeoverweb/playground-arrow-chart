import React, { FC } from 'react';
import cx from 'classnames';
import styles from './style.scss';

interface ISpinner {
    className?: string;
    size?: number;
}

export const SpinnerNew: FC<ISpinner> = ({ className, size }) =>
    <span className={ cx(styles.spinner, { [styles[`m${size}`]]: true }, className) } />;