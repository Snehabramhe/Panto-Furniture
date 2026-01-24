import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AppLayout