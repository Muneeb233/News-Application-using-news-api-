import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state={
    progress:0
  }
 setProgress=(progress)=>{
  this.setState({progress:progress})
   
 }

  pagesize = 10
  render() {

    return (


      <>
        <NavBar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
   
      />
      
        

        <Router>
          <div className="container my-5   ">

            <Routes>

              <Route exact path="/" element={<News  setProgress={this.setProgress} key="general " pageSize={this.pageSize} country="in" category="general" />}></Route>
              <Route exact path="/business" element={<News   setProgress={this.setProgress} key="business " pageSize={this.pagesize} country="in" category="business" />}></Route>
              <Route exact path="/technology" element={<News   setProgress={this.setProgress} key="technology " pageSize={this.pagesize} country="in" category="technology" />}></Route>
              <Route exact path="/health" element={<News    setProgress={this.setProgress} key="health " pageSize={this.pagesize} country="in" category="health" />}></Route>


            </Routes>
          </div>
        </Router>

      </>

    )
  }
}
