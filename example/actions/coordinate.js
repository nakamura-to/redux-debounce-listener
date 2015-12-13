export const SET_POSITION = 'SET_POSITION'

export function setPosition(x, y) {
  return {
    type: SET_POSITION,
    payload: {
      x,
      y
    }
  }
}
