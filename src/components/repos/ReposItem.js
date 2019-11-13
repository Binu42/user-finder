import React from 'react'
import PropTypes from 'prop-types'
import './style.css'


const ReposItem = ({ repo }) => {
  return (
    <div className="pt-2">
      <div className="card">
        <div className='card-body'>
          <a className="repository-link" target="_blank" rel="noopener noreferrer" href={repo.html_url}>{repo.name}</a>
        </div>
      </div>
    </div>
  )
}

ReposItem.prototype = {
  repo: PropTypes.object.isRequired,
}

export default ReposItem
