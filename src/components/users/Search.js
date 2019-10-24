import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Search extends Component {
    state={
        text: ''
    }; 

    static propTypes = {
        searchUsers: PropTypes.func.isRequired
    }

    onSubmit = (event)=>{
        event.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''});
    }

    onChange = (event)=> {
        this.setState({[event.target.name]: event.target.value})
        
    }

    render() {
        return (
            <div className="search-form">
            <form onSubmit={this.onSubmit}>
                <input type="text" name="text" id='search' placeholder="Search for github users" value={this.state.text} onChange={this.onChange} required/>
                <button type='submit' id="search-btn">Search</button>
            </form>
            <button className='btn btn-outline-dark'>clear</button>
            </div>
        )
    }
}

export default Search
