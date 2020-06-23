import React from 'react'
import './style.scss'

export interface LEDProps {
  isOn?: boolean
}

const LED: React.FC<LEDProps> = ({ isOn = true }) => {
  return <div className={`LED ${isOn ? 'on' : 'off'}`} />
}

export default LED
