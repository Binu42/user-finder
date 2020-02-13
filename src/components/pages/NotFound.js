import React from 'react'
import { Link } from 'react-router-dom'
import './notFound.css'

function NotFound() {
  return (
    <div id="notFound">
      <h1>404</h1>
      <p>Oops! Something Went wrong.</p>
      <Link className="button mb-4" to="/user-finder"><i className="fas icon-home"></i> Go back to intial Page, Home</Link>
    </div>
  )
}

export default NotFound
