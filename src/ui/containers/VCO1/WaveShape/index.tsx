import React, { useState } from 'react'
import { ReactComponent as Triangle } from '../../../icons/wave-shapes/triangle.svg'
import { ReactComponent as Saw } from '../../../icons/wave-shapes/saw.svg'
import { ReactComponent as Square } from '../../../icons/wave-shapes/square.svg'
import { ReactComponent as Pulse } from '../../../icons/wave-shapes/short-pulse.svg'
import { ReactComponent as Noise } from '../../../icons/wave-shapes/noise.svg'
import { ReactComponent as Arrows } from '../../../icons/arrows.svg'
import './style.scss'
import Knob from '../../../components/Knob'

const WaveShape: React.FC = () => {
  const [value, setValue] = useState(1)

  return (
    <div className="WaveShape">
      <Knob
        value={value}
        min={0}
        max={3}
        startAngle={-70}
        endAngle={70}
        onChange={e => {
          setValue(e.target.valueAsNumber)
        }}
        title="WAVE FORM"
      >
        <Triangle />
        <Saw />
        <div className="squareOrPulse">
          <Square />
          <Arrows />
          <Pulse />
        </div>
        <Noise />
      </Knob>
    </div>
  )
}

export default WaveShape
