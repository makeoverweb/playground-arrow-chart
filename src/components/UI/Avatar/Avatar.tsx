import React from "react"
import styles from './styles.scss'
import cx from 'classnames'

export interface IAvatar {
    url: string,
    status?: 'on' | 'off'
    size?: number
    alt?: string
    onClick?: () => void
}

export const Avatar: React.ElementType<IAvatar> = ({ url , status, size = 5, alt }: IAvatar) => {
    return <span className={cx(styles.avatarContainer, styles[`size${ size }`])}>
        <img src={ url } className={ styles.avatar } alt={ alt }/>
        { status && <span className={ styles[status] }/> }
    </span>
}