import React, { Component } from 'react'
import Hello from './components/Hello'
import Input from './components/Input'
import ShowClear from './components/ShowClear'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      clear: false,
    }
    this.inputChanged = this.inputChanged.bind(this)
    this.clearInput = this.clearInput.bind(this)
    this.showClear = this.showClear.bind(this)
    this.hideClear = this.hideClear.bind(this)
  }

  // TODO: move this logic into Redux
  inputChanged(e) {
    const val = e.target.value

    this.setState({
      name: val,
    })
  }

  clearInput() {
    this.setState({
      name: '',
    })
  }

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
          <Input
            inputValue={this.state.name}
            inputChanged={this.inputChanged}
          />
        </div>
        <ShowClear
          clearInput={this.clearInput}
          canShowClear={this.state.clear}
          showClear={this.showClear}
          hideClear={this.hideClear}
        />
      </div>
    )
  }
}

// TODO: add a provider

export default App
