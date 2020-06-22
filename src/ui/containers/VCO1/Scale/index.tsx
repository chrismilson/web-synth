import React, { useState } from 'react'
import './style.scss'
import Knob from '../../../components/Knob'

const Scale: React.FC = () => {
  const [value, setValue] = useState(1)

  return (
    <div className="Scale">
      <Knob
        value={value}
        min={0}
        max={3}
        startAngle={-70}
        endAngle={70}
        onChange={e => {
          setValue(e.target.valueAsNumber)
        }}
        title="SCALE"
      >
        {["32'", "16'", "8'", "4'"]}
      </Knob>
    </div>
  )
}

export default Scale
