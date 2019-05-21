import React from 'react'
import { connect } from 'react-redux'
import { setNameValue } from '../redux/reducers'

class Input extends React.Component {
  render() {
    return (
      <input
        type="text"
        placeholder={this.props.placeholder}
        value={this.props.inputValue}
        onChange={e => this.props.inputChanged(e.target.value)}
      />
    )
  }
}

Input.defaultProps = {
  placeholder: 'input your name here',
}

const mapStateToProps = state => ({ inputValue: state.nameValue })

export default connect(
  mapStateToProps,
  {
    inputChanged: setNameValue,
  }
)(Input)
