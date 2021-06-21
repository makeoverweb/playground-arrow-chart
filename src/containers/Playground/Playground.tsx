import React, { Fragment } from "react"
import { observer } from 'mobx-react-lite'
import { PrimaryButtons } from "./PrimaryButtons"
import { LoadersAndProgresses } from "./LoadersAndProgresses"
import { Checkboxes } from "./Checkboxes"
import { Accordion } from "./Accordion"
import { Toggles } from "./Toggles"
import { Radios } from "./Radios"
import { Dropdowns } from "./Dropdowns"

import { Avatars } from "./Avatars"

import { Searchbars } from "containers/Playground/Searchbar"
import { DatePickers } from "containers/Playground/DatePickers"
import { Icons } from './Icons'
import { InputFields } from './InputFields'
import { Badges } from './Badges'
import { Colors } from "./Colors"
import { Paginations } from "./Paginations"

import 'static/styles/global.scss'
import 'static/styles/theme.scss'
import styles from './styles.scss'

const PlaygroundContainer: React.SFC<any> = observer(() => {
    return (
      <Fragment>
          <div className={ styles.componentsWrapper }>
              <Paginations/>
              <Badges/>
              <DatePickers/>
              <PrimaryButtons/>
              <LoadersAndProgresses/>
              <Checkboxes/>
              <Toggles/>
              <Radios/>
              {/* <Dropdowns /> */ }
              <Accordion/>
              <InputFields/>
              <Dropdowns/>
              <Searchbars/>
              <Icons/>
              <Colors/>
              <Avatars/>
          </div>
      </Fragment>
    )
})


export { PlaygroundContainer }
