import React from 'react'

import { MenuItem, IMenuItemProps } from './MenuItem'
import styles from './styles.scss'
import cx from 'classnames'


export interface IContextMenuProps {
    items: Array<IMenuItemProps>
    contextId: string
    closeOnClick?: boolean
    closeOnClickOut?: boolean
}


export class ContextMenu extends React.PureComponent<IContextMenuProps> {
    private readonly menuName: string
    constructor(props) {
        super(props)
        this.getItems = this.getItems.bind(this)
        this.openContextMenu = this.openContextMenu.bind(this)
        this.closeContextMenu = this.closeContextMenu.bind(this)
        this.menuName = 'contextMenu' + props.contextId

        this.state = {
            target: '',
        }
    }


    componentDidMount() {
        const { contextId } = this.props
        const context = document.getElementById(contextId)
        context.addEventListener('contextmenu', (event) => {
            this.openContextMenu(event)
        })

        const menu = document.getElementById(this.menuName)
        menu.addEventListener('mouseleave', () => {
            const { closeOnClickOut } = this.props
            if (!closeOnClickOut) {
                this.closeContextMenu()
            }
        })

        document.addEventListener('click', (event) => {
            const { closeOnClickOut } = this.props
            // @ts-ignore
            if (closeOnClickOut && !menu.contains(event.target)) {
                event.preventDefault()
                this.closeContextMenu()
            }
        })
    }

    openContextMenu(event) {
        event.preventDefault()
        this.setState({ target: event.target })
        const menu = document.getElementById(this.menuName)
        menu.style.cssText = menu.style.cssText + `left: ${ event.clientX - 15 }px;`
          + `top: ${ event.clientY - 15 }px;`
          + 'visibility: visible;'
    }

    closeContextMenu() {
        const menu = document.getElementById(this.menuName)
        menu.style.cssText = menu.style.cssText + 'visibility: hidden;'
    }

    getItems() {
        const { items, closeOnClick } = this.props
        if (closeOnClick) {
            return items.map(item => ({
                ...item,
                onClick: (e) => {
                    this.closeContextMenu()
                    item.onClick(e)
                },
            }))
        } else {
            return items
        }
    }

    render() {
        return (
          <div
            id={ this.menuName }
            className={ cx(styles.contextMenuContainer) }
          >
              { this.getItems().map(item => (
                <MenuItem { ...item } key={ item.label }/>
              )) }
          </div>
        )
    }
}