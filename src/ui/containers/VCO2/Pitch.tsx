import React from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import Knob from '../../components/Knob'
import { RootState } from '../../../state/types/state'
import { setVCO2Pitch } from '../../../state/actions'

const mapStateToProps: MapStateToProps<
  {
    value: number
    min: number
    max: number
    step: number
    title: string
    className: string
    labels: React.ReactNode[]
  },
  {},
  RootState
> = state => ({
  value: state.vco2.pitch,
  min: -1,
  max: 1,
  step: 0.001,
  title: 'PITCH',
  className: 'pitch',
  labels: [...Array(11)].map((_, i) => i - 5).map(v => (v > 0 ? '+' : '') + v)
})

const mapDispatchToProps: MapDispatchToProps<
  {
    handleChange: (value: number) => void
  },
  {}
> = dispatch => ({
  handleChange: value => {
    dispatch(setVCO2Pitch(value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Knob)
