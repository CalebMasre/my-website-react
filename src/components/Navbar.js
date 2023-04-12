import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import Image from "./../images/graduation.jpg"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <h3 className='logo'>Caleb Wossen</h3>
        <img className = "logo" src = {Image}></img>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/skills' className='about'>
            <li>Skills</li>
          </Link>
          <Link to='/chat' className='skills'>
            <li>Chat</li>
          </Link>
          <Link to='/contact' className='home'>
            <li>Contact</li>
          </Link>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar
