import React from 'react'
import {Input} from "antd"
import {BsGiftFill} from "react-icons/bs"
import { Button } from 'antd'
import "./styles/Navbar.css"
import {FaBars} from "react-icons/fa"
const Navbar = () => {
  return (
    <div className='w-full h-[70px] border-2 border-black bg-[#fff] flex justify-around items-center'>
          <img src="https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png" alt="" />

          <ul className='flex'>
            <li className='ml-3 text-[#000] font-black mt-2 hover:text-[#f3f3f3] cursor-pointer'>Home</li>
            <li className='ml-3 text-[#000] font-black mt-2 hover:text-[#f3f3f3] cursor-pointer'>Shop</li>
            <li className='ml-3 text-[#000] font-black mt-2 hover:text-[#f3f3f3] cursor-pointer'>Recommended</li>
            <li className="ml-3 text-[#000] font-black mt-2 hover:text-[#f3f3f3] cursor-pointer">Featured</li>
          </ul>

          <div className="search w-[300px] h-[55px] border-2 border-black flex ">
              <div className="filter w-[60px] h-[50px]  flex justify-center items-center border-r-2 font-black text-[#000] hover:text-[#f3f3f3] cursor-pointer">
                Filter
              </div>

              <Input className='w-[240px] h-[50px] outline-0'/>

          </div>
          <BsGiftFill size={30} className="font-black cursor-pointer"/>

          <Button>Login</Button>
          <Button>Signup</Button>

          <FaBars size={30} className="bars cursor-pointer"/>
    </div>
  )
}

export default Navbar