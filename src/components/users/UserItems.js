import React from 'react'
import PropTypes from 'prop-types'

const UserItems = ({user: {login, avatar_url, html_url}}) => {
    return (
        <div className="col-md-4 col-lg-3 mt-2">
            <div className='card'>
                <div className="card-body text-center">
                    <img src={avatar_url} className="rounded-circle" width="60" alt={login} />
                    <h3 className='text-capitalize'>{login}</h3>
                </div>
                <div className="card-footer text-center">
                    <a href={html_url} className='btn btn-outline-success'>More info</a>
                </div>
            </div>
        </div>
    )
}

UserItems.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItems
