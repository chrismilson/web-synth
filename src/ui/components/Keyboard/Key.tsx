import React, { useMemo, useCallback, MouseEventHandler } from 'react'

export interface KeyProps {
  /** The note value of the note the key represents */
  note: number
  handler: (note: number, on: boolean) => void
  isOn: boolean
}

const Key: React.FC<KeyProps> = ({ note, handler, isOn }) => {
  const isBlack = useMemo(() => {
    return [
      1, // C#
      3, // D#
      6, // F#
      8, // G#
      10 // A#
    ].includes(note % 12)
  }, [note])

  const start = useCallback(() => {
    handler(note, true)
  }, [handler, note])

  const end = useCallback(() => {
    handler(note, false)
  }, [handler, note])

  const mouseStart: MouseEventHandler = e => {
    if (e.buttons & 1) {
      start()
    }
  }

  return (
    <div
      className={`Key ${isBlack ? 'black' : 'white'} ${isOn ? 'down' : 'up'}`}
      onMouseDown={mouseStart}
      onMouseOver={mouseStart}
      onMouseUp={isOn ? end : undefined}
      onMouseLeave={isOn ? end : undefined}
      onTouchStart={start}
      onTouchEnd={isOn ? end : undefined}
    />
  )
}

export default Key
