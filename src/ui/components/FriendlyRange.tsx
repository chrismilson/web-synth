import React, { useState, useEffect, useCallback, useRef } from 'react'

export interface FriendlyRangeProps {
  step: number | string
  min: number
  max: number
  value: number
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
  handleChange = () => void 0
}) => {
  const resistance = 1 / (max - min)
  const defaultValue = useState(value)[0]

  const validate = useCallback(
    value => {
      value = Math.max(min, value)
      value = Math.min(max, value)

      if (typeof step === 'number') {
        const targetStep = Math.round((value - min) / step)
        value = min + targetStep * step
      }
      return value
    },
    [min, max, step]
  )

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

  // There is currently an issue with react and chrome and the default
  // passiveness of wheel listeners.
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const elem = ref.current

      const onWheel = (e: WheelEvent) => {
        e.preventDefault()

        const change = e.deltaY

        handleChange(validate(value + change / 800))
      }

      elem.addEventListener('wheel', onWheel, { passive: false })

      return () => {
        if (elem) {
          elem.removeEventListener('wheel', onWheel)
        }
      }
    }
  }, [handleChange, value, validate])

  return (
    <div
      className="FriendlyRange"
      onMouseDown={e => {
        e.preventDefault()
        setDragStatus(DragStatus.MOUSE)
        startDrag(e.clientY)
      }}
      onTouchStart={e => {
        const touch = e.changedTouches.item(e.changedTouches.length - 1)
        setIdentifier(touch.identifier)
        setDragStatus(DragStatus.TOUCH)
        startDrag(touch.clientY)
      }}
      onDoubleClick={e => {
        e.preventDefault()

        handleChange(defaultValue)
      }}
      ref={ref}
    />
  )
}

export default FriendlyRange
