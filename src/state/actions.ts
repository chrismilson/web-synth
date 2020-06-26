import {
  ActionType,
  SetVolumeAction,
  SetVCO1WaveShapeAction,
  SetVCO1PulseWidthAction,
  SetVCO1ScaleAction,
  SetVCO2WaveShapeAction,
  SetVCO2PitchAction,
  SetVCO2ScaleAction,
  SetVCO1LevelAction,
  SetVCO2LevelAction
} from './types/actions'
import { VCO1WaveShape, VCO2WaveShape } from './types/state'

export const setVolume = (volume: number): SetVolumeAction => ({
  type: ActionType.SET_VOLUME,
  payload: volume
})

export const setVCO1WaveShape = (
  shape: VCO1WaveShape
): SetVCO1WaveShapeAction => ({
  type: ActionType.SET_VCO1_WAVE_SHAPE,
  payload: shape
})

export const setVCO1PulseWidth = (
  pulseWidth: number
): SetVCO1PulseWidthAction => ({
  type: ActionType.SET_VCO1_PULSE_WIDTH,
  payload: pulseWidth
})

export const setVCO1Scale = (scale: number): SetVCO1ScaleAction => ({
  type: ActionType.SET_VCO1_SCALE,
  payload: scale
})

export const setVCO2WaveShape = (
  shape: VCO2WaveShape
): SetVCO2WaveShapeAction => ({
  type: ActionType.SET_VCO2_WAVE_SHAPE,
  payload: shape
})

export const setVCO2Pitch = (pitch: number): SetVCO2PitchAction => ({
  type: ActionType.SET_VCO2_PITCH,
  payload: pitch
})

export const setVCO2Scale = (scale: number): SetVCO2ScaleAction => ({
  type: ActionType.SET_VCO2_SCALE,
  payload: scale
})

export const setVCO1Level = (level: number): SetVCO1LevelAction => ({
  type: ActionType.SET_VCO1_LEVEL,
  payload: level
})

export const setVCO2Level = (level: number): SetVCO2LevelAction => ({
  type: ActionType.SET_VCO2_LEVEL,
  payload: level
})
