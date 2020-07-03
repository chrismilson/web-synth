import * as actions from './types/actions'
import { VCO1WaveShape, VCO2WaveShape } from './types/state'

const ActionType = actions.ActionType

export const setVolume = (volume: number): actions.SetVolumeAction => ({
  type: ActionType.SET_VOLUME,
  payload: volume
})

export const setVCO1WaveShape = (
  shape: VCO1WaveShape
): actions.SetVCO1WaveShapeAction => ({
  type: ActionType.SET_VCO1_WAVE_SHAPE,
  payload: shape
})

export const setVCO1PulseWidth = (
  pulseWidth: number
): actions.SetVCO1PulseWidthAction => ({
  type: ActionType.SET_VCO1_PULSE_WIDTH,
  payload: pulseWidth
})

export const setVCO1Scale = (scale: number): actions.SetVCO1ScaleAction => ({
  type: ActionType.SET_VCO1_SCALE,
  payload: scale
})

export const setVCO2WaveShape = (
  shape: VCO2WaveShape
): actions.SetVCO2WaveShapeAction => ({
  type: ActionType.SET_VCO2_WAVE_SHAPE,
  payload: shape
})

export const setVCO2Pitch = (pitch: number): actions.SetVCO2PitchAction => ({
  type: ActionType.SET_VCO2_PITCH,
  payload: pitch
})

export const setVCO2Scale = (scale: number): actions.SetVCO2ScaleAction => ({
  type: ActionType.SET_VCO2_SCALE,
  payload: scale
})

export const setVCO1Level = (level: number): actions.SetVCO1LevelAction => ({
  type: ActionType.SET_VCO1_LEVEL,
  payload: level
})

export const setVCO2Level = (level: number): actions.SetVCO2LevelAction => ({
  type: ActionType.SET_VCO2_LEVEL,
  payload: level
})

export const setPortamento = (port: number): actions.SetPortamentoAction => ({
  type: ActionType.SET_PORTAMENTO,
  payload: port
})

export const setMasterTune = (tune: number): actions.SetMasterTune => ({
  type: ActionType.SET_MASTER_TUNE,
  payload: tune
})

export const setFrequencyModulatorModulationGenerator = (
  level: number
): actions.SetFrequencyModulatorModulationGeneratorAction => ({
  type: ActionType.SET_FREQUENCY_MODULATOR_MODULATION_GENERATOR,
  payload: level
})

export const setFrequencyModulatorEnvelopeGenerator = (
  level: number
): actions.SetFrequencyModulatorEnvelopeGeneratorAction => ({
  type: ActionType.SET_FREQUENCY_MODULATOR_ENVELOPE_GENERATOR,
  payload: level
})

export const setHighpassCutoff = (
  frequency: number
): actions.SetHighpassCutoffAction => ({
  type: ActionType.SET_HIGHPASS_CUTOFF,
  payload: frequency
})

export const setHighpassPeak = (q: number): actions.SetHighpassPeakAction => ({
  type: ActionType.SET_HIGHPASS_PEAK,
  payload: q
})

export const setHighpassModulatorModulationGenerator = (
  level: number
): actions.SetHighpassModulatorModulationGeneratorAction => ({
  type: ActionType.SET_HIGHPASS_MODULATOR_MODULATION_GENERATOR,
  payload: level
})

export const setHighpassModulatorEnvelopeGenerator = (
  level: number
): actions.SetHighpassModulatorEnvelopeGeneratorAction => ({
  type: ActionType.SET_HIGHPASS_MODULATOR_ENVELOPE_GENERATOR,
  payload: level
})

export const setLowpassCutoff = (
  frequency: number
): actions.SetLowpassCutoffAction => ({
  type: ActionType.SET_LOWPASS_CUTOFF,
  payload: frequency
})

export const setLowpassPeak = (q: number): actions.SetLowpassPeakAction => ({
  type: ActionType.SET_LOWPASS_PEAK,
  payload: q
})

export const setLowpassModulatorModulationGenerator = (
  level: number
): actions.SetLowpassModulatorModulationGeneratorAction => ({
  type: ActionType.SET_LOWPASS_MODULATOR_MODULATION_GENERATOR,
  payload: level
})

export const setLowpassModulatorEnvelopeGenerator = (
  level: number
): actions.SetLowpassModulatorEnvelopeGeneratorAction => ({
  type: ActionType.SET_LOWPASS_MODULATOR_ENVELOPE_GENERATOR,
  payload: level
})

export const setModulationGeneratorWaveForm = (
  form: number
): actions.SetModulationGeneratorWaveFormAction => ({
  type: ActionType.SET_MODULATION_GENERATOR_WAVE_FORM,
  payload: form
})

export const setModulationGeneratorFrequency = (
  frequency: number
): actions.SetModulationGeneratorFrequencyAction => ({
  type: ActionType.SET_MODULATION_GENERATOR_FREQUENCY,
  payload: frequency
})

export const setEnvelopeGenerator1Delay = (
  time: number
): actions.SetEnvelopeGenerator1DelayAction => ({
  type: ActionType.SET_ENVELOPE_GENERATOR_1_DELAY,
  payload: time
})

export const setEnvelopeGenerator1Attack = (
  time: number
): actions.SetEnvelopeGenerator1AttackAction => ({
  type: ActionType.SET_ENVELOPE_GENERATOR_1_ATTACK,
  payload: time
})

export const setEnvelopeGenerator1Release = (
  time: number
): actions.SetEnvelopeGenerator1ReleaseAction => ({
  type: ActionType.SET_ENVELOPE_GENERATOR_1_RELEASE,
  payload: time
})

export const setEnvelopeGenerator2Hold = (
  time: number
): actions.SetEnvelopeGenerator2HoldAction => ({
  type: ActionType.SET_ENVELOPE_GENERATOR_2_HOLD,
  payload: time
})

export const setEnvelopeGenerator2Attack = (
  time: number
): actions.SetEnvelopeGenerator2AttackAction => ({
  type: ActionType.SET_ENVELOPE_GENERATOR_2_ATTACK,
  payload: time
})

export const setEnvelopeGenerator2Decay = (
  time: number
): actions.SetEnvelopeGenerator2DecayAction => ({
  type: ActionType.SET_ENVELOPE_GENERATOR_2_DECAY,
  payload: time
})

export const setEnvelopeGenerator2Sustain = (
  level: number
): actions.SetEnvelopeGenerator2SustainAction => ({
  type: ActionType.SET_ENVELOPE_GENERATOR_2_SUSTAIN,
  payload: level
})

export const setEnvelopeGenerator2Release = (
  time: number
): actions.SetEnvelopeGenerator2ReleaseAction => ({
  type: ActionType.SET_ENVELOPE_GENERATOR_2_RELEASE,
  payload: time
})
