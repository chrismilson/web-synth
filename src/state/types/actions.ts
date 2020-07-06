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
  SET_VCO2_LEVEL = 'SET_VCO2_LEVEL',
  SET_PORTAMENTO = 'SET_PORTAMENTO',
  SET_MASTER_TUNE = 'SET_MASTER_TUNE',
  SET_FREQUENCY_MODULATOR_MODULATION_GENERATOR = 'SET_FREQUENCY_MODULATOR_MODULATION_GENERATOR',
  SET_FREQUENCY_MODULATOR_ENVELOPE_GENERATOR = 'SET_FREQUENCY_MODULATOR_ENVELOPE_GENERATOR',
  SET_HIGHPASS_CUTOFF = 'SET_HIGHPASS_CUTOFF',
  SET_HIGHPASS_PEAK = 'SET_HIGHPASS_PEAK',
  SET_HIGHPASS_MODULATOR_MODULATION_GENERATOR = 'SET_HIGHPASS_MODULATOR_MODULATION_GENERATOR',
  SET_HIGHPASS_MODULATOR_ENVELOPE_GENERATOR = 'SET_HIGHPASS_MODULATOR_ENVELOPE_GENERATOR',
  SET_LOWPASS_CUTOFF = 'SET_LOWPASS_CUTOFF',
  SET_LOWPASS_PEAK = 'SET_LOWPASS_PEAK',
  SET_LOWPASS_MODULATOR_MODULATION_GENERATOR = 'SET_LOWPASS_MODULATOR_MODULATION_GENERATOR',
  SET_LOWPASS_MODULATOR_ENVELOPE_GENERATOR = 'SET_LOWPASS_MODULATOR_ENVELOPE_GENERATOR',
  SET_MODULATION_GENERATOR_WAVE_FORM = 'SET_MODULATION_GENERATOR_WAVE_FORM',
  SET_MODULATION_GENERATOR_FREQUENCY = 'SET_MODULATION_GENERATOR_FREQUENCY',
  SET_ENVELOPE_GENERATOR_1_DELAY = 'SET_ENVELOPE_GENERATOR_1_DELAY',
  SET_ENVELOPE_GENERATOR_1_ATTACK = 'SET_ENVELOPE_GENERATOR_1_ATTACK',
  SET_ENVELOPE_GENERATOR_1_RELEASE = 'SET_ENVELOPE_GENERATOR_1_RELEASE',
  SET_ENVELOPE_GENERATOR_2_HOLD = 'SET_ENVELOPE_GENERATOR_2_HOLD',
  SET_ENVELOPE_GENERATOR_2_ATTACK = 'SET_ENVELOPE_GENERATOR_2_ATTACK',
  SET_ENVELOPE_GENERATOR_2_DECAY = 'SET_ENVELOPE_GENERATOR_2_DECAY',
  SET_ENVELOPE_GENERATOR_2_SUSTAIN = 'SET_ENVELOPE_GENERATOR_2_SUSTAIN',
  SET_ENVELOPE_GENERATOR_2_RELEASE = 'SET_ENVELOPE_GENERATOR_2_RELEASE',
  SET_KEYBOARD_OCTAVES = 'SET_KEYBOARD_OCTAVES',
  SET_KEY_DOWN = 'SET_KEY_DOWN',
  SET_KEY_UP = 'SET_KEY_UP',
  SET_KEYBOARD_BASS_NOTE = 'SET_KEYBOARD_BASS_NOTE'
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

export interface SetPortamentoAction {
  type: ActionType.SET_PORTAMENTO
  payload: number
}

export interface SetMasterTune {
  type: ActionType.SET_MASTER_TUNE
  payload: number
}

export interface SetFrequencyModulatorModulationGeneratorAction {
  type: ActionType.SET_FREQUENCY_MODULATOR_MODULATION_GENERATOR
  payload: number
}

export interface SetFrequencyModulatorEnvelopeGeneratorAction {
  type: ActionType.SET_FREQUENCY_MODULATOR_ENVELOPE_GENERATOR
  payload: number
}

export interface SetHighpassCutoffAction {
  type: ActionType.SET_HIGHPASS_CUTOFF
  payload: number
}

export interface SetHighpassPeakAction {
  type: ActionType.SET_HIGHPASS_PEAK
  payload: number
}

export interface SetHighpassModulatorModulationGeneratorAction {
  type: ActionType.SET_HIGHPASS_MODULATOR_MODULATION_GENERATOR
  payload: number
}

export interface SetHighpassModulatorEnvelopeGeneratorAction {
  type: ActionType.SET_HIGHPASS_MODULATOR_ENVELOPE_GENERATOR
  payload: number
}

export interface SetLowpassCutoffAction {
  type: ActionType.SET_LOWPASS_CUTOFF
  payload: number
}

export interface SetLowpassPeakAction {
  type: ActionType.SET_LOWPASS_PEAK
  payload: number
}

export interface SetLowpassModulatorModulationGeneratorAction {
  type: ActionType.SET_LOWPASS_MODULATOR_MODULATION_GENERATOR
  payload: number
}

export interface SetLowpassModulatorEnvelopeGeneratorAction {
  type: ActionType.SET_LOWPASS_MODULATOR_ENVELOPE_GENERATOR
  payload: number
}

export interface SetModulationGeneratorWaveFormAction {
  type: ActionType.SET_MODULATION_GENERATOR_WAVE_FORM
  payload: number
}

export interface SetModulationGeneratorFrequencyAction {
  type: ActionType.SET_MODULATION_GENERATOR_FREQUENCY
  payload: number
}

export interface SetEnvelopeGenerator1DelayAction {
  type: ActionType.SET_ENVELOPE_GENERATOR_1_DELAY
  payload: number
}

export interface SetEnvelopeGenerator1AttackAction {
  type: ActionType.SET_ENVELOPE_GENERATOR_1_ATTACK
  payload: number
}

export interface SetEnvelopeGenerator1ReleaseAction {
  type: ActionType.SET_ENVELOPE_GENERATOR_1_RELEASE
  payload: number
}

export interface SetEnvelopeGenerator2HoldAction {
  type: ActionType.SET_ENVELOPE_GENERATOR_2_HOLD
  payload: number
}

export interface SetEnvelopeGenerator2AttackAction {
  type: ActionType.SET_ENVELOPE_GENERATOR_2_ATTACK
  payload: number
}

export interface SetEnvelopeGenerator2DecayAction {
  type: ActionType.SET_ENVELOPE_GENERATOR_2_DECAY
  payload: number
}

export interface SetEnvelopeGenerator2SustainAction {
  type: ActionType.SET_ENVELOPE_GENERATOR_2_SUSTAIN
  payload: number
}

export interface SetEnvelopeGenerator2ReleaseAction {
  type: ActionType.SET_ENVELOPE_GENERATOR_2_RELEASE
  payload: number
}

export interface SetKeyboardOctavesAction {
  type: ActionType.SET_KEYBOARD_OCTAVES
  payload: number
}

export interface SetKeyDownAction {
  type: ActionType.SET_KEY_DOWN
  payload: number
}

export interface SetKeyUpAction {
  type: ActionType.SET_KEY_UP
  payload: number
}

export interface SetKeyboardBassNoteAction {
  type: ActionType.SET_KEYBOARD_BASS_NOTE
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
  | SetPortamentoAction
  | SetMasterTune
  | SetFrequencyModulatorModulationGeneratorAction
  | SetFrequencyModulatorEnvelopeGeneratorAction
  | SetHighpassCutoffAction
  | SetHighpassPeakAction
  | SetHighpassModulatorModulationGeneratorAction
  | SetHighpassModulatorEnvelopeGeneratorAction
  | SetLowpassCutoffAction
  | SetLowpassPeakAction
  | SetLowpassModulatorModulationGeneratorAction
  | SetLowpassModulatorEnvelopeGeneratorAction
  | SetModulationGeneratorWaveFormAction
  | SetModulationGeneratorFrequencyAction
  | SetEnvelopeGenerator1DelayAction
  | SetEnvelopeGenerator1AttackAction
  | SetEnvelopeGenerator1ReleaseAction
  | SetEnvelopeGenerator2HoldAction
  | SetEnvelopeGenerator2AttackAction
  | SetEnvelopeGenerator2DecayAction
  | SetEnvelopeGenerator2SustainAction
  | SetEnvelopeGenerator2ReleaseAction
  | SetKeyboardOctavesAction
  | SetKeyDownAction
  | SetKeyUpAction
  | SetKeyboardBassNoteAction
