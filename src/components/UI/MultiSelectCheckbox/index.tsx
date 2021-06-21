import React, { useEffect, useState } from 'react'
import styles from './styles.scss'
import { Checkbox } from "../Controls/Checkbox"

export interface IMultiSelectCheckboxProps {
    value?: Array<string>
    items?: Array<{ [key: string]: string }>
    onChange?: (val: any) => void
}

const MultiSelectCheckbox: React.FC<IMultiSelectCheckboxProps> = ({ value, items, onChange }) => {

    const [ values, setValues ] = useState(new Map(value && items.filter(item => value.includes(item.key)).map(item => [ item.key, item ])))
    useEffect(() => {
        setValues(new Map(value && items.filter(item => value.includes(item.key)).map(item => [ item.key, item ])))
    }, [ value ])

    return <div className={ styles.multiSelectCheckboxContainer }>
        {
            items && items.map(item => {
                return <Checkbox onChange={ (e) => {
                    const newValues = values
                    e.target.checked ? newValues.set(item.key, item) : newValues.delete(item.key)
                    setValues(newValues)
                    onChange && onChange([ ...values.values() ].map(item => item.key))
                }
                } className={ styles.checkbox }
                                 key={ item.key } label={ item.value }
                                 checked={ !!values.get(item.key) }/>
            })
        }
    </div>
}

export {
    MultiSelectCheckbox
}