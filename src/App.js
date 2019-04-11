import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    const W_DATE = new Date("July 3, 2020 18:00:00");
    this.state = {
      timeRemainingInSeconds: (W_DATE - Date.parse(new Date())) / 1000,
      time: {}
    };
  }

  secondsToTime(secs) {
    var days = Math.floor(secs / (60 * 60 * 24));
    var hours = Math.floor((secs % (60 * 60 * 24)) / (60 * 60));
    var minutes = Math.floor((secs % (60 * 60)) / 60);
    var seconds = Math.floor(secs % 60);

    let obj = {
      d: days,
      h: hours,
      m: minutes,
      s: seconds
    };

    return obj;
  }

  decrementTimeRemaining = () => {
    if (this.state.timeRemainingInSeconds > 0) {
      this.setState({
        timeRemainingInSeconds: this.state.timeRemainingInSeconds - 1,
        time: this.secondsToTime(this.state.timeRemainingInSeconds)
      });
    } else {
      clearInterval(this.timer);
    }
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.decrementTimeRemaining();
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <div>Total seconds until date: {this.state.timeRemainingInSeconds}</div>
        <div>Days: {this.state.time.d}</div>
        <div>Hours: {this.state.time.h}</div>
        <div>Minutes: {this.state.time.m}</div>
        <div>Seconds: {this.state.time.s}</div>
      </div>
    );
  }
}

export default App;
