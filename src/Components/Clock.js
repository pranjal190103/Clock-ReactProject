import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this)
    this.state = { date: new Date() };
  }

  //----Lifecycle methods i.e, Mounting and UnMounting----
  //this method runs after the component output has been rendered to the DOM
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

  tick() {
    //this will update the state on each interval(i.e,now clock ticks every second)
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <>
        <h1 align="center">Clock</h1>
        <hr />
        <h4 align="center">{this.state.date.toLocaleTimeString()}</h4>
      </>
    );
  }
  
}

export default Clock;
