import React from 'react'
import { connect } from 'react-redux'
import { setNameValue } from '../redux/reducers/nameValue'

class Clear extends React.Component {
  render() {
    return (
      <button type="button" onClick={this.props.clearInput}>
        Clear Input
      </button>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  clearInput: () => dispatch(setNameValue('')),
})

export default connect(
  null,
  mapDispatchToProps
)(Clear)
