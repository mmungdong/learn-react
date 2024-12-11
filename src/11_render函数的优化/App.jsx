import React, { PureComponent } from 'react'
import Home from './Home'
import Recommend from './Recommend'
import Profile from './Profile'

export class App extends PureComponent {

  constructor() {
    super()
    this.state = {
      msg: "Hello React",
      counter: 0
    }
  }

  changeMsg() {
    this.setState({
      // msg: "你好啊，李银河！"
      msg: "Hello React"
    })
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    console.log("App render ~")

    const { msg, counter } = this.state

    return (
      <>
        <div>App</div>
        <h2>{msg} - {counter}</h2>
        <button onClick={e => this.changeMsg()}>修改msg</button>
        <button onClick={e => this.increment()}>+1</button>

        <Home />
        <Recommend />
        <Profile />
      </>
      
    )
  }
}

export default App