import React from 'react'
import { connect, MapDispatchToProps } from 'react-redux'
import { ReactComponent as Square } from '../../icons/wave-shapes/square.svg'
import { ReactComponent as ShortPulse } from '../../icons/wave-shapes/short-pulse.svg'
import { ReactComponent as LongPulse } from '../../icons/wave-shapes/long-pulse.svg'
import Knob from '../../components/Knob'
import { MapStateToProps } from 'react-redux'
import { RootState } from '../../../state/types/state'
import { setVCO1PulseWidth } from '../../../state/actions'

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
  value: state.vco1.pulseWidth,
  min: -1,
  max: 1,
  step: 0.01,
  title: 'PW',
  className: 'pulseWidth',
  labels: [
    // the empty strings are so that the tickmarks render.
    <ShortPulse key="short" />,
    '',
    '',
    '',
    '',
    <Square key="square" />,
    '',
    '',
    '',
    '',
    <LongPulse key="long" />
  ]
})

const mapDispatchToProps: MapDispatchToProps<
  {
    handleChange: (value: number) => void
  },
  {}
> = dispatch => ({
  handleChange: value => {
    dispatch(setVCO1PulseWidth(value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Knob)
