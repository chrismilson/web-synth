import { MapStateToProps, connect, MapDispatchToProps } from 'react-redux'
import { RootState } from '../../../state/types/state'
import Knob from '../../components/Knob'
import { Action } from '../../../state/types/actions'
import { ActionCreator } from 'redux'

export interface ValueKnobProps {
  selector: (state: RootState) => number
  actionCreator: ActionCreator<Action>
  labels?: React.ReactNode[]
  title?: string
  className?: string
  min?: number
  max?: number
}

const mapStateToProps: MapStateToProps<
  {
    step: string
    min: number
    max: number
    value: number
    labels: React.ReactNode[]
  },
  ValueKnobProps,
  RootState
> = (state, ownProps) => ({
  step: 'any',
  min: ownProps.min || 0,
  max: ownProps.max || 1,
  value: ownProps.selector(state),
  labels: ownProps.labels || [...Array(11)].map((_, i) => i),
  title: ownProps.title,
  className: ownProps.className
})

const mapDispatchToProps: MapDispatchToProps<
  {
    handleChange: (value: number) => void
  },
  ValueKnobProps
> = (dispatch, ownProps) => ({
  handleChange: value => {
    dispatch(ownProps.actionCreator(value))
  }
})

/**
 * The value knob is a wrapper to connect a Knob with a continuous value from 0
 * to 1 to the state object.
 *
 * This is because there are so many knobs of this kind, and having separate
 * modules for each of them was causing a lot of code duplication.
 */
export default connect(mapStateToProps, mapDispatchToProps)(Knob)
