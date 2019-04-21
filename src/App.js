import React from "react";
import "./index.css";
import { connect } from 'react-redux'
import { tick, handleSetMinutesDown, handleSetMinutesUp, handleStart, reset } from './actions';

const mapStateToProps = (state) => {
  
    return {
      minutes: state.minutes,
      seconds: state.seconds,
      start: state.start,
      doneMessage: state.doneMessage,
      reset: state.reset
    }
}

const mapDispatchToProps = (dispatch) => {

  return {
     handleSetMinutesUp: () => handleSetMinutesUp(dispatch),
     handleSetMinutesDown: () => handleSetMinutesDown(dispatch),
     tick: () => tick(dispatch),
     reset: () => reset(dispatch),
     handleStart: () => handleStart(dispatch)
  }
 

}


class App extends React.Component {


  componentDidMount() {
    console.log("mounted");
    setInterval(this.props.tick, 1000);
   
  }

  render() {
    return (
      <div className="App">
        <h1>Timer</h1>
        <h3>
          Set Time:
          <button className="timer-button" onClick={this.props.handleSetMinutesUp}>
            +
          </button>
          <button className="timer-button" onClick={this.props.handleSetMinutesDown}>-</button>
        </h3>
        <button onClick={this.props.handleStart} value="START" className="button">
          START
        </button>

        <button className="button-reset" onClick={this.props.reset}>
          Reset
        </button>
        <h2>Minutes: {this.props.minutes}</h2>
        <h2>Seconds: {this.props.seconds}</h2>
        <h1 className="done">{this.props.doneMessage}</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
