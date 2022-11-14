import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-secondary">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Navbar</span>
                    <div>
                    
                    <Link className='btn btn-success' to={'/Login'} children={"Login"}></Link>
                    
                </div>
                </div>
               
            </nav>
        )
    }
}

