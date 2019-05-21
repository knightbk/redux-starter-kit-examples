import React from 'react'

class Input extends React.Component {
  render() {
    return (
      <input
        type="text"
        placeholder="input your name"
        value={this.props.inputValue}
        onChange={this.props.inputChanged}
      />
    )
  }
}

export default Input
