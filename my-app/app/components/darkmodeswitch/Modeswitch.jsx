"use client"

import React, { useState } from 'react'

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
        <input
        type="checkbox"
        checked={isDarkMode}
        onChange={switchTheme}
        />
    </div>
  )
}

export default Modeswitch