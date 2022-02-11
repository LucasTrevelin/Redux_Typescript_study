import React from 'react'
import { Home } from './Components/Pages/Home'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { userStore } from './Redux/store'
// import { GlobalStyle } from './Global'

function App () {
  return (
    <Provider store={userStore}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
