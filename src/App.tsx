import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserProvider } from './context/User'

import Home from './pages/Home'

const App = () => (
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  </UserProvider>
)

export default App
