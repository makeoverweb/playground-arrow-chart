import React, { Fragment } from "react"
import styles from "./styles.scss"
import cx from 'classnames'
import { Avatar } from "../../components/UI/Avatar"

const style = {
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export const Avatars: React.FC<any> = () => {
    return <Fragment>
        <div className={ cx(styles.column, styles.center) }>
            Buttons
        </div>
        <div className={ cx(styles.column, styles.center) }>
            <div style={ style }>
                <Avatar status={'on'} size={ 1 }  url={ 'https://picsum.photos/seed/picsum/200/300' }/>
                <Avatar status={'on'} size={ 2 } url={ 'https://picsum.photos/seed/picsum/200/300' }/>
                <Avatar status={'on'} size={ 3 } url={ 'https://picsum.photos/seed/picsum/200/300' }/>
                <Avatar status={'off'} size={ 4 } url={ 'https://picsum.photos/seed/picsum/200/300' }/>
                <Avatar status={'on'} size={ 5 } url={ 'https://picsum.photos/seed/picsum/200/300' }/>
                <Avatar status={'on'} size={ 6 } url={ 'https://picsum.photos/seed/picsum/200/300' }/>
            </div>
        </div>
    </Fragment>
}