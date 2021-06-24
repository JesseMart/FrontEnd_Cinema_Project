import React from 'react'
import {InputGroup, FormControl } from 'react-bootstrap'

const SearchBar = (props) => {
    return (
        <div className="col col=sm-4">
            <InputGroup size="sm" className="mb-3">

            <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder = "Type UR Search Here"
                value = {props.value}
                onChange={(e)=> props.setSearchValue(e.target.value)}
            />
            </InputGroup>
        </div>
    );
}

export default SearchBar
