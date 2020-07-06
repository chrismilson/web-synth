import React, { useMemo, useCallback, useState, MouseEventHandler } from 'react'

export interface KeyProps {
  /** The note value of the note the key represents */
  note: number
  handler: (note: number, on: boolean) => void
}

const Key: React.FC<KeyProps> = ({ note, handler }) => {
  const isBlack = useMemo(() => {
    return [
      1, // A#
      4, // C#
      6, // D#
      9, // F#
      11 // G#
    ].includes(note % 12)
  }, [note])

  const [isDown, setDown] = useState(false)

  const start = useCallback(() => {
    setDown(true)
    handler(note, true)
  }, [handler, note])

  const end = useCallback(() => {
    setDown(false)
    handler(note, false)
  }, [handler, note])

  const mouseStart: MouseEventHandler = e => {
    if (e.buttons & 1) {
      start()
    }
  }

  return (
    <div
      className={`Key ${isBlack ? 'black' : 'white'} ${isDown ? 'down' : 'up'}`}
      onMouseDown={mouseStart}
      onMouseOver={mouseStart}
      onMouseUp={isDown ? end : undefined}
      onMouseLeave={isDown ? end : undefined}
      onDoubleClick={() => {
        handler(note, true)
      }}
    >
      {note}
    </div>
  )
}

export default Key
