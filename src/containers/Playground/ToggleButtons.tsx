import React, { Fragment } from "react"
import styles from './styles.scss'
import cx from 'classnames'
import { ToggleButton } from "components/UI/ToggleButton"

const style = {
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center'
}


const ToggleButtons = () => {
    return (
        <Fragment>
            <div className={cx(styles.column, styles.center)}>
                Toggle Button
            </div>
            <div className={cx(styles.column, styles.center)}>
                <span style={style}>
                    <ToggleButton onToggle={e => console.log(e)} disabled={true} />
                </span>
                <span style={style}>
                    <ToggleButton onToggle={e => console.log(e)} />
                </span>
                <span style={style}>
                    <ToggleButton color="#e82a73" on={true} height={80} width={200}
                        onToggle={e => console.log(e)} />
                </span>
            </div>
        </Fragment>
    )
}

export {
    ToggleButtons
}
