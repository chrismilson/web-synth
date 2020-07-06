import React from 'react'
import './style.scss'
import ValueKnob from '../common/ValueKnob'
import {
  setLowpassCutoff,
  setLowpassPeak,
  setLowpassModulatorEnvelopeGenerator,
  setLowpassModulatorModulationGenerator
} from '../../../state/actions'

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
      CUTOFF FREQUENCY MODULATION
      <ValueKnob
        selector={state => state.lowpass.modulator.modulationGenerator}
        actionCreator={setLowpassModulatorModulationGenerator}
        title="MG/T.EXT"
      />
      <ValueKnob
        selector={state => state.lowpass.modulator.envelopeGenerator}
        actionCreator={setLowpassModulatorEnvelopeGenerator}
        title="EG2/EXT"
      />
    </div>
  )
}

export default Lowpass
