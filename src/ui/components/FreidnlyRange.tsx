import React, { useState, useEffect, useCallback } from 'react'

export interface FriendlyRangeProps {
  step: number | string
  min: number
  max: number
  value: number
  resistance?: number
  handleChange?: (newValue: number) => void
}

const FriendlyRange: React.FC<FriendlyRangeProps> = ({
  step,
  min,
  max,
  value,
  resistance = 1,
  handleChange = () => void 0
}) => {
  const validate = useCallback(value => {
    value = Math.max(min, value)
    value = Math.min(max, value)

    if (typeof step === 'number') {
      const targetStep = Math.round((value - min) / step)
      value = min + targetStep * step
    }
    return value
  }, [])

  const [dragging, setDragging] = useState(false)
  const [dragInitials, setDragInitials] = useState([0, value])

  const startDrag = useCallback(
    (yPos: number) => {
      setDragInitials([yPos, value])
      setDragging(true)
    },
    [value]
  )

  const updateDrag = useCallback(
    (yPos: number, resistance: number) => {
      const [initialY, initialValue] = dragInitials
      handleChange(validate(initialValue + (initialY - yPos) / resistance))
    },
    [dragInitials, validate, handleChange]
  )

  const endDrag = useCallback(() => {
    setDragging(false)
  }, [])

  // we should connect the move and release listeners to the document so the
  // user can drag outside the knob
  useEffect(() => {
    if (!dragging) {
      return
    }
    const defaultMouseResistance = 200

    const onMouseMove = (e: MouseEvent) => {
      updateDrag(e.clientY, resistance * defaultMouseResistance)
    }

    const onMouseUp = () => {
      endDrag()
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [dragging, updateDrag, endDrag])

  return (
    <div
      className="FriendlyRange"
      onMouseDown={e => {
        e.preventDefault()
        startDrag(e.clientY)
      }}
    ></div>
  )
}

export default FriendlyRange
