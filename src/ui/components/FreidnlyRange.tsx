import React, { useState, useEffect, useCallback } from 'react'

export interface FriendlyRangeProps {
  step: number | string
  min: number
  max: number
  value: number
  resistance?: number
  handleChange?: (newValue: number) => void
}

enum DragStatus {
  NONE,
  TOUCH,
  MOUSE
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

  const [dragStatus, setDragStatus] = useState(DragStatus.NONE)
  const [identifier, setIdentifier] = useState(0)
  const [dragInitials, setDragInitials] = useState([0, value])

  const startDrag = useCallback(
    (yPos: number) => {
      setDragInitials([yPos, value])
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
    setDragStatus(DragStatus.NONE)
  }, [])

  // we should connect the move and release listeners to the document so the
  // user can drag outside the knob.
  useEffect(() => {
    if (dragStatus === DragStatus.MOUSE) {
      const mouseResistance = resistance * 150

      const onMouseMove = (e: MouseEvent) => {
        updateDrag(e.clientY, mouseResistance)
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
    }
    if (dragStatus === DragStatus.TOUCH) {
      const touchResistance = resistance * 150

      const onTouchMove = (e: TouchEvent) => {
        const touches = e.changedTouches

        for (let i = 0; i < touches.length; i++) {
          const touch = touches.item(i)
          if (touch && touch.identifier === identifier) {
            updateDrag(touch.clientY, touchResistance)
            break
          }
        }
      }

      const onTouchEnd = () => {
        endDrag()
      }

      document.addEventListener('touchmove', onTouchMove)
      document.addEventListener('touchend', onTouchEnd)

      return () => {
        document.removeEventListener('touchmove', onTouchMove)
        document.removeEventListener('touchend', onTouchEnd)
      }
    }
  }, [resistance, dragStatus, updateDrag, endDrag, identifier])

  return (
    <div
      className="FriendlyRange"
      onMouseDown={e => {
        e.preventDefault()
        setDragStatus(DragStatus.MOUSE)
        startDrag(e.clientY)
      }}
      onTouchStart={e => {
        e.preventDefault()
        const touch = e.changedTouches.item(e.changedTouches.length - 1)
        setIdentifier(touch.identifier)
        setDragStatus(DragStatus.TOUCH)
        startDrag(touch.clientY)
      }}
    />
  )
}

export default FriendlyRange
