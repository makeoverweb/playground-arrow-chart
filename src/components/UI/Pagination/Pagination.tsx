import React from "react"
import Paginate, { PaginationProps } from 'rc-pagination'

import './styles.scss'


export const Pagination: React.FC<PaginationProps> = (props) => <Paginate { ...props } />