import React from 'react'
import './style.scss'
import {
  setEnvelopeGenerator2Hold,
  setEnvelopeGenerator2Release,
  setEnvelopeGenerator2Sustain,
  setEnvelopeGenerator2Decay,
  setEnvelopeGenerator2Attack
} from '../../../state/actions'
import ValueKnob from '../common/ValueKnob'

const EnvelopeGenerator2: React.FC = () => {
  return (
    <div className="EnvelopeGenerator2 module">
      ENVELOPE GENERATOR 2
      <ValueKnob
        selector={state => state.envelopeGenerator2.hold}
        actionCreator={setEnvelopeGenerator2Hold}
        title="HOLD TIME"
      />
      <ValueKnob
        selector={state => state.envelopeGenerator2.attack}
        actionCreator={setEnvelopeGenerator2Attack}
        title="ATTACK TIME"
      />
      <ValueKnob
        selector={state => state.envelopeGenerator2.decay}
        actionCreator={setEnvelopeGenerator2Decay}
        title="DECAY TIME"
      />
      <ValueKnob
        selector={state => state.envelopeGenerator2.sustain}
        actionCreator={setEnvelopeGenerator2Sustain}
        title="SUSTAIN LEVEL"
      />
      <ValueKnob
        selector={state => state.envelopeGenerator2.release}
        actionCreator={setEnvelopeGenerator2Release}
        title="RELEASE TIME"
      />
    </div>
  )
}

export default EnvelopeGenerator2
