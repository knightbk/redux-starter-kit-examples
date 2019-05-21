import React, { Component } from 'react'
import Hello from './components/Hello'
import Input from './components/Input'
import ShowClear from './components/ShowClear'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      clear: false,
    }
    this.showClear = this.showClear.bind(this)
    this.hideClear = this.hideClear.bind(this)
  }

  // TODO: move this logic into Redux
  showClear() {
    this.setState({
      clear: true,
    })
  }

  hideClear() {
    this.setState({
      clear: false,
    })
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <div className="input-row">
          <Input />
        </div>
        <ShowClear
          canShowClear={this.state.clear}
          showClear={this.showClear}
          hideClear={this.hideClear}
        />
      </div>
    )
  }
}

export default App
