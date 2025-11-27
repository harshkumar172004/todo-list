import React from 'react'
import DarkModeToggle from '../DarkModeToggle'

const Navbar = () => {
  return (
    <header className="bg-blue-700  text-white py-4 shadow-md ">
<div className="max-w-7xl mx-auto  flex justify-between items-center px-4">
<h1 className="text-3xl font-extrabold tracking-wider uppercase text-black dark:text-white
    drop-shadow-[0_0_8px_rgba(0,0,0,0.3)]dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]
    transition-all duration-300">
  To-Do List
</h1>
<DarkModeToggle/>
</div>
</header>
  )
}

export default Navbar