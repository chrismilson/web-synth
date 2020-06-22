import React from 'react'
import { ReactComponent as Triangle } from '../../../icons/wave-shapes/triangle.svg'
import { ReactComponent as Saw } from '../../../icons/wave-shapes/saw.svg'
import { ReactComponent as Square } from '../../../icons/wave-shapes/square.svg'
import { ReactComponent as Pulse } from '../../../icons/wave-shapes/short-pulse.svg'
import { ReactComponent as Noise } from '../../../icons/wave-shapes/noise.svg'
import { ReactComponent as Arrows } from '../../../icons/arrows.svg'
import './style.scss'
import Knob from '../../../components/Knob'
import { MapStateToProps, MapDispatchToProps, connect } from 'react-redux'
import { setVCO1WaveShape } from '../../../../state/actions'
import { RootState, VCO1WaveShape } from '../../../../state/types/state'

export interface WaveShapeProps {
  value: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const WaveShape: React.FC<WaveShapeProps> = ({ value, onChange }) => {
  return (
    <div className="WaveShape">
      <Knob
        value={value}
        min={0}
        max={3}
        startAngle={-70}
        endAngle={70}
        onChange={onChange}
        title="WAVE FORM"
      >
        <Triangle />
        <Saw />
        <div className="squareOrPulse">
          <Square />
          <Arrows />
          <Pulse />
        </div>
        <Noise />
      </Knob>
    </div>
  )
}

const mapStateToProps: MapStateToProps<
  {
    value: number
  },
  {},
  RootState
> = state => ({ value: state.vco1.waveShape })

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

export default connect(mapStateToProps, mapDispatchToProps)(WaveShape)
