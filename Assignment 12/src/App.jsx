import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Screens/Dashboard'
import Login from './Screens/Login'
import Signup from './Screens/Signup'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/dashboard" element={<Dashboard/>} />

    </Routes>
   )
}

export default App
