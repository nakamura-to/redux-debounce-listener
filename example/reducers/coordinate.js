import { SET_POSITION } from '../actions/coordinate'

export default function coordinate(state = { x: 0, y: 0 }, action) {
  switch (action.type) {
    case SET_POSITION:
      return {
        x: action.payload.x,
        y: action.payload.y
      }
    default:
      return state
  }
}
