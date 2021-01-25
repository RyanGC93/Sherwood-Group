import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import React from 'react'
import "./Search.css" 
import {searchOptions} from './SearchOptions.js'

function SearchBar() {
  
  const items = searchOptions




  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log('handle on search')
    console.log(string, results)

  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log('handle on select')
    console.log(item)
  }

  const handleOnFocus = () => {

    console.log('handle on Focus')
    console.log('Focused')
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            resultStringKeyName="id"
            autoFocus
          />
        </div>
      </header>
    </div>
  )
}

export default SearchBar
