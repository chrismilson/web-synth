import React from 'react'
import './style.scss'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { RootState } from '../../../state/types/state'
import { setVolume } from '../../../state/actions'
import Knob from '../../components/Knob'
import LED from '../../components/LED'

const mapStateToProps: MapStateToProps<
  {
    value: number
  },
  {},
  RootState
> = state => ({
  value: state.volume
})

const mapDispatchToProps: MapDispatchToProps<
  {
    handleChange: (value: number) => void
  },
  {}
> = dispatch => ({
  handleChange: value => {
    dispatch(setVolume(value))
  }
})

const Volume: React.FC<{
  value: number
  handleChange: (value: number) => void
}> = ({ value, handleChange }) => {
  return (
    <div className="Volume">
      VOLUME
      <Knob
        value={value}
        startAngle={-180}
        endAngle={120}
        step={0.01}
        handleChange={handleChange}
        labels={['STANDBY', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      />
      <div className="indicator">
        <LED isOn={value > 0} />
        ON
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Volume)
