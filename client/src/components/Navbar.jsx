import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const [tokken, setTokken] = useState(false)

  const handleLogin = () => {
    navigate('/login')
    setTokken(true)
  }
  const handleLogout = () => {
    navigate('/')
    setTokken(false)
  }
  const handleMyProfile = () => {
    navigate('/my-profile')
    setTokken(true)
  }
  const handleMyAppointment = () => {
    navigate('/my-appointment')
    setTokken(true)
  }

  return (
    <div className='flex justify-between items-center border-b border-gray-400 py-4 mb-5'>
      <div className='flex items-center justify-center gap-2 cursor-pointer'>
        <img src={assets.logo} alt="" className='w-14' />
        <p className='text-blue-900 text-3xl font-extrabold'>Appointo</p>
      </div>
      <ul className='flex justify-center items-center gap-10'>
        <NavLink to="/" text="Home" >
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary m-auto hidden' />
        </NavLink>
        <NavLink to="/doctors" text="ALL DOCTORS" >
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary m-auto hidden' />
        </NavLink>
        <NavLink to="/about" text="ABOUT" >
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary m-auto hidden' />
        </NavLink>
        <NavLink to="/contact" text="CONTACT" >
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex justify-center items-center'>
        {
          tokken ?
            <div className='flex items-center gap-4 cursor-pointer group relative'>
              <img src={assets.profile_pic} alt="" className='w-12 rounded-full' />
              <img src={assets.dropdown_icon} alt="" className='w-3' />
              <div className='absolute top-0 right-0 pt-[4.8rem] text-base font-medium text-gray-600 z-0 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p className='hover:text-black cursor-pointer' onClick={handleMyProfile} >My Profile</p>
                  <p className='hover:text-black cursor-pointer' onClick={handleMyAppointment} >My Appointment</p>
                  <p className='hover:text-black cursor-pointer' onClick={handleLogout}>Logout</p>
                </div>

              </div>
            </div>
            : <button onClick={handleLogin} className='bg-primary text-white px-8 py-3 font-light hidden md:block rounded-full'>CREATE ACCOUNT</button>
        }

      </div>
    </div>
  )
}

export default Navbar
