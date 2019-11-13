import React from 'react'
import './notFound.css'

function NotFound() {
  return (
    <div id="notFound">
      <h1>404</h1>
      <p>Oops! Something Went wrong.</p>
      <a className="button mb-4" href="/user-finder"><i className="fas icon-home"></i> Go back to intial Page, Home</a>
    </div>
  )
}

export default NotFound
