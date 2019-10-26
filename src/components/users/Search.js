import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Search extends Component {
    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        showAlert: PropTypes.func.isRequired
    }

    onSubmit = (event) => {
        event.preventDefault();
        if(this.state.text === ''){
            this.props.showAlert('Please Enter a name to search', 'danger');
        }else{
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className='text-center'>
                <form onSubmit={this.onSubmit} className="search-form">
                    <input type="text" name="text" id='search' placeholder="Search for github users" value={this.state.text} onChange={this.onChange} />
                    <button type='submit' id="search-btn">Search</button>
                </form>
                {this.props.showClear && <button className='btn btn-outline-dark' onClick={this.props.clearUsers}>CLEAR</button>}
            </div>
        )
    }
}

export default Search
