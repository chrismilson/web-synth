import React from 'react'
import './style.scss'
import ValueKnob from '../common/ValueKnob'
import { setHighpassCutoff, setHighpassPeak } from '../../../state/actions'

const Highpass: React.FC = () => {
  return (
    <div className="Highpass module">
      VOLTAGE CONTROLLED HIGHPASS FILTER
      <ValueKnob
        selector={state => state.highpass.cutoff}
        actionCreator={setHighpassCutoff}
        title="CUTOFF FREQUENCY"
      />
      <ValueKnob
        selector={state => state.highpass.peak}
        actionCreator={setHighpassPeak}
        title="PEAK"
      />
    </div>
  )
}

export default Highpass
