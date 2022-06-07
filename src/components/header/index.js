import React from 'react'
import './header.css'
function Header() {
  return (
    <div className='header-container'>
        <div className='header'>
            <div className='header-logo'>
                Paisa Monito <i class="fi fi-rr-credit-card"></i>
            </div>
            <div className='header-button'>
                <a href='https://github.com/sahanashettigar' target='_blank' rel='noopener noreferrer'>
                Star <i class="devicon-github-original colored"></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Header