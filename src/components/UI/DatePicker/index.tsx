import React, { useCallback, useEffect, useRef, useState } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT, FIRST_DAY_OF_WEEK, LABELS } from 'constants/locale'
import 'react-day-picker/lib/style.css'
import { get, has } from 'lodash'
import style from './styles.scss'
import cx from 'classnames'
import { loc } from "utils/i18n"
import { YearMonthForm, fromMonth, toMonth } from './utils'
import dayjs from "dayjs"
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { Icon } from "../Icon"
import { RangeModifier } from "react-day-picker/types/common"

export interface DateRange {
    from: string
    to: string
}

dayjs.extend(customParseFormat)

interface IDatePickerProps {
    isRange?: boolean
    form?: PICKER_FORM
    isRound?: boolean;
    addedClasses?: string; // added to native classes
    customClasses?: string; // overwrite all native classes
    format?: string; // date format 'DD.MM.YYYY' range format 'YYYY.MM.DD/YYY.MM.DD'
    value?: string; // date value
    disabled?: boolean; // this prop will add to the input component
    onDayChange?: (selectedDay: any, modifiers?, dayPickerInput?) => any; // handler function called when the user types into the input field or when a day is clicked on the calendar.
    disabledDays?: any
    hidden?: boolean
    selectedDays?: Array<Date | string>
}


export enum PICKER_FORM {
    inline,
    input,
    select
}


/* TODO: компонент требует рефакторинга!!!
    - стандартизировать интерфейсы методов parseRange и parseDay
    - стандартизировать интерфейсы метолов computeRange и computeDay
    - провести выделение функций из дублирующихся частей
*/

export function DatePicker(props: IDatePickerProps): JSX.Element {
    const {
        isRange = false,
        form = PICKER_FORM.select,
        isRound = false,
        value,
        format = 'YYYY-MM-DD',
        disabled = false,
        onDayChange = () => {
        },
        disabledDays,
        addedClasses,
        hidden = false
    } = props

    const months = MONTHS.map(d => loc._(d))
    const weekdaysLong = WEEKDAYS_LONG.map(d => loc._(d))
    const weekdaysShort = WEEKDAYS_SHORT.map(d => loc._(d))

    const initialSelectedDay = !isRange ? DateUtils.isDate(dayjs(value as string, format).toDate()) ? dayjs(value as string, format).toDate() : undefined : undefined

    let initialSelectedRange: RangeModifier = { from: undefined, to: undefined }
    if (isRange) {
        const computedRange = computeRange(value, format)
        if ((DateUtils.isDate(computedRange.from)) && DateUtils.isDate(computedRange.to)) {
            initialSelectedRange = computedRange
        }
    }

    const [ month, setMonth ] = useState(fromMonth)
    const [ selectedDay, setDay ] = useState<Date>(initialSelectedDay)
    const [ range, setRange ] = useState<RangeModifier>(initialSelectedRange)
    const pickerInput = useRef<DayPickerInput>()

    const computeDate = useCallback((date, format) => {
        const parsedFrom = dayjs(date, format)
        return (dayjs(dayjs(date, format)).isValid() && parsedFrom.format(format) !== dayjs(selectedDay).format(format)) ? parsedFrom.toDate() : undefined
    }, [ selectedDay ])

    function computeRange(str, format): RangeModifier {
        if (!str) return { from: undefined, to: undefined }
        if (has(str, 'from')) return str
        const [ from, to ] = str.split('/')
        const parsedFrom = dayjs(from, format).toDate()
        const parsedTo = dayjs(to, format).toDate()
        const parsedRange = { from: undefined, to: undefined }
        if (DateUtils.isDate(parsedFrom)) parsedRange.from = parsedFrom
        if (DateUtils.isDate(parsedTo)) parsedRange.to = parsedTo
        return parsedRange
    }


    const isNeedToChangeRange = (newRange, oldRange): boolean => {
        const newFrom = get(newRange, 'from', '').toString()
        const newTo = get(newRange, 'to', '').toString()
        const oldFrom = get(oldRange, 'from', '').toString()
        const oldTo = get(oldRange, 'to', '').toString()
        if (newFrom !== '' && newTo === '') return false
        return newFrom !== oldFrom && newTo !== oldTo
    }

    const setNewDate = useCallback((value, format, isOut: boolean = false) => {
        if (value) {
            if (value.length === format.length || DateUtils.isDate(value)) {
                const computedDay = computeDate(value, format)
                if (computedDay) {
                    setDay(computedDay)
                    setMonth(computedDay)
                }
            } else {
                const computedRange = computeRange(value, format)
                if (isNeedToChangeRange(computedRange, range)) {
                    setRange(computedRange)
                    setMonth(computedRange.from)
                }
            }
        } else if (isOut) {
            setDay(undefined)
            setRange({ from: undefined, to: undefined })
        }
    }, [ range, computeDate ])

    useEffect(() => setNewDate(value, format, true), [ value, format ])
    useEffect(() => setNewDate(selectedDay, format), [ selectedDay, format ])
    useEffect(() => setNewDate(range, format), [ range, format ])

    const handleDayChange = (day, modifiers, dayPickerInput) => {
        const inputValue = dayPickerInput.input.value
        const inputDate = !isRange ? day || computeDate(inputValue, format) : day || computeRange(inputValue, format)
        if (!isRange) {
            if (inputDate) {
                if ((get(disabledDays, 'before') && inputDate <= disabledDays.before) || (get(disabledDays, 'after') && inputDate >= disabledDays.after)) {
                    return
                }
                setMonth(inputDate)
                setDay(inputDate)
                dayPickerInput.hideDayPicker()
                onDayChange(inputDate, modifiers, dayPickerInput)
            } else if (selectedDay) {
                dayPickerInput.hideDayPicker()
                // setDay(null)
                onDayChange(inputDate, modifiers, dayPickerInput)
            }
        } else {
            if (isNeedToChangeRange(inputDate, range)) {
                setRange(inputDate)
                setMonth(inputDate.from)
                //TODO: не работает установка фокуса и курсора
                // const input = pickerInput.current.getInput()
                // const length = input.value.length;
                // input.focus();
                // input.setSelectionRange(length, length);
            }
        }
    }

    const handleDayClick = (day) => {
        setRange(DateUtils.addDayToRange(day, range))
        onDayChange(range)
    }

    const [ isUp, setIsUp ] = useState(false)

    const refCustomOverlay = React.createRef<HTMLDivElement>()
    const refInputWrapper = React.createRef<HTMLDivElement>()

    const handleShowPosition = () => {
        const nodeCustomOverlay = get(refCustomOverlay, 'current')
        if (nodeCustomOverlay) {
            const nodeCustomOverlayProps = nodeCustomOverlay.getBoundingClientRect()
            const nodeCustomOverlayHeight = nodeCustomOverlayProps.height

            const nodeInputWrapper = get(refInputWrapper, 'current')
            if (nodeInputWrapper) {
                const nodeInputWrapperProps = nodeInputWrapper.getBoundingClientRect()
                const nodeInputWrapperPropsOffsetTop = nodeInputWrapperProps.top

                const windowHeight = window.innerHeight

                if (windowHeight - nodeInputWrapperPropsOffsetTop < nodeCustomOverlayHeight) setIsUp(true)
                else setIsUp(false)
                return
            }
        }
        setIsUp(false)
    }

    function parseRange(str, format) {
        const computedRange = computeRange(str, format)
        if (isNeedToChangeRange(computedRange, range)) {
            setRange(computedRange)
            setMonth(computedRange.from)
        }

        // if (get(computedRange, 'from', '').toString() !== get(range, 'from', '').toString()) setRange((prevState => ({
        //     ...prevState,
        //     from: computedRange.from
        // })))
        // if (get(computedRange, 'to', '').toString() !== get(range, 'to', '').toString()) setRange((prevState => ({
        //     ...prevState,
        //     to: computedRange.to
        // })))
    }

    function formatRange() {
        return `${ range.from ? dayjs(range.from).format(format) : format }/${ range.to ? dayjs(range.to).format(format) : format }`
    }

    function formatDay() {
        return dayjs(selectedDay).format(format)
    }

    function parseDay(date, format) {
        const computedDay = computeDate(date, format)
        if (computedDay) {
            setDay(computedDay)
        }
    }

    const dayPickerProps = {
        month: month,
        fromMonth: fromMonth,
        toMonth: toMonth,
        captionElement: ({ date }) => (
          <YearMonthForm
            date={ date }
            months={ months }
            onChange={ setMonth }
          />
        ),
        months,
        weekdaysLong,
        weekdaysShort,
        firstDayOfWeek: FIRST_DAY_OF_WEEK,
        labels: LABELS
    }

    const inputProps = {}

    if (disabledDays) {
        Object.assign(dayPickerProps, { disabledDays })
    }

    if (isRange) {
        Object.assign(dayPickerProps, {
            modifiers: { start: range.from, end: range.to },
            selectedDays: [ range.from, { ...range } ],
            onDayClick: handleDayClick,
            className: "Selectable",
        })

        Object.assign(inputProps, {
            formatDate: formatRange,
            parseDate: parseRange,
            placeholder: `${ format } / ${ format }`
        })
    } else {
        if (selectedDay) {
            Object.assign(dayPickerProps, {
                selectedDays: selectedDay,
                modifiers: {
                    highlighted: selectedDay
                }
            })
        }
    }
    const customOverlay = ({ classNames, selectedDay, children, input, ...props }) => {
        return (
          <div
            ref={ refCustomOverlay }
            className={ cx(style.customOverlay, { [style.toUp]: isUp }) }
            { ...props }
          >
              { children }
          </div>
        )
    }

    const customInput = React.forwardRef((props, ref: React.Ref<HTMLInputElement>) => <span
      className={ style.inputContainer }><input { ...props } ref={ ref }/><Icon
      name={ 'account-calendar-empty' }/></span>)

    const renderDate = () => {

        switch (true) {
            case form === PICKER_FORM.select:
                return <DayPickerInput
                  ref={ pickerInput }
                  value={ !isRange && selectedDay ? formatDay() : isRange && get(range, 'from') ? formatRange() : undefined }
                  onDayChange={ handleDayChange }
                  onDayPickerShow={ handleShowPosition }
                  dayPickerProps={ { ...dayPickerProps } }
                  format={ format }
                  inputProps={ { disabled } }
                  formatDate={ formatDay }
                  parseDate={ parseDay }
                  overlayComponent={ customOverlay }
                  component={ customInput }
                  { ...inputProps }
                />
            case form === PICKER_FORM.inline:
            default:
                return <DayPicker
                  { ...dayPickerProps }
                  overlayComponent={ customOverlay }
                />
        }
    }

    return <div
      ref={ refInputWrapper }
      className={ cx(props.customClasses ? props.customClasses : style.datepicker_cnt,
        {
            [style.border_square]: !isRound,
            [style.disabled]: disabled,
            [style.range]: isRange
        }, addedClasses) }>
        { !hidden && renderDate() }
    </div>
}
