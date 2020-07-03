import { MapStateToProps, MapDispatchToProps, connect } from 'react-redux'
import { RootState } from '../../../state/types/state'
import { setEnvelopeGenerator1Delay } from '../../../state/actions'
import Knob from '../../components/Knob'

const mapStateToProps: MapStateToProps<
  {
    step: string
    min: number
    max: number
    value: number
    title: string
    labels: React.ReactNode[]
  },
  {},
  RootState
> = state => ({
  step: 'any',
  min: 0,
  max: 1,
  value: state.envelopeGenerator1.delay,
  title: 'DELAY TIME',
  labels: [...Array(11)].map((_, i) => i)
})

const mapDispatchToProps: MapDispatchToProps<
  {
    handleChange: (value: number) => void
  },
  {}
> = dispatch => ({
  handleChange: value => {
    dispatch(setEnvelopeGenerator1Delay(value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Knob)