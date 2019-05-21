import React from 'react'
import { connect } from 'react-redux'
import { setNameValue } from '../redux/reducers'

class Clear extends React.Component {
  render() {
    return (
      <button type="button" onClick={() => this.props.clearInput('')}>
        Clear Input
      </button>
    )
  }
}

export default connect(
  null,
  {
    clearInput: setNameValue,
  }
)(Clear)
