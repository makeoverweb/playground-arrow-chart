import React, {RefObject, useRef, useEffect, useState} from 'react';
import { get } from 'lodash';
import cx from 'classnames';

import { ShouldRender } from 'utils/render'

import { Icon } from 'components/UI/Icon'

import styles from './styles.scss';

interface IHeader {
  children?: React.ReactNode;
  icon?: string;
  arrow?: string;
  isOpen?: boolean;
  headerClassName?: string;
  arrowWrapperClassName?: string;
  onToggle?: () => void,
}

interface IInnerHeaderProps {
  _refElementContent: RefObject<HTMLDivElement> | null;
  _refElementAccordion: RefObject<HTMLDivElement> | null;
}

const toggleAccordion = (refCollapsibleElement, refParentElement, callbackOnToggle, isOpen) => {
    const collapsibleElement = get(refCollapsibleElement, 'current', null);
    const parentElement = get(refParentElement, 'current', null);

    if(collapsibleElement) {
      const collapsibleElementOffsetHeight = collapsibleElement.offsetHeight;
      
      parentElement.style.setProperty('--content-height', `${isOpen? collapsibleElementOffsetHeight : 0}px`);
      parentElement.style.setProperty('--arrow-direction', `${isOpen? 90 : -90}deg`);
      if(typeof callbackOnToggle === 'function') {
        callbackOnToggle();
    }
  }
}

const Header : React.ElementType<IHeader & IInnerHeaderProps> = (props) => {
  const {
    children,
    icon,
    arrow,
    onToggle: callbackOnToggle,
    headerClassName,
    isOpen,
    arrowWrapperClassName,
    _refElementContent,
    _refElementAccordion,
  } = props;

  const [toggle, setToggle] = useState(isOpen);

  useEffect(() => {
    setToggle(isOpen);
  }, [isOpen]);
  useEffect(() => {
    toggleAccordion(_refElementContent, _refElementAccordion, callbackOnToggle, toggle)
  }, [_refElementAccordion, _refElementContent, callbackOnToggle, toggle]);

  return (
    <div 
      className={cx(
        styles.header, 
        {
          [headerClassName]: headerClassName, 
          [styles.withOutArrow]: !arrow,
        })
      }
      onClick={arrow ? null : () => {setToggle(!toggle)}}
    >
      <div 
        className={styles.title}
      >
        <ShouldRender if={ icon }>
            <Icon 
              className={ cx(icon, styles.icon) } 
              style={icon}
              name={ icon }
            />
        </ShouldRender>
        {children}
      </div>
      <ShouldRender if={ arrow }>
        <div
          className={cx(styles.arrowWrapper, {[arrowWrapperClassName]: arrowWrapperClassName})}
          onClick={() => {setToggle(!toggle)}}
        >
          <div
            className={cx(styles.arrow)} 
          >
            <Icon 
              className={cx(arrow)} 
              name={ arrow }
            />
          </div>
        </div>
      </ShouldRender>
    </div>
  )
}


interface IAccordion extends IHeader {
  headerContent?: React.ReactNode,
  className?: {
    accordion?: string,
    header?: string,
    content?: string,
    arrowWrapper?: string,
  },
}

const Accordion: React.ElementType<IAccordion> = ({
  headerContent,
  icon,
  children,
  arrow,
  className,
  isOpen = false,
  onToggle: callbackOnToggle,
}) => {

  const refElementContent = useRef(null);  
  const refElementAccordion = useRef(null);

  return (
    <div 
      className={cx(styles.accordion, get(className, 'accordion'))}
      ref={refElementAccordion}
    >
      <Header 
        icon={icon} 
        arrow={arrow}
        _refElementContent={refElementContent}
        _refElementAccordion={refElementAccordion}
        headerClassName={get(className, 'header')}
        arrowWrapperClassName={get(className, 'arrowWrapper')}
        isOpen={isOpen}
        onToggle={callbackOnToggle}
      >
        {headerContent}
      </Header>
      <div
        className={styles.contentWrapper}
      >
        <div 
          className={cx(styles.content,  get(className, 'content'))}
          ref={refElementContent}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export {Accordion};