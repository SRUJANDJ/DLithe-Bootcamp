import React,{Component} from "react";


export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 10,
      isRunning: false,
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.seconds === 1) {
      this.stopTimer();
    }
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  startTimer = () => {
    if (!this.state.isRunning) {
      this.timer = setInterval(() => {
        this.setState((prevState) => ({
          seconds: prevState.seconds - 1,
        }));
      }, 1000);

      this.setState({
        isRunning: true,
      });
    }
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({
      isRunning: false,
    });
  };

  resetTimer = () => {
    this.clearTimer();
    this.setState({
      seconds: 10,
    });
  };

  clearTimer = () => {
    clearInterval(this.timer);
  };

  render() {
    const { seconds, isRunning } = this.state;

    return (
      <div>
        <h1>Countdown Timer: {seconds} seconds</h1>
        <button className="btn btn-success m-3" onClick={this.startTimer} disabled={isRunning}>
          Start
        </button>
        <button className="btn btn-danger m-3" onClick={this.stopTimer} disabled={!isRunning}>
          Stop
        </button>
        <button className="btn btn-warning m-3" onClick={this.resetTimer} disabled={isRunning}>
          Reset
        </button>
      </div>
    );
  }
}


