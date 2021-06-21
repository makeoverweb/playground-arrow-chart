import React, { Component, CSSProperties } from 'react'
import { observer } from 'mobx-react'
import styles from './styles.scss'

const defaultProps = {
    sqSize: 100,
    strokeWidth: 10,
    color: 'black',
    background: 'white',
    fontSize: '1rem',
    isPercentageVisible: true
}

interface ProgressbarCircularProps {
    sqSize: number,
    percentage: number,
    strokeWidth: number,
    color?: string,
    background?: string,
    fontSize?: string,
    className?: string,
    isPercentageVisible?: boolean
    style?: CSSProperties
}

const style = {
    circleProgress: styles['circle-progress'],
    circleText: styles['circle-text'],
    circleBackground: styles['circle-background']
}

@observer
export class ProgerssBarCircular extends Component<ProgressbarCircularProps> {
    constructor(props) {
        super(props)
        this.state = {}
    }

    public render() {
        // Size of the enclosing square
        const sqSize = this.props.sqSize || defaultProps.sqSize
        // SVG centers the stroke width on the radius, subtract out so circle fits in square
        const radius = (sqSize - (this.props.strokeWidth || defaultProps.strokeWidth)) / 2
        // Enclose cicle in a circumscribing square
        const viewBox = `0 0 ${ sqSize } ${ sqSize }`
        // Arc length at 100% coverage is the circle circumference
        const dashArray = radius * Math.PI * 2
        // Scale 100% coverage overlay with the actual percent
        const dashOffset = dashArray - dashArray * (this.props.percentage || 0) / 100

        return (
          <div className={ this.props.className } style={ this.props.style }>
              { this.props.children }
              <svg
                width={ this.props.sqSize }
                height={ this.props.sqSize }
                viewBox={ viewBox }>
                  <circle
                    className={ style.circleBackground }
                    cx={ this.props.sqSize / 2 }
                    cy={ this.props.sqSize / 2 }
                    r={ radius }
                    strokeWidth={ `${ this.props.strokeWidth }px` }
                    style={ {
                        stroke: this.props.background || defaultProps.background
                    } }
                  />
                  <circle
                    className={ style.circleProgress }
                    cx={ this.props.sqSize / 2 }
                    cy={ this.props.sqSize / 2 }
                    r={ radius }
                    strokeWidth={ `${ this.props.strokeWidth }px` }
                    // Start progress marker at 12 O'Clock
                    transform={ `rotate(-90 ${ this.props.sqSize / 2 } ${ this.props.sqSize / 2 })` }
                    style={ {
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset,
                        stroke: this.props.color || defaultProps.color
                    } }/>
                  { (
                    <text
                      className={ style.circleText }
                      x="50%"
                      y="50%"
                      dy=".3em"
                      textAnchor="middle"
                      style={ {
                          fill: this.props.color || defaultProps.color,
                          fontSize: this.props.fontSize || defaultProps.fontSize
                      } }
                    >
                        { this.props.isPercentageVisible && `${ Math.round(this.props.percentage) }%` }
                    </text>)
                  }
              </svg>
          </div>
        )
    }
}
