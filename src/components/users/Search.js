import React, { Component } from 'react'
import './styles.css';

class Search extends Component {
    render() {
        return (
            <form className="search-form">
                <input type="text" name="search" id='search' placeholder="Search for github users"/>
                <button type='submit' className='btn' id="search-btn">Search</button>
            </form>
        )
    }
}

export default Search
