import React, { Component, PropTypes } from 'react'

class Coordinate extends Component {
  render() {
    const { setPosition, coordinate } = this.props
    return (
      <div className="inner" onMouseMove={(e) => {
        const { clientX, clientY } = e;
        setPosition(clientX, clientY);
      }}>
        <p>X: {coordinate.x}</p>
        <p>Y: {coordinate.y}</p>
      </div>
    )
  }
}

Coordinate.propTypes = {
  setPosition: PropTypes.func.isRequired,
  coordinate: PropTypes.object.isRequired
}

export default Coordinate
