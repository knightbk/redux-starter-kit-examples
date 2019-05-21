import React from 'react'
import { connect } from 'react-redux'
import { setNameValue } from '../redux/reducers/nameValue'

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

const mapStateToProps = ({ name }) => ({ inputValue: name.value })

const mapDispatchToProps = dispatch => ({
  inputChanged: payload => dispatch(setNameValue(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input)
