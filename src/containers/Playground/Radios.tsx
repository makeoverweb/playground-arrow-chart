import React, { Fragment } from "react";
import { RadioGroup } from "components/UI/Controls";
import cx from 'classnames';
import styles from './styles.scss';

const style = {
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center'
};

const values = [
  { value: '1' },
  { value: '2' },
  { value: '3' },
  { value: '4' },
  { value: '5' }
];

const Radios = () => {
    const outerRadioHandler = (e) => {
      console.log('in outer radio - e.target.value:', e.target.value);
    };

    return (
      <Fragment>
          <div className={ cx(styles.column, styles.center) }>
            Radios
          </div>
          <div className={ cx(styles.column, styles.center) }>
              <div style={ style }>
                  <RadioGroup
                    groupName='default-radio'
                    values={values.map((el, i) => ({...el, label: i % 2 === 0 ? 'Default' : ''}))}
                    onChange={ outerRadioHandler }
                  />
              </div>
              <div style={ style }>
                  <RadioGroup
                    groupName='primary-radio'
                    values={values.map(el => ({...el, label: 'Primary'}))}
                    color='primary'
                    onChange={ outerRadioHandler }
                  />
              </div>
              <div style={ style }>
                  <RadioGroup
                    groupName='success-radio'
                    values={values.map(el => ({...el, label: 'Success'}))}
                    color='success'
                    onChange={ outerRadioHandler }
                  />
              </div>
              <div style={ style }>
                  <RadioGroup
                    groupName='info-radio'
                    values={values.map(el => ({...el, label: 'Info'}))}
                    color='info'
                    onChange={ outerRadioHandler }
                  />
              </div>
              <div style={ style }>
                  <RadioGroup
                    groupName='warning-radio'
                    values={values.map(el => ({...el, label: 'Warning'}))}
                    color='warning'
                    onChange={ outerRadioHandler }
                  />
              </div>
              <div style={ style }>
                  <RadioGroup
                    groupName='danger-radio'
                    values={values.map(el => ({...el, label: 'Danger'}))}
                    color='danger'
                    onChange={ outerRadioHandler }
                  />
              </div>
              <div style={ style }>
                  <RadioGroup
                    groupName='disabled-danger-radio'
                    values={values.map(el => ({...el, label: 'Disabled'}))}
                    color='danger'
                    selectedValue='3'
                    disabled
                    onChange={ outerRadioHandler }
                  />
              </div>
              <div style={ style }>
                  <RadioGroup
                    groupName='no-label-default-radio'
                    values={values}
                    onChange={ outerRadioHandler }
                  />
              </div>
          </div>
      </Fragment>
    );
};

export { Radios };
