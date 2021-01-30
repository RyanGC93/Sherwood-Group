import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import React from 'react'
import "./Search.css" 
import { searchOptions } from './SearchOptions.js'
import {useHistory} from 'react-router-dom'
function SearchBar() {
  const history = useHistory()
  const items = searchOptions

  let styling = {
    backgroundColor: "#0D1117",
    color: "white",
    hoverBackgroundColor: "#212121"

  }
  const handleOnSelect = ( item ) => {
     const stock =item.name
    history.push(`/stocks/${stock}`)
  }


  const handleOnEnter = (e) => {
    if (e.key === 'Enter') {
      alert("Please select option from the dropdown search")
    }
  }

  return (
    <div className="search__bar"
      onKeyDown={handleOnEnter}
      tabIndex="0"
    >
        <div style={{ width: 400 }}>
        <ReactSearchAutocomplete
            styling={styling}
            className="search-bar"
            items={items}
            onSelect={handleOnSelect}
            fuseOptions={{ keys: ["name","description"]}}
            resultStringKeyName="stockWithDescription"
            autoFocus
          />
        </div>
    </div>
  )
}

export default SearchBar
