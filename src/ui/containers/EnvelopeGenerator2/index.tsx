import React from 'react'
import Hold from './Hold'
import Attack from './Attack'
import Decay from './Decay'
import Sustain from './Sustain'
import Release from './Release'
import './style.scss'

const EnvelopeGenerator2: React.FC = () => {
  return (
    <div className="EnvelopeGenerator2 module">
      ENVELOPE GENERATOR 2
      <Hold />
      <Attack />
      <Decay />
      <Sustain />
      <Release />
    </div>
  )
}

export default EnvelopeGenerator2
