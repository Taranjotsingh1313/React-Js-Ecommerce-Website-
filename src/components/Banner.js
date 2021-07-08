import React from 'react'
import banner from './images/banner.jpg'
import './css/header.css'
export default function Banner() {
    return (
        <div className="banner">
            <img src={banner} alt="" />
        </div>
    )
}
