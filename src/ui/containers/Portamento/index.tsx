import React from 'react'
import './style.scss'
import { setPortamento } from '../../../state/actions'
import ValueKnob from '../common/ValueKnob'

const Portamento: React.FC = () => {
  return (
    <div className="Portamento module">
      PORTAMENTO
      <ValueKnob
        selector={state => state.portamento}
        actionCreator={setPortamento}
        title="TIME"
      />
    </div>
  )
}

export default Portamento
