import React, { Fragment } from "react"
import styles from "./styles.scss"
import cx from 'classnames'
import { ACTION_TYPE, Badge } from "../../components/UI/Badge/Badge"
import { Domain } from "../../components/UI/Domain"
import colors from 'static/styles/colors.scss'

const style = {
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1rem'
}

export const Badges: React.FC<any> = () => {
    return <Fragment>
        <div className={ cx(styles.column, styles.center) }>
            Badges
        </div>
        <div className={ cx(styles.column, styles.center) }>
            <div style={ style }>
                <Badge text={ 'default' }/>
            </div>
            <div style={ style }>
                <Badge text={ 'default' } invert/>
            </div>
            <div style={ style }>
                <Badge type={ ACTION_TYPE.PRIMARY } text={ 'primary' }/>
            </div>
            <div style={ style }>
                <Badge type={ ACTION_TYPE.PRIMARY } text={ 'primary/invert' } invert/>
            </div>
            <div style={ style }>
                <Badge type={ ACTION_TYPE.INFO } text={ 'info' }/>
            </div>
            <div style={ style }>
                <Badge type={ ACTION_TYPE.INFO } text={ 'info/invert' } invert/>
            </div>
        </div>
        <div className={ cx(styles.column, styles.center) }>
            <div style={ style }>
                <Badge type={ ACTION_TYPE.SECONDARY } text={ 'secondary' }/>
            </div>
            <div style={ style }>
                <Badge type={ ACTION_TYPE.SECONDARY } text={ 'secondary/invert' } invert/>
            </div>
            <div style={ style }>
                <Badge type={ ACTION_TYPE.DANGER } text={ 'danger' }/>
            </div>
            <div style={ style }>
                <Badge type={ ACTION_TYPE.DANGER } text={ 'danger/invert' } invert/>
            </div>
            <div style={ style }>
                <Badge type={ ACTION_TYPE.SUCCESS } text={ 'success' }/>
            </div>
            <div style={ style }>
                <Badge type={ ACTION_TYPE.SUCCESS } text={ 'success/invert' } invert/>
            </div>
            <div style={ style }>
                <Badge type={ ACTION_TYPE.WARNING } text={ 'warning' }/>
            </div>
            <div style={ style }>
                <Badge type={ ACTION_TYPE.WARNING } text={ 'warning/invert' } invert/>
            </div>
        </div>
        <div className={ cx(styles.column, styles.center) }>
            <div style={ style }>
                <Domain icon={ 'account-user-profile-users-a' } text={ 'Жилищное' } />
            </div>
            <div style={ style }>
                <Domain icon={ 'account-user-profile-users-a' } text={ 'Жилищное' } labelColor={ colors.orange460 }/>
            </div>
            <div style={ style }>
                <Domain icon={ 'account-user-profile-users-a' } text={ 'Жилищное' } labelColor={ colors.purple600 }/>
            </div>
            <div style={ style }>
                <Domain icon={ 'account-user-profile-users-a' } text={ 'Жилищное' } labelColor={ colors.danger300 }/>
            </div>
            <div style={ style }>
                <Domain icon={ 'account-user-profile-users-a' } text={ 'Жилищное' } labelColor={ colors.success700 }/>
            </div>
            <div style={ style }>
                <Domain icon={ 'account-user-profile-users-a' } text={ 'Жилищное' } labelColor={ colors.blue600 }/>
            </div>
            <div style={ style }>
                <Domain icon={ 'account-user-profile-users-a' } text={ 'Жилищное' } labelColor={ colors.cyan500 }/>
            </div>
        </div>
    </Fragment>
}