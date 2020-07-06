import React, { useEffect } from 'react'
import Key from './Key'
import './style.scss'

/** Maps key values from the [DOM Level 3 Events
 * spec](https://www.w3.org/TR/uievents-key/#named-key-attribute-values) to
 * offset values from 0 for calculating the intended key to press. */
const notesByKey: {
  [k: string]: number
} = {
  z: 0,
  s: 1,
  x: 2,
  d: 3,
  c: 4,
  v: 5,
  g: 6,
  b: 7,
  h: 8,
  n: 9,
  j: 10,
  m: 11,
  ',': 12,
  q: 12,
  l: 13,
  '2': 13,
  '.': 14,
  w: 14,
  ';': 15,
  '3': 15,
  '/': 16,
  e: 16,
  r: 17,
  '5': 18,
  t: 19,
  '6': 20,
  y: 21,
  '7': 22,
  u: 23,
  i: 24,
  '9': 25,
  o: 26,
  '0': 27,
  p: 28,
  '[': 29,
  '=': 30,
  ']': 31
}

export interface KeyboardProps {
  keys: boolean[]
  bassNote: number
  handler?: (note: number, on: boolean) => void
}

const Keyboard: React.FC<KeyboardProps> = ({
  keys,
  handler = () => void 0,
  bassNote
}) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key in notesByKey) {
        handler(notesByKey[e.key] + bassNote, true)
      }
    }
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key in notesByKey) {
        handler(notesByKey[e.key] + bassNote, false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [bassNote, handler])

  return (
    <div className="Keyboard">
      {keys // array of the right length
        .map((on, idx) => (
          <Key
            key={idx + bassNote}
            note={idx + bassNote}
            handler={handler}
            isOn={on}
          />
        ))}
    </div>
  )
}

export default Keyboard
