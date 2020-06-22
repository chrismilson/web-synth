import React from 'react'
import { ReactComponent as Saw } from '../../icons/wave-shapes/saw.svg'
import { ReactComponent as Square } from '../../icons/wave-shapes/square.svg'
import { ReactComponent as Pulse } from '../../icons/wave-shapes/short-pulse.svg'
import Knob from '../../components/Knob'
import { MapStateToProps, MapDispatchToProps, connect } from 'react-redux'
import { setVCO2WaveShape } from '../../../state/actions'
import { RootState, VCO2WaveShape } from '../../../state/types/state'

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
  value: state.vco2.waveShape,
  min: 0,
  max: 3,
  startAngle: -70,
  endAngle: 70,
  title: 'WAVE FORM',
  className: 'waveShape',
  labels: [
    <Saw key="saw" />,
    <Square key="square" />,
    <Pulse key="pulse" />,
    'RING'
  ]
})

const mapDispatchToProps: MapDispatchToProps<
  {
    handleChange: (value: number) => void
  },
  {}
> = dispatch => ({
  handleChange: value => {
    const shapes = [
      VCO2WaveShape.SAWTOOTH,
      VCO2WaveShape.SQUARE,
      VCO2WaveShape.PULSE,
      VCO2WaveShape.RING
    ]
    dispatch(setVCO2WaveShape(shapes[value]))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Knob)
