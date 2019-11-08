import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Search = ({ searchUsers, clearUsers, showAlert, showClear }) => {
    const [text, setText] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if (text === '') {
            showAlert('Please Enter a name to search', 'danger');
        } else {
            searchUsers(text);
            setText('');
        }
    }

    const onChange = (event) => {
        setText(event.target.value)
    }

    return (
        <div className='text-center'>
            <form onSubmit={onSubmit} className="search-form">
                <input type="text" name="text" id='search' placeholder="Search for github users" value={text} onChange={onChange} />
                <button type='submit' id="search-btn">Search</button>
            </form>
            {showClear && <button className='btn btn-outline-dark' onClick={clearUsers}>CLEAR</button>}
        </div>
    )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    showAlert: PropTypes.func.isRequired
}

export default Search
