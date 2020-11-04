import { connect, MapDispatchToProps } from 'react-redux'
import Landing from '../../components/Landing/Landing'

const mapDispatchToProps: MapDispatchToProps<
  {
    handleStart: () => void
  },
  {
    onInitialise: () => void
  }
> = (dispatch, { onInitialise }) => ({
  handleStart: () => {
    // Initialise the engine then bubble up.
    import('../../../engine')
      .then(m => m.default)
      .then(initEngine => initEngine())
      .then(() => {
        onInitialise()
      })
  }
})

export default connect(undefined, mapDispatchToProps)(Landing)
