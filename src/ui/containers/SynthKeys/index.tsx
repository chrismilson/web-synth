import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import Keyboard from '../../components/Keyboard'
import { RootState } from '../../../state/types/state'
import { setKeyDown, setKeyUp } from '../../../state/actions'

const mapStateToProps: MapStateToProps<
  {
    keys: boolean[]
    bassNote: number
  },
  {},
  RootState
> = state => ({
  keys: state.keyboard.keys,
  bassNote: state.keyboard.bassNote
})

const mapDispatchToProps: MapDispatchToProps<
  {
    handler: (note: number, on: boolean) => void
  },
  {}
> = dispatch => ({
  handler: (note, on) => {
    dispatch((on ? setKeyDown : setKeyUp)(note))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard)
