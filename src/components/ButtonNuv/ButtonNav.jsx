import { useState } from 'react';
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './ButtonNuv.css'
export default function ButtonNav({ children , isActive ,...props}) {
    
    return ( 
    <button {...props} className={isActive ? 'button_active' :"button" } >
        {children}
    </button>
    )
}