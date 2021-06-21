import React, { Fragment } from "react";
import { Checkbox } from "components/UI/Controls";
import cx from 'classnames';
import styles from './styles.scss';

const style = {
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center'
};

const Checkboxes = () => {

    const onChangeHandler = (e) => {
        console.log('handler for checkboxes:', e.target.checked);
    }

    return (
      <Fragment>
          <div className={ cx(styles.column, styles.center) }>
              Checkboxes
          </div>
          <div className={ cx(styles.column, styles.center) }>
              <div style={ style }>
                  <Checkbox onChange={onChangeHandler} label='Default' />
              </div>
              <div style={ style }>
                  <Checkbox onChange={onChangeHandler} color='primary' label='Primary' />
              </div>
              <div style={ style }>
                  <Checkbox onChange={onChangeHandler} color='success' label='Success' />
              </div>
              <div style={ style }>
                  <Checkbox onChange={onChangeHandler} indeterminate color='success' label='Indeterminate' />
              </div>
              <div style={ style }>
                  <Checkbox onChange={onChangeHandler} color='info' label='Info' />
              </div>
              <div style={ style }>
                  <Checkbox onChange={onChangeHandler} color='warning' label='Warning' />
              </div>
              <div style={ style }>
                  <Checkbox onChange={onChangeHandler} color='danger' label='Danger' />
              </div>
              <div style={ style }>
                  <Checkbox disabled onChange={onChangeHandler} color='danger' label='Disabled' />
              </div>
              <div style={ style }>
                  <Checkbox disabled onChange={onChangeHandler} checked color='danger' label='Disabled' />
              </div>
          </div>
      </Fragment>
    );
};

export { Checkboxes };
