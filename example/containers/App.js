import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Coordinate from '../components/Coordinate'
import * as CoordinateActions from '../actions/coordinate'

function mapStateToProps(state) {
  return {
    coordinate: state.coordinate
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CoordinateActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Coordinate)
