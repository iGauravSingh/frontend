import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'


const Landing = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default Landing