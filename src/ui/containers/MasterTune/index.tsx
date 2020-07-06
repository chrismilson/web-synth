import React from 'react'
import './style.scss'
import { setMasterTune } from '../../../state/actions'
import ValueKnob from '../common/ValueKnob'

const MasterTune: React.FC = () => {
  return (
    <div className="MasterTune module">
      MASTER TUNE
      <ValueKnob
        selector={state => state.masterTune}
        actionCreator={setMasterTune}
        labels={[...Array(11)]
          .map((_, i) => i - 5)
          .map(i => (i > 0 ? '+' : '') + i)}
        min={-1}
        max={1}
      />
    </div>
  )
}

export default MasterTune
