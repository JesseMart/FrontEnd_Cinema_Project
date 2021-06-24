import React from 'react'
import {InputGroup, FormControl } from 'react-bootstrap'

const SearchBar = () => {
    return (
        <div className="col col=sm-4">
            <InputGroup size="sm" className="mb-3">

            <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder = "Type UR Search Here"
            />
            </InputGroup>
        </div>
    );
}

export default SearchBar
