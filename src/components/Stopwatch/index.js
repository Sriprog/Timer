import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    timeRunning: 0,
  }

  startTimer = () => {
    this.timeInterval = setInterval(this.countSec, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timeInterval)
  }

  resetTimer = () => {
    this.setState({timeRunning: 0})
    clearInterval(this.timeInterval)
  }

  countSec = () => {
    this.setState(prevState => ({
      timeRunning: prevState.timeRunning + 1,
    }))
  }

  renderSeconds = () => {
    const {timeRunning} = this.state
    const seconds = Math.floor(timeRunning % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeRunning} = this.state
    const minutes = Math.floor(timeRunning / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  /* renderHours = () => {
    const {timeRunning} = this.state
    const hours = Math.floor(timeRunning / 360)
    if (hours < 10) {
      return `0${hours}`
    }
    return hours
  } */

  render() {
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="timer-img"
                alt="timer"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 testid="timer" className="stopwatch-timer">
              {time}
            </h1>
            <div className="timer-buttons">
              <button
                className="start-button button"
                type="button"
                onClick={this.startTimer}
              >
                Start
              </button>
              <button
                className="stop-button button"
                type="button"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                className="reset-button button"
                type="button"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
