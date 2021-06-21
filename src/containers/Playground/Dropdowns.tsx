import React, { Fragment } from "react";
import { Dropdown } from "components/UI/Dropdown";
import cx from 'classnames';
import styles from './styles.scss';

const style = {
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center'
};

const Dropdowns = () => {
    const items = [
      { value: 'First', surname: 'aaa', key: '01 '},
      { value: 'Second', surname: 'bbb', key: '02 '},
      { value: 'Third', surname: 'zzz', key: '03 '},
    ];
    // const initialItem = { value: 'Second', surname: 'bbb', key: '02 '};

    const onChange = (selected) => {
      console.log('in outer Dropdown callback:', selected);
    };

    return (
      <Fragment>
          <div className={ cx(styles.column, styles.center) }>
          Dropdowns
          </div>
          <div className={ cx(styles.column, styles.center) }>
              <div style={ style }>
                  <Dropdown
                    items={ items }
                    onChange={ onChange }
                    placeholder='Choose something'
                    label='Label'
                    searchFields={['value', 'surname']}
                    keyName='key'
                    itemName='value'
                    // className?: string,
                    // initialItem={ initialItem }
                  />
              </div>
          </div>
      </Fragment>
    );
};

export { Dropdowns };
