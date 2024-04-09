"use client"

import React, { useState } from 'react'

import './modeswitch.css';
const Modeswitch = () => {

    const [isDarkMode, setDarkMode] = useState(false);
    const switchTheme = (e) => {
        setDarkMode(e.target.checked);
        if(e.target.checked){
            document.documentElement.setAttribute('data-theme', 'dark');
        }else{
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

  return (
    <div>

<label className="switch">
  <input type="checkbox"
  checked={isDarkMode}
  onChange={switchTheme}/>
  <span className="slider"></span>
</label>
    </div>
  )
}

export default Modeswitch