import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class navbar extends Component {
  render() {
    return (
     <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">News App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" >
                    <ul className="navbar-nav" >
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                            </li>               
                                  <li className="nav-item">
                            
                                    <a className="nav-link" href="/business">Business</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/technology">Technology</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/health">Health</a>
                                    </li>
                                  
                                        </ul>
                                        </div>
                                        </nav>
                                        </div>    
    )
  }
}
