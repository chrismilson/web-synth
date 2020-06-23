import React from 'react'
import './style.scss'
import { ReactComponent as KnobSVG } from '../../icons/knob.svg'

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
  handleChange?: (newValue: number) => void
  title?: string
  className?: string
  labels?: React.ReactNode[]
}

const Knob: React.FC<KnobProps> = ({
  step = 1,
  min = 0,
  max = 1,
  value,
  startAngle = -150,
  endAngle = 150,
  handleChange,
  title,
  className,
  labels = []
}) => {
  const normalised = (value - min) / (max - min)

  return (
    <div className={className ? `${className} Knob` : 'Knob'}>
      <div className="selector">
        <KnobSVG
          className="visual"
          style={{
            rotate: `${(endAngle - startAngle) * normalised + startAngle}deg`
          }}
        />
        <input
          className="input"
          type="range"
          onChange={
            handleChange &&
            (event => {
              handleChange(event.target.valueAsNumber)
            })
          }
          {...{ value, min, max, step }}
        />
      </div>
      <div className="labels">
        {labels.map((label, i) => {
          const angle =
            -90 +
            startAngle +
            ((endAngle - startAngle) * i) / (labels.length - 1)
          const dy = Math.sin((angle * Math.PI) / 180)
          const dx = Math.cos((angle * Math.PI) / 180)
          return (
            <div key={i} className="label">
              <div
                className="tickmark"
                style={{
                  rotate: `${angle - 180}deg`,
                  top: `${50 + dy * 54}%`,
                  left: `${50 + dx * 54}%`
                }}
              ></div>
              <div
                className="child"
                style={{
                  top: `${50 + dy * 75}%`,
                  left: `${50 + dx * 80}%`
                }}
              >
                {label}
              </div>
            </div>
          )
        })}
      </div>
      {title && <div className="title">{title}</div>}
    </div>
  )
}

export default Knob
