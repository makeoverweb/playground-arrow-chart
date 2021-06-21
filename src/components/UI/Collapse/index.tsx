import React from 'react';
import Collapsible from 'react-collapsible';
import styles from "./styles.scss"

const Collapse = props => {
  const defaultProps = {
    trigger: 'Pass the "trigger" parameter to set this header',
    classParentString: styles.collapsible,
    triggerClassName: styles.trigger,
    triggerOpenedClassName: styles.trigger,
    triggerTagName: 'div'
  };

  const jointProps = Object.assign(defaultProps, {...props});

  return (
    <Collapsible 
      {...jointProps}
    >
      {
        React.Children.map(props.children, child => child)
      }
    </Collapsible>
  );
}

export {
  Collapse,
}