import React from 'react'
import './notFound.css'

function NotFound() {
  return (
    <div id="notFound">
      <h1>404</h1>
      <p>Oops! Something is wrong.</p>
      <a className="button mb-4" href="/user-finder"><i className="icon-home"></i> Go back in initial page, is better.</a>
    </div>
  )
}

export default NotFound
