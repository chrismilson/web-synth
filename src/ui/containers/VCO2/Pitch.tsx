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
  min: -5,
  max: 5,
  step: 0.01,
  title: 'PITCH',
  className: 'pitch',
  labels: [...Array(11)].map((_, i) => i - 5).map(v => (v > 0 ? '+' : '') + v)
})

const mapDispatchToProps: MapDispatchToProps<
  {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  },
  {}
> = dispatch => ({
  onChange: event => {
    dispatch(setVCO2Pitch(event.target.valueAsNumber))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Knob)
