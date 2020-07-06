import React from 'react'
import './style.scss'
import ValueKnob from '../common/ValueKnob'
import {
  setModulationGeneratorWaveForm,
  setModulationGeneratorFrequency
} from '../../../state/actions'
import { ReactComponent as Triangle } from '../../icons/wave-shapes/triangle.svg'
import { ReactComponent as Saw } from '../../icons/wave-shapes/saw.svg'
import { ReactComponent as Short } from '../../icons/wave-shapes/long-pulse.svg'
import { ReactComponent as Long } from '../../icons/wave-shapes/short-pulse.svg'
import { ReactComponent as Square } from '../../icons/wave-shapes/square.svg'

const ModulationGenerator: React.FC = () => {
  return (
    <div className="ModulationGenerator module">
      MODULATION GENERATOR
      <ValueKnob
        selector={state => state.modulationGenerator.waveForm}
        actionCreator={setModulationGeneratorWaveForm}
        title="WAVE FORM"
        className="waveForm"
        labels={[
          <div key="low" className="low">
            <Short />
            <Saw />
          </div>,
          '',
          '',
          '',
          '',
          <div key="mid" className="mid">
            <Square />
            <Triangle />
          </div>,
          '',
          '',
          '',
          '',
          <div key="high" className="high">
            <Long />
            <Saw />
          </div>
        ]}
      />
      <ValueKnob
        selector={state => state.modulationGenerator.frequency}
        actionCreator={setModulationGeneratorFrequency}
        title="FREQUENCY"
      />
    </div>
  )
}

export default ModulationGenerator
