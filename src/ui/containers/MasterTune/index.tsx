import React from 'react'
import './style.scss'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { RootState } from '../../../state/types/state'
import { setMasterTune } from '../../../state/actions'
import Knob from '../../components/Knob'

const mapStateToProps: MapStateToProps<
  {
    value: number
  },
  {},
  RootState
> = state => ({
  value: state.masterTune
})

const mapDispatchToProps: MapDispatchToProps<
  {
    handleChange: (value: number) => void
  },
  {}
> = dispatch => ({
  handleChange: value => {
    dispatch(setMasterTune(value))
  }
})

const MasterTune: React.FC<{
  value: number
  handleChange: (value: number) => void
}> = ({ value, handleChange }) => {
  return (
    <div className="MasterTune module">
      MASTER TUNE
      <Knob
        value={value}
        step={'any'}
        min={-1}
        max={1}
        handleChange={handleChange}
        labels={[...Array(11)]
          .map((_, i) => i - 5)
          .map(i => (i > 0 ? '+' : '') + i)}
      />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MasterTune)
