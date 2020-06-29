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
  SetVCO2LevelAction,
  SetPortamentoAction,
  SetMasterTune,
  SetFrequencyModulatorModulationGeneratorAction,
  SetFrequencyModulatorEnvelopeGeneratorAction,
  SetHighpassCutoffAction,
  SetHighpassPeakAction,
  SetLowpassCutoffAction,
  SetLowpassPeakAction
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

export const setPortamento = (port: number): SetPortamentoAction => ({
  type: ActionType.SET_PORTAMENTO,
  payload: port
})

export const setMasterTune = (tune: number): SetMasterTune => ({
  type: ActionType.SET_MASTER_TUNE,
  payload: tune
})

export const setFrequencyModulatorModulationGenerator = (
  level: number
): SetFrequencyModulatorModulationGeneratorAction => ({
  type: ActionType.SET_FREQUENCY_MODULATOR_MODULATION_GENERATOR,
  payload: level
})

export const setFrequencyModulatorEnvelopeGenerator = (
  level: number
): SetFrequencyModulatorEnvelopeGeneratorAction => ({
  type: ActionType.SET_FREQUENCY_MODULATOR_ENVELOPE_GENERATOR,
  payload: level
})

export const setHighpassCutoff = (
  frequency: number
): SetHighpassCutoffAction => ({
  type: ActionType.SET_HIGHPASS_CUTOFF,
  payload: frequency
})

export const setHighpassPeak = (q: number): SetHighpassPeakAction => ({
  type: ActionType.SET_HIGHPASS_PEAK,
  payload: q
})

export const setLowpassCutoff = (
  frequency: number
): SetLowpassCutoffAction => ({
  type: ActionType.SET_LOWPASS_CUTOFF,
  payload: frequency
})

export const setLowpassPeak = (q: number): SetLowpassPeakAction => ({
  type: ActionType.SET_LOWPASS_PEAK,
  payload: q
})
