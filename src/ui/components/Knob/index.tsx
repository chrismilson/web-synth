import React from 'react'
import './style.scss'
import { ReactComponent as KnobSVG } from './face.svg'

export interface KnobProps {
  step?: string | number
  min?: number
  max?: number
  /** A number in the range min-max */
  value: number
  /**
   * The angle (clockwise from twelve o'clock) that the knob will point to when
   * value is 0.
   */
  startAngle?: number
  /**
   * The angle (clockwise from twelve o'clock) that the knob will point to when
   * value is 1.
   */
  endAngle?: number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Knob: React.FC<KnobProps> = ({
  step = 1,
  min = 0,
  max = 1,
  value,
  startAngle = -150,
  endAngle = 150,
  onChange
}) => {
  const normalised = (value - min) / (max - min)

  return (
    <div className="Knob">
      <KnobSVG
        className="visual"
        style={{
          rotate: `${(endAngle - startAngle) * normalised + startAngle}deg`
        }}
      />
      <input
        className="input"
        type="range"
        {...{ value, min, max, step, onChange }}
      />
    </div>
  )
}

export default Knob
