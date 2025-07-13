import React from 'react'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'

const MainLayout = ({children}) => {
  return (
    <div>
        <Navbar />
        <main className='flex-1 pt-10'>{children}</main>
        <Footer />
    </div>
  )
}

export default MainLayout