import React from 'react'
import './styles/global.css'
import {FaPhoneAlt} from 'react-icons/fa'
import {BsFillEnvelopeFill} from 'react-icons/bs'
function Head() {
  return (
    <div>
        <div className="head">
            <div className="container d_flex">
                <div className="row left">
                    <FaPhoneAlt/>
                    <label>+923090450173</label>
                    <BsFillEnvelopeFill/>
                    <label>mf8498521@gmail.com</label>
                </div>
                <div className="right row RText">
                    <label>Theme FAQ's</label>
                    <label>Need Help</label>
                    <span>En</span>
                    <span>USD</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Head