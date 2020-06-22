import React from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import Knob from '../../components/Knob'
import { RootState } from '../../../state/types/state'
import { setVCO1Scale } from '../../../state/actions'

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
  value: state.vco1.scale,
  min: 0,
  max: 3,
  startAngle: -70,
  endAngle: 70,
  title: 'SCALE',
  className: 'scale',
  labels: ["32'", "16'", "8'", "4'"]
})

const mapDispatchToProps: MapDispatchToProps<
  {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  },
  {}
> = dispatch => ({
  onChange: event => {
    dispatch(setVCO1Scale(event.target.valueAsNumber))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Knob)
