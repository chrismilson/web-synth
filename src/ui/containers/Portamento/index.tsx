import React from 'react'
import './style.scss'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { RootState } from '../../../state/types/state'
import { setPortamento } from '../../../state/actions'
import Knob from '../../components/Knob'

const mapStateToProps: MapStateToProps<
  {
    value: number
  },
  {},
  RootState
> = state => ({
  value: state.portamento
})

const mapDispatchToProps: MapDispatchToProps<
  {
    handleChange: (value: number) => void
  },
  {}
> = dispatch => ({
  handleChange: value => {
    dispatch(setPortamento(value))
  }
})

const Portamento: React.FC<{
  value: number
  handleChange: (value: number) => void
}> = ({ value, handleChange }) => {
  return (
    <div className="Portamento module">
      PORTAMENTO
      <Knob
        value={value}
        step={'any'}
        handleChange={handleChange}
        title="TIME"
        labels={[...Array(11)].map((_, i) => i)}
      />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Portamento)
