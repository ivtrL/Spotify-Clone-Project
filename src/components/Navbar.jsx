import React from 'react'
import { BiPlus } from "react-icons/bi";
import { FaHeart } from "react-icons/fa"
import { RiHome5Fill, RiHome5Line } from "react-icons/ri"
import { IoLibraryOutline, IoLibrarySharp } from 'react-icons/io5'
import { RiSearch2Line, RiSearch2Fill } from 'react-icons/ri'
import '../css/Navbar.css'
import { useState } from 'react';

const Navbar = () => {

  const [iconChange, setIconChange] = useState({icon1: true, icon2: false, icon3: false})

  return (
    <div className="navbar">
      <div className='navbar-container'>
        <li>
          <a href="#" className='nav-link' onClick={() => setIconChange({icon1: true, icon2: false, icon3: false})}>
            <i className='nav-icon'>
              {iconChange.icon1 ? <RiHome5Fill/>: <RiHome5Line/>}
            </i>
            <span className='nav-name'>Inicio</span>
          </a>
          <a href="#" className='nav-link' onClick={() => setIconChange({icon1: false, icon2: true, icon3: false})}>
            <i className='nav-icon'>
              {iconChange.icon2 ? <RiSearch2Fill/>: <RiSearch2Line/>}
            </i>
            <span className='nav-name'>Buscar</span>
          </a>
          <a href="#" className='nav-link' onClick={() => setIconChange({icon1: false, icon2: false, icon3: true})}>
            <i className='nav-icon'>
              {iconChange.icon3 ? <IoLibrarySharp/>: <IoLibraryOutline/>}
            </i>
            <span className='nav-name'>Sua Biblioteca</span>
          </a>
        </li>
        <div>
          <a href="#" className='nav-link'>
            <i className='nav-icon-plus'><BiPlus/></i>
            <span className='nav-nome'>Criar playlist</span>
          </a>
          <a href="#" className='nav-link'>
            <i className='nav-icon-heart'><FaHeart/></i>
            <span className='nav-name'>Músicas Curtidas</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar