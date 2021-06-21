import React, { Fragment, useState } from "react"
import styles from "./styles.scss"
import cx from 'classnames'
import { Pagination } from "components/UI/Pagination"

const style = {
    margin: '10px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem'
}

export const Paginations: React.FC<any> = () => {
    const [ currentPage, setCurrent ] = useState(1)

    return <Fragment>
        <div className={ cx(styles.column, styles.center) }>
            Paginate
        </div>
        <div style={ style }>
            <Pagination total={ 30 } onChange={ setCurrent } current={ currentPage } defaultPageSize={ 1 }/>
        </div>
    </Fragment>
}