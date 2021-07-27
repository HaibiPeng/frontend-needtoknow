import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hour: 0,
      second: 0,
      minutes: 0,
      strikes: 0,
    }
    this.timerId = 0;
    this.timer = this.timer.bind(this)//否则this不对
  }
  timer() {
    const nextstrikes = this.state.strikes + 1000;
    this.setState({
      hour: parseInt(nextstrikes / 3600000) % 24,
      minutes: parseInt(nextstrikes / 60000) % 60,
      second: parseInt(nextstrikes / 1000) % 60,
      strikes: this.state.strikes + 1000
    })
  }

  start() {
    console.log(this.timerId);
    if(!this.timerId) {
      this.timerId = setInterval(this.timer, 1000);
    }
  }

  stop() {
    window.clearInterval(this.timerId);
    this.timerId = 0;
  }

  reset() {
    window.clearInterval(this.timerId);
    this.timerId = 0;
    this.setState({
      hour: 0,
      second: 0,
      minutes: 0,
      strikes: 0,
    })
  }

  componentDidMount() {
    this.start();
  }//render结束后

  render() {
    return (
      <div>
        <h1>{this.state.hour}:{this.state.minutes}:{this.state.second}</h1>
        <button onClick={() => this.stop()}>Stop</button>
        <button onClick={() => this.start()}>Start</button>
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    );
  }
}

export default Counter;
