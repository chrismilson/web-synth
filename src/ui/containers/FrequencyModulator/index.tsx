import React from 'react'
import './style.scss'
import ValueKnob from '../common/ValueKnob'
import {
  setFrequencyModulatorEnvelopeGenerator,
  setFrequencyModulatorModulationGenerator
} from '../../../state/actions'

const FrequencyModulator: React.FC = () => {
  return (
    <div className="FrequencyModulator module">
      FREQUENCY MODULATION
      <ValueKnob
        selector={state => state.frequencyModulator.modulationGenerator}
        actionCreator={setFrequencyModulatorModulationGenerator}
        title="MG/T.EXT"
      />
      <ValueKnob
        selector={state => state.frequencyModulator.envelopeGenerator}
        actionCreator={setFrequencyModulatorEnvelopeGenerator}
        title="EG1/EXT"
      />
    </div>
  )
}

export default FrequencyModulator
