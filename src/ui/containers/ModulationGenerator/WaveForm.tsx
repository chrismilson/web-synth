import React from 'react'
import { MapStateToProps, MapDispatchToProps, connect } from 'react-redux'
import { RootState } from '../../../state/types/state'
import { setModulationGeneratorWaveForm } from '../../../state/actions'

import { ReactComponent as Triangle } from '../../icons/wave-shapes/triangle.svg'
import { ReactComponent as Saw } from '../../icons/wave-shapes/saw.svg'
import { ReactComponent as Short } from '../../icons/wave-shapes/long-pulse.svg'
import { ReactComponent as Long } from '../../icons/wave-shapes/short-pulse.svg'
import { ReactComponent as Square } from '../../icons/wave-shapes/square.svg'
import Knob from '../../components/Knob'

const mapStateToProps: MapStateToProps<
  {
    step: string
    min: number
    max: number
    value: number
    title: string
    className: string
    labels: React.ReactNode[]
  },
  {},
  RootState
> = state => ({
  step: 'any',
  min: 0,
  max: 1,
  value: state.modulationGenerator.waveForm,
  title: 'WAVE FORM',
  className: 'waveForm',
  labels: [
    <div key="low" className="low">
      <Short />
      <Saw />
    </div>,
    '',
    '',
    '',
    '',
    <div key="mid" className="mid">
      <Square />
      <Triangle />
    </div>,
    '',
    '',
    '',
    '',
    <div key="high" className="high">
      <Long />
      <Saw />
    </div>
  ]
})

const mapDispatchToProps: MapDispatchToProps<
  {
    handleChange: (value: number) => void
  },
  {}
> = dispatch => ({
  handleChange: value => {
    dispatch(setModulationGeneratorWaveForm(value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Knob)
