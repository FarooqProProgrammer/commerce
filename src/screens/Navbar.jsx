import React from 'react'
import { useState } from 'react'
import {FaBorderAll} from 'react-icons/fa'
import {Link} from 'react-router-dom' 
function Navbar() {

    const [MobileMenu,setMobileMenu] = useState(false)
  return (
    <div className='header'>
            <div className="container d_flex">
                <div className="catgrories d_flex">
                    <FaBorderAll/>
                    <h4>
                        Categories
                        <i class="fa-thin fa-chevron-down"></i>
                    </h4>
                </div> 


                <div className="navlink">
                    <div onClick={()=>setMobileMenu(false)} className={MobileMenu ? "nav-links-MObileMenu":"link f_flex capitalize"}>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/pages">Pages</Link>
                            </li>
                            <li>
                                <Link to="/user">user account</Link>
                            </li>
                            <li>
                                <Link to="/vender">vender account</Link>
                            </li>
                            <li>
                                <Link to="/track">track my order account</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            
                        </ul>

                        <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                            {
                                MobileMenu ? <i className='fas fa-times close home-btn'></i>:
                                <i className='fa fa-bars open'></i>
                            }
                        </button>
                    </div>
                </div> 
            </div>
    </div>
  )
}

export default Navbar
