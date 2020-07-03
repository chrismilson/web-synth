import React from 'react'
import Key from './Key'
import './style.scss'

export interface KeyboardProps {
  /** The midi value of the lowest key on the keyboard. */
  min: number
  /** The midi value of the highest key on the keyboard. */
  max: number

  handler?: (note: number, on: boolean) => void
}

const Keyboard: React.FC<KeyboardProps> = ({
  min,
  max,
  handler = () => void 0
}) => {
  return (
    <div className="Keyboard">
      {[...Array(max - min + 1)] // array of the right length
        .map((_, i) => i + min) // set the values to the key number
        // map the numbers to key components
        .map(key => (
          <Key key={key} note={key} handler={handler} />
        ))}
    </div>
  )
}

export default Keyboard
