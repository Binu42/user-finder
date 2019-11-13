import React, { Fragment } from 'react'
import Search from '../users/Search';
import Users from '../users/Users';

function Home() {
  return (
    <div className="container">
      <Fragment>
        <Search />
        <Users />
      </Fragment>
    </div>
  )
}

export default Home
