import React from 'react';
import UserItems from './UserItems';
import Spinner from '../layout/Spinners';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
    if (loading) {
        return (
            <Spinner />
        )
    } else {
        return (
            <div className='row mt-4 no-gutters'>
                {users.map(user => (
                    <UserItems key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default Users
