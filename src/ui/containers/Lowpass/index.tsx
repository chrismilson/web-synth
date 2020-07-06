import React from 'react'
import './style.scss'
import ValueKnob from '../common/ValueKnob'
import { setLowpassCutoff, setLowpassPeak } from '../../../state/actions'

const Lowpass: React.FC = () => {
  return (
    <div className="Lowpass module">
      VOLTAGE CONTROLLED LOWPASS FILTER
      <ValueKnob
        selector={state => state.lowpass.cutoff}
        actionCreator={setLowpassCutoff}
        title="CUTOFF FREQUENCY"
      />
      <ValueKnob
        selector={state => state.lowpass.peak}
        actionCreator={setLowpassPeak}
        title="PEAK"
      />
    </div>
  )
}

export default Lowpass
