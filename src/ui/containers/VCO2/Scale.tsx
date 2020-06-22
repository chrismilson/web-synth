import React from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import Knob from '../../components/Knob'
import { RootState } from '../../../state/types/state'
import { setVCO2Scale } from '../../../state/actions'

const mapStateToProps: MapStateToProps<
  {
    value: number
    min: number
    max: number
    startAngle: number
    endAngle: number
    title: string
    className: string
    labels: React.ReactNode[]
  },
  {},
  RootState
> = state => ({
  value: state.vco2.scale,
  min: 0,
  max: 3,
  startAngle: -70,
  endAngle: 70,
  title: 'SCALE',
  className: 'scale',
  labels: ["16'", "8'", "4'", "2'"]
})

const mapDispatchToProps: MapDispatchToProps<
  {
    handleChange: (value: number) => void
  },
  {}
> = dispatch => ({
  handleChange: value => {
    dispatch(setVCO2Scale(value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Knob)
