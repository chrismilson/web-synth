import React from 'react'
import './style.scss'
import ValueKnob from '../common/ValueKnob'
import { setVCO1Level, setVCO2Level } from '../../../state/actions'

const VCOMixer: React.FC = () => {
  return (
    <div className="VCOMixer module">
      VCO MIXER
      <ValueKnob
        selector={state => state.vcoMixer.vco1Level}
        actionCreator={setVCO1Level}
        title="VCO 1 LEVEL"
      />
      <ValueKnob
        selector={state => state.vcoMixer.vco2Level}
        actionCreator={setVCO2Level}
        title="VCO 2 LEVEL"
      />
    </div>
  )
}

export default VCOMixer
