import React from 'react';

class Clear extends React.Component {
  render() {
    return(
      <button type="button" onClick={this.props.clearInput}>Clear Input</button>
    )
  }
}

export default Clear;