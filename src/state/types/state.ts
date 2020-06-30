export enum VCO1WaveShape {
  TRIANGLE = 0,
  SAWTOOTH = 1,
  SQUARE = 2,
  NOISE = 3
}

export interface VCO1State {
  waveShape: VCO1WaveShape
  pulseWidth: number
  scale: number
}

export enum VCO2WaveShape {
  SAWTOOTH = 0,
  SQUARE = 1,
  PULSE = 2,
  RING = 3
}

export interface VCO2State {
  waveShape: VCO2WaveShape
  pitch: number
  scale: number
}

export interface VCOMixerState {
  vco1Level: number
  vco2Level: number
}

export interface FrequencyModulatorState {
  /**
   * The amount of frequency modulation from the modulation generator.
   *
   * Also affects the amount of frequency modulation from Total external
   * modulation.
   */
  modulationGenerator: number
  /**
   * The amount of frequency modulation from the envelope generator.
   *
   * Also affects the amount of frequency modulation from external frequency
   * modulation.
   */
  envelopeGenerator: number
}

export interface FilterState {
  /** The cutoff frequency of the filter. */
  cutoff: number
  /** The amount of resonance on the filter at the cutoff frequency. */
  peak: number
}

export interface ModulationGeneratorState {
  /** The squewedness of the waveform from downramp at 0, to triangle at 0.5,
   * and upramp at 1.
   */
  waveForm: number
  frequency: number
}

export interface DAREnvelopeState {
  delay: number
  attack: number
  release: number
}

export interface HADSREnvelopeState {
  hold: number
  attack: number
  decay: number
  sustain: number
  release: number
}

export interface RootState {
  /** Master volume */
  volume: number
  vco1: VCO1State
  vco2: VCO2State
  vcoMixer: VCOMixerState
  portamento: number
  masterTune: number
  frequencyModulator: FrequencyModulatorState
  highpass: FilterState
  lowpass: FilterState
  modulationGenerator: ModulationGeneratorState
  envelopeGenerator1: DAREnvelopeState
  envelopeGenerator2: HADSREnvelopeState
}
