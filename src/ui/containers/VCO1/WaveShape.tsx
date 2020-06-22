import React from 'react'
import { ReactComponent as Triangle } from '../../icons/wave-shapes/triangle.svg'
import { ReactComponent as Saw } from '../../icons/wave-shapes/saw.svg'
import { ReactComponent as Square } from '../../icons/wave-shapes/square.svg'
import { ReactComponent as Pulse } from '../../icons/wave-shapes/short-pulse.svg'
import { ReactComponent as Noise } from '../../icons/wave-shapes/noise.svg'
import { ReactComponent as Arrows } from '../../icons/arrows.svg'
import Knob from '../../components/Knob'
import { MapStateToProps, MapDispatchToProps, connect } from 'react-redux'
import { setVCO1WaveShape } from '../../../state/actions'
import { RootState, VCO1WaveShape } from '../../../state/types/state'

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
  value: state.vco1.waveShape,
  min: 0,
  max: 3,
  startAngle: -70,
  endAngle: 70,
  title: 'WAVE FORM',
  className: 'waveShape',
  labels: [
    <Triangle key="triangle" />,
    <Saw key="saw" />,
    <div
      key="square"
      className="squareOrPulse"
      style={{ display: 'flex', height: '1em', width: '100%' }}
    >
      <Square />
      <Arrows />
      <Pulse />
    </div>,
    <Noise key="noise" />
  ]
})

const mapDispatchToProps: MapDispatchToProps<
  {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  },
  {}
> = dispatch => ({
  onChange: event => {
    const shapes = [
      VCO1WaveShape.TRIANGLE,
      VCO1WaveShape.SAWTOOTH,
      VCO1WaveShape.SQUARE,
      VCO1WaveShape.NOISE
    ]
    dispatch(setVCO1WaveShape(shapes[event.target.valueAsNumber]))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Knob)
