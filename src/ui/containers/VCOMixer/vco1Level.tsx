import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { RootState } from '../../../state/types/state'
import Knob from '../../components/Knob'
import { setVCO1Level } from '../../../state/actions'

const mapStateToProps: MapStateToProps<
  {
    value: number
    min: number
    max: number
    step: string
    title: string
    className: string
    labels: React.ReactNode[]
  },
  {},
  RootState
> = state => ({
  value: state.vcoMixer.vco1Level,
  min: 0,
  max: 1,
  step: 'any',
  title: 'VCO 1 LEVEL',
  className: 'vco1',
  labels: [...Array(11)].map((_, i) => i)
})

const mapDispatchToProps: MapDispatchToProps<
  {
    handleChange: (value: number) => void
  },
  {}
> = dispatch => ({
  handleChange: value => {
    dispatch(setVCO1Level(value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Knob)
