import React from 'react'
import './Logo.css'

function Logo() {
  return (
    <section id='logo-gw'>
        <div className='logo-card flex items-center justify-between mb-4 rounded-box px-4 shadow-lg'>
            <div className='logo-name flex flex-col'>
                <label className='text-white text-xs font-semibold'>green world</label>
                <h1 className='text-white text-3xl font-bold'>Caring for <br/>Smart <span className='text-green text-3xl font-bold'>Plant</span></h1>
            </div>
            <div className="logo-icon">
                <img src="src/assets/image/plant1.png" alt="three"/>
            </div>
        </div>
    </section>
  )
}

export default Logo