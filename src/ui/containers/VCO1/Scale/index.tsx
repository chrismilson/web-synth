import React from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import './style.scss'
import Knob from '../../../components/Knob'
import { RootState } from '../../../../state/types/state'
import { setVCO1Scale } from '../../../../state/actions'

export interface ScaleProps {
  value: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Scale: React.FC<ScaleProps> = ({ value, onChange }) => {
  return (
    <div className="Scale">
      <Knob
        value={value}
        min={0}
        max={3}
        startAngle={-70}
        endAngle={70}
        onChange={onChange}
        title="SCALE"
      >
        {["32'", "16'", "8'", "4'"]}
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
> = state => ({ value: state.vco1.scale })

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

export default connect(mapStateToProps, mapDispatchToProps)(Scale)
