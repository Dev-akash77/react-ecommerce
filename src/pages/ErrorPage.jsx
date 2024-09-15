import React from 'react'
import Button from '../ui/Button'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='cc errorpage gap-2'>
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <Link to="/"><Button text={"Go Back"}/></Link>
    </div>
  )
}

export default ErrorPage