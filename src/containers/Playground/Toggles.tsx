import React, { Fragment } from "react";
import { Toggle } from "components/UI/Controls";
import cx from 'classnames';
import styles from './styles.scss';

const style = {
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center'
};

const Toggles = () => {
    const toggleHandler = (e) => {
        console.log('in toggleHandler:', e.target.checked);
    };

    return (
      <Fragment>
          <div className={ cx(styles.column, styles.center) }>
            Toggles
          </div>
          <div className={ cx(styles.column, styles.center) }>
              Default
              <div style={ style }>
                  <Toggle onToggle={toggleHandler} />
              </div>
              Primary
              <div style={ style }>
                  <Toggle color='primary' onToggle={toggleHandler} />
              </div>
              Success
              <div style={ style }>
                  <Toggle color='success' onToggle={toggleHandler} />
              </div>
              Info
              <div style={ style }>
                  <Toggle color='info' onToggle={toggleHandler} />
              </div>
              Warning
              <div style={ style }>
                  <Toggle color='warning' onToggle={toggleHandler} />
              </div>
              Danger
              <div style={ style }>
                  <Toggle color='danger' onToggle={toggleHandler} />
              </div>
              Disabled
              <div style={ style }>
                  <Toggle disabled color='danger' onToggle={toggleHandler} />
              </div>
              Disabled, On
              <div style={ style }>
                  <Toggle disabled isOn color='danger' onToggle={toggleHandler} />
              </div>
          </div>
      </Fragment>
    );
};

export { Toggles };
