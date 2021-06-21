import React from "react"
import styles from './styles.scss'
import colors from '../../static/styles/colors.scss'

export const Colors: React.FC = () => {
    return <div className={ styles.colorsContainer }>
        { Object.entries(colors).map(color => <div title={ color[0] } key={ color[0] }
                                                   style={ { backgroundColor: color[1] } }
                                                   className={ styles.color }>{ color[0] } </div>) }
    </div>
}