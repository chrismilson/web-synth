import React, { useState } from 'react'
import { ReactComponent as Square } from '../../../icons/wave-shapes/square.svg'
import { ReactComponent as ShortPulse } from '../../../icons/wave-shapes/short-pulse.svg'
import { ReactComponent as LongPulse } from '../../../icons/wave-shapes/long-pulse.svg'
import './style.scss'
import Knob from '../../../components/Knob'

const PulseWidth: React.FC = () => {
  const [value, setValue] = useState(1)

  return (
    <div className="PulseWidth">
      <Knob
        value={value}
        min={0}
        max={3}
        step={0.1}
        onChange={e => {
          setValue(e.target.valueAsNumber)
        }}
        title="PW"
      >
        {[
          // the empty strings are so that the tickmarks render.
          <ShortPulse key="short" />,
          '',
          '',
          '',
          '',
          <Square key="square" />,
          '',
          '',
          '',
          '',
          <LongPulse key="long" />
        ]}
      </Knob>
    </div>
  )
}

export default PulseWidth
