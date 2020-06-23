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

export interface RootState {
  /** Master volume */
  volume: number
  vco1: VCO1State
  vco2: VCO2State
}
