import React, { useState } from "react"
import { Accordion as UIAccordion } from "components/UI/Accordion"
import styles from './styles.scss'

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
      <>
      <button onClick={() => {setIsOpen(!isOpen);}}>BUTTON OUTSIDE OPEN/CLOSE ACCORDION</button>
        <UIAccordion
          headerContent={'ACCORDION'}
          className={{
            accordion: styles.outerAccordion
          }}
          isOpen={isOpen}
          headerClassName={styles.headerClassName}
        >
          <ul>
            <li>item 1</li>
          </ul>
        </UIAccordion> 
        <UIAccordion
          headerContent={'ACCORDION'}
          icon={ 'grid-layout-m' }
          className={{
            accordion: styles.outerAccordion
          }}
          headerClassName={styles.headerClassName}
        >
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
          </ul>
        </UIAccordion> 
        <UIAccordion
          headerContent={'ACCORDION'}
          arrow={ 'arrows-right' }
          className={{
            accordion: styles.outerAccordion
          }}
          headerClassName={styles.headerClassName}
        >
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </UIAccordion>
        <UIAccordion
          headerContent={'ACCORDION'}
          icon={ 'grid-layout-m' }
          arrow={ 'arrows-right' }
          className={{
            accordion: styles.outerAccordion
          }}
          headerClassName={styles.headerClassName}
        >
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
            <li>item 6</li>
            <li>item 7</li>
            <li>item 8</li>
            <li>item 9</li>
          </ul>
        </UIAccordion> 
      </>
    )
}

export {
  Accordion
}
