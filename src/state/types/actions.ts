import { VCO1WaveShape, VCO2WaveShape } from './state'

export enum ActionType {
  SET_VOLUME = 'SET_VOLUME',
  SET_VCO1_WAVE_SHAPE = 'SET_VCO1_WAVE_SHAPE',
  SET_VCO1_PULSE_WIDTH = 'SET_VCO1_PULSE_WIDTH',
  SET_VCO1_SCALE = 'SET_VCO1_SCALE',
  SET_VCO2_WAVE_SHAPE = 'SET_VCO2_WAVE_SHAPE',
  SET_VCO2_PITCH = 'SET_VCO1_PITCH',
  SET_VCO2_SCALE = 'SET_VCO2_SCALE',
  SET_VCO1_LEVEL = 'SET_VCO1_LEVEL',
  SET_VCO2_LEVEL = 'SET_VCO2_LEVEL'
}

export interface SetVolumeAction {
  type: ActionType.SET_VOLUME
  /** The new volume value */
  payload: number
}

export interface SetVCO1WaveShapeAction {
  type: ActionType.SET_VCO1_WAVE_SHAPE
  /** The new wave shape */
  payload: VCO1WaveShape
}

export interface SetVCO1PulseWidthAction {
  type: ActionType.SET_VCO1_PULSE_WIDTH
  /** The new pulse width value */
  payload: number
}

export interface SetVCO1ScaleAction {
  type: ActionType.SET_VCO1_SCALE
  /** The new scale */
  payload: number
}

export interface SetVCO2WaveShapeAction {
  type: ActionType.SET_VCO2_WAVE_SHAPE
  /** The new wave shape */
  payload: VCO2WaveShape
}

export interface SetVCO2PitchAction {
  type: ActionType.SET_VCO2_PITCH
  /** The new pitch value */
  payload: number
}

export interface SetVCO2ScaleAction {
  type: ActionType.SET_VCO2_SCALE
  /** The new scale */
  payload: number
}

export interface SetVCO1LevelAction {
  type: ActionType.SET_VCO1_LEVEL
  payload: number
}

export interface SetVCO2LevelAction {
  type: ActionType.SET_VCO2_LEVEL
  payload: number
}

export type Action =
  | SetVolumeAction
  | SetVCO1WaveShapeAction
  | SetVCO1PulseWidthAction
  | SetVCO1ScaleAction
  | SetVCO2WaveShapeAction
  | SetVCO2PitchAction
  | SetVCO2ScaleAction
  | SetVCO1LevelAction
  | SetVCO2LevelAction