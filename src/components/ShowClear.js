import React from 'react'
import Clear from './Clear'

class ShowClear extends React.Component {
  render() {
    return (
      <>
        {this.props.canShowClear && (
          <button type="button" onClick={this.props.hideClear}>
            Hide Clear Button
          </button>
        )}
        {!this.props.canShowClear && (
          <button type="button" onClick={this.props.showClear}>
            Show Clear Button
          </button>
        )}
        {this.props.canShowClear && (
          <Clear clearInput={this.props.clearInput} />
        )}
      </>
    )
  }
}

export default ShowClear
