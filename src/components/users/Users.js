import React, { useContext } from 'react';
import UserItems from './UserItems';
import Spinner from '../layout/Spinners';
import GithubContext from '../../context/github/githubContext'

const Users = () => {
    
    const githubContext = useContext(GithubContext)
    if (githubContext.loading) {
        return (
            <Spinner />
        )
    } else {
        return (
            <div className='row mt-4 no-gutters'>
                {githubContext.users.map(user => (
                    <UserItems key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

export default Users
