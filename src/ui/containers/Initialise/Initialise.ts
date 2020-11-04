import { connect, MapDispatchToProps } from 'react-redux'
import initEngine from '../../../engine'
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
    initEngine().then(() => {
      onInitialise()
    })
  }
})

export default connect(undefined, mapDispatchToProps)(Landing)
