import React, { Component } from 'react'

class UserItems extends Component {
    state = {
        id: 'id',
        login: 'mojombo',
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        "html_url": "https://github.com/mojombo"
    }

    render() {
        const {login, avatar_url, html_url} = this.state;
        return (
            <div className="row mt-4">
                <div className="col-md-3">
                    <div className='card'>
                        <div className="card-body text-center">
                            <img src={avatar_url} className="rounded-circle" width="60" alt={login}/>
                            <h3 className='text-capitalize'>{login}</h3>
                        </div>
                        <div className="card-footer text-center">
                            <a href={html_url} className='btn btn-outline-success'>More info</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserItems
