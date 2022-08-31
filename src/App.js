import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
export default class App extends Component {
  pagesize = 10
  render() {

    return (


      <>
        <NavBar />

        <Router>
          <div className="container my-5   ">

            <Routes>

              <Route exact path="/" element={<News key="general " pageSize={this.pageSize} country="in" category="general" />}></Route>
              <Route path="/business" element={<News key="business " pageSize={this.pagesize} country="in" category="business" />}></Route>
              <Route exact path="/technology" element={<News key="technology " pageSize={this.pagesize} country="in" category="technology" />}></Route>
              <Route exact path="/health" element={<News key="health " pageSize={this.pagesize} country="in" category="health" />}></Route>


            </Routes>
          </div>
        </Router>

      </>

    )
  }
}
