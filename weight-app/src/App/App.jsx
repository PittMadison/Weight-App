import React, { Component, Fragment } from 'react';
import './App.css';
import StartPage from '../StartPage/StartPage';

class App extends Component {

  state = {
    start: false
  }

  startWeighing = () => {
    this.setState({
      start: true
    })
  }

  render() {
    const {start} = this.state;
    return (
      <Fragment>
        <StartPage startWeighing={this.startWeighing} start={start}></StartPage>
      </Fragment>
    );
  }
}

export default App;
