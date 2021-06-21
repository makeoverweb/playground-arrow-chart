import React from "react"
import Pop, { Align, ArrowContainer, ContentLocation, ContentLocationGetter, Position } from 'react-tiny-popover'
import './styles.scss'

export interface IPopoverProps {
    children: JSX.Element;
    isOpen?: boolean;
    content: JSX.Element;
    contentDestination?: HTMLElement;
    contentLocation?: ContentLocationGetter | ContentLocation;
    padding?: number;
    position?: Position | Position[];
    onClickOutside?: (e: MouseEvent) => void;
    disableReposition?: boolean;
    containerClassName?: string;
    containerStyle?: Partial<CSSStyleDeclaration>;
    align?: Align;
    transitionDuration?: number;
}

export const Popover: React.FC<IPopoverProps> = (props) => {

    return <Pop
      { ...props }
      isOpen={ props.isOpen }
      onClickOutside={ props.onClickOutside }
      content={ ({ position, targetRect, popoverRect }) => (
        <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
          position={ position }
          targetRect={ targetRect }
          popoverRect={ popoverRect }
          arrowColor={ 'white' }
          arrowSize={ 10 }
          arrowStyle={ { color: 'white' } }
          children={ props.content }
        />
      ) }
    >
        <div>
            { props.children }
        </div>
    </Pop>
}