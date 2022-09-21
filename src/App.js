import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const App = () => {



  const pageSize = 10;
  const [progress, setProgress] = useState(0)


  return (




    <>

      <NavBar />
      <LoadingBar
        color='#f11946'
        progress={progress}

      />



      <Router>
        <div className="container my-5   ">

          <Routes>

            <Route exact path="/" element={<News setProgress={setProgress} key="general " pageSize={pageSize} country="in" category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} key="business " pageSize={pageSize} country="in" category="business" />}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology " pageSize={pageSize} country="in" category="technology" />}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} key="health " pageSize={pageSize} country="in" category="health" />}></Route>


          </Routes>
        </div>
      </Router>

    </>

  )
}

export default App