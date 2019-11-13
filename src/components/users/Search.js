import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

import './styles.css';

const Search = () => {
    const [text, setText] = useState('');
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const onSubmit = (event) => {
        event.preventDefault();
        if (text === '') {
            alertContext.showAlert('Please Enter a name to search', 'danger');
        } else {
            githubContext.searchUsers(text)
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
            {githubContext.users.length > 0 && <button className='btn btn-outline-dark' onClick={githubContext.clearUsers}>CLEAR</button>}
        </div>
    )
}

export default Search
