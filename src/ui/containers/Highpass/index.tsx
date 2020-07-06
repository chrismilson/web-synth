import React from 'react'
import './style.scss'
import ValueKnob from '../common/ValueKnob'
import {
  setHighpassCutoff,
  setHighpassPeak,
  setHighpassModulatorModulationGenerator,
  setHighpassModulatorEnvelopeGenerator
} from '../../../state/actions'

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
      CUTOFF FREQUENCY MODULATION
      <ValueKnob
        selector={state => state.highpass.modulator.modulationGenerator}
        actionCreator={setHighpassModulatorModulationGenerator}
        title="MG/T.EXT"
      />
      <ValueKnob
        selector={state => state.highpass.modulator.envelopeGenerator}
        actionCreator={setHighpassModulatorEnvelopeGenerator}
        title="EG2/EXT"
      />
    </div>
  )
}

export default Highpass
