import React from "react"
import { Icon } from "components/UI/Icon"
import styles from './styles.scss'
import colors from 'static/styles/colors.scss'
import Color from 'color'

export interface IDomainProps {
    icon: string
    text: string
    labelColor?: string
    textColor?: string
}

export const Domain: React.FC<IDomainProps> = ({ icon, text, labelColor = colors.basic500, textColor }) => {
    return <span className={ styles.domainContainer }>
        <Icon className={ styles.icon }
              iconStyle={ { color: labelColor, background: Color(labelColor).alpha(0.1).rgb() } } name={ icon }/>
        <span className={ styles.text } style={ { color: textColor } }>{ text }</span>
    </span>
}