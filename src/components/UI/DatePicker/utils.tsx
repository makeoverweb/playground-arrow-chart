import style from "./styles.scss"
import React from "react"
import cx from 'classnames'


export const currentYear = new Date().getFullYear()
export const fromMonth = new Date(currentYear, 0)
export const toMonth = new Date(currentYear + 10, 11)

export function YearMonthForm({ date, months, onChange }) {
    const years = []
    for (let i = fromMonth.getFullYear() -5 ; i <= toMonth.getFullYear() - 5; i++) {
        years.push(i)
    }

    const handleChange = function handleChange(e) {
        const { year, month } = e.target.form
        onChange(new Date(year.value, month.value))
    }

    return (
      <form className={ cx("DayPicker-Caption", style.select) }>
          <select name="month" onChange={ handleChange } value={ date.getMonth() }>
              { months.map((month, i) => (
                <option key={ month } value={ i }>
                    { month }
                </option>
              )) }
          </select>
          <select name="year" onChange={ handleChange } value={ date.getFullYear() }>
              { years.map(year => (
                <option key={ year } value={ year }>
                    { year }
                </option>
              )) }
          </select>
      </form>
    )
}