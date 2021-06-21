import React, { Fragment, useState } from "react"
import styles from './styles.scss'
import cx from 'classnames'
import { Search, SearchType } from "../../components/UI/Search/Search"
import matchSorter from 'match-sorter'

// const faker = require("faker")

const style = {
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
}

const searchFields = [ 'firstname', 'lastname' ]


const users = []

// const users = Array.from({ length: 200 }).map((_, index) => ({
//     user_id: index,
//     created: faker.date.past(),
//     modified: faker.date.recent(),
//     deleted: faker.random.boolean(),
//     firstname: faker.name.firstName(),
//     lastname: faker.name.lastName(),
//     email: faker.internet.email(),
//     phone: faker.phone.phoneNumber()
// }))

const Searchbars: React.FC<any> = () => {

    const [ items, setItems ] = useState([])

    const onSearch = async (filter: string) => {
        setItems(filter ? matchSorter(users, filter, searchFields && searchFields.length > 0 ? { keys: searchFields } : {}) : [])
    }

    const onChange = (e) => console.log(e)

    return (
      <Fragment>
          <div className={ cx(styles.column, styles.center) }>
              Search bar
          </div>
          <div className={ cx(styles.column, styles.center) }>
              <div style={ style }>
                  <Search searchFields={ searchFields }
                          keyName={ 'user_id' }
                          items={ items }
                          onSearch={ onSearch }
                          onChange={ onChange }
                          itemName={ 'firstname' }
                          theme={ SearchType.box }
                          placeholder={ 'Search CSP' }
                          isMinimized={ true }
                          autoHide={ true }
                  />
              </div>
              <div style={ style }>
                  <Search searchFields={ searchFields }
                          keyName={ 'user_id' }
                          items={ items }
                          onSearch={ onSearch }
                          onChange={ onChange }
                          itemName={ 'firstname' }
                          theme={ SearchType.line }
                          placeholder={ 'Search CSP' }
                  />
              </div>
              <div style={ style }>
                  <Search searchFields={ searchFields }
                          keyName={ 'user_id' }
                          items={ items }
                          onSearch={ onSearch }
                          onChange={ onChange }
                          itemName={ 'firstname' }
                          theme={ SearchType.box }
                          placeholder={ 'Search CSP' }
                  />
              </div>
              <div style={ style }>
                  <Search searchFields={ searchFields }
                          keyName={ 'user_id' }
                          items={ items }
                          onSearch={ onSearch }
                          onChange={ onChange }
                          itemName={ 'firstname' }
                          theme={ SearchType.line }
                          placeholder={ 'Search CSP' }
                          autoHide={ true }
                          isMinimized={ true }
                  />
              </div>
          </div>
      </Fragment>
    )
}

export {
    Searchbars
}
