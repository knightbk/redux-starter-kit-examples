import React from 'react'
import Clear from './Clear'
import { connect } from 'react-redux'
import { setClearValue } from '../redux/reducers/showClear'

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
        {this.props.canShowClear && <Clear />}
      </>
    )
  }
}
const mapStateToProps = ({ clearButton }) => ({
  canShowClear: clearButton.show,
})

const mapDispatchToProps = dispatch => ({
  showClear: () => dispatch(setClearValue(true)),
  hideClear: () => dispatch(setClearValue(false)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowClear)
