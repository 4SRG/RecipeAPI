import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Details from './pages/details/details'
import Favorite from './pages/favourite/favorite'
import Home from './pages/home/home'




const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className='mt-10'>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/details/:id"
            element={<Details />}
          />
          <Route
            path="/favorite"
            element={<Favorite />}
          />
        </Routes>
        </div>
      </div>
    </div>
  )
}

export default App