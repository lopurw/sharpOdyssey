import React from 'react';
import { Link } from "react-router-dom";
import './ButtonNuv.css';

export default function ButtonNav({ children, isActive, ...props }) {
  return (
    <button {...props} className={isActive ? 'button_active' : 'button'}>
      {children}
    </button>
  );
}
