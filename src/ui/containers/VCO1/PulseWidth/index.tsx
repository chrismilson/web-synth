import React from 'react'
import { connect, MapDispatchToProps } from 'react-redux'
import { ReactComponent as Square } from '../../../icons/wave-shapes/square.svg'
import { ReactComponent as ShortPulse } from '../../../icons/wave-shapes/short-pulse.svg'
import { ReactComponent as LongPulse } from '../../../icons/wave-shapes/long-pulse.svg'
import './style.scss'
import Knob from '../../../components/Knob'
import { MapStateToProps } from 'react-redux'
import { RootState } from '../../../../state/types/state'
import { setVCO1PulseWidth } from '../../../../state/actions'

export interface PulseWidthProps {
  value: number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const PulseWidth: React.FC<PulseWidthProps> = ({ value, onChange }) => {
  return (
    <div className="PulseWidth">
      <Knob
        value={value}
        min={-1}
        max={1}
        step={0.01}
        onChange={onChange}
        title="PW"
      >
        {[
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
        ]}
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
> = state => ({ value: state.vco1.pulseWidth })

const mapDispatchToProps: MapDispatchToProps<
  {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  },
  {}
> = dispatch => ({
  onChange: event => {
    dispatch(setVCO1PulseWidth(event.target.valueAsNumber))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PulseWidth)
