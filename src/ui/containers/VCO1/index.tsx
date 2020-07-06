import React from 'react'
import WaveShape from './WaveShape'
import Scale from './Scale'
import './style.scss'
import ValueKnob from '../common/ValueKnob'
import { setVCO1PulseWidth } from '../../../state/actions'

const VCO1: React.FC = () => {
  return (
    <div className="VCO1 module">
      VOLTAGE CONTROLLED OSCILLATOR 1
      <WaveShape />
      <ValueKnob
        selector={state => state.vco1.pulseWidth}
        actionCreator={setVCO1PulseWidth}
        title="PW"
        className="pulseWidth"
        labels={[...Array(11)]
          .map((_, i) => i - 5)
          .map(i => (i > 0 ? '+' : '') + i)}
      />
      <Scale />
    </div>
  )
}

export default VCO1
