import React from 'react'
import './style.scss'
import ValueKnob from '../common/ValueKnob'
import {
  setEnvelopeGenerator1Delay,
  setEnvelopeGenerator1Attack,
  setEnvelopeGenerator1Release
} from '../../../state/actions'

const EnvelopeGenerator1: React.FC = () => {
  return (
    <div className="EnvelopeGenerator1 module">
      ENVELOPE GENERATOR 1
      <ValueKnob
        selector={state => state.envelopeGenerator1.delay}
        actionCreator={setEnvelopeGenerator1Delay}
        title="DELAY TIME"
      />
      <ValueKnob
        selector={state => state.envelopeGenerator1.attack}
        actionCreator={setEnvelopeGenerator1Attack}
        title="ATTACK TIME"
      />
      <ValueKnob
        selector={state => state.envelopeGenerator1.release}
        actionCreator={setEnvelopeGenerator1Release}
        title="RELEASE TIME"
      />
    </div>
  )
}

export default EnvelopeGenerator1
