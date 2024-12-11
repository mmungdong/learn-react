import React, { Component } from 'react'
import { flushSync } from 'react-dom'

export class App extends Component {

  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  increment() {
    // 将setState的回调函数写到flushSync中，同步更新state后在执行后续代码
    flushSync(() => {
      this.setState({
        counter: this.state.counter + 1
      })
    })
    // 这里执行完flushSync中的方法并更新后才会执行这里的代码
    console.log(this.state.counter)
  }

  render() {
    console.log("render ~")

    const { counter } = this.state

    return (
      <>
        <h2>{counter}</h2>
        <button onClick={e => this.increment()}>点击我</button>
      </>
    )
  }
}

export default App