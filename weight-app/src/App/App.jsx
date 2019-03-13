import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import StartPage from '../StartPage/StartPage';
import StartInputPage from '../StartInputPage/StartInputPage';
import IMT from '../IMT/IMT';

class App extends Component {

  state = {
    start: false,
    modal: true,
    dataArr: ['123123'],
    currentWeight: '',
    desirableWeight: '',
    currentHeight: ''
  }
  // start page ==========================
  startWeighing = () => {
    this.setState({
      start: true
    })
  }
  // modal page ============================

  inputChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    this.setState ({
      [name]: value
    })
  }

  collectData = (e) => {
    
    e.preventDefault();

    const newObj = {
      currentWeight: this.state.currentWeight,
      desirableWeight: this.state.desirableWeight,
      currentHeight: this.state.currentHeight,
      id: Date.now()
    }

    this.setState (prev=>({
      dataArr: [...prev.dataArr, newObj ],
      currentWeight: '',
      desirableWeight: '',
      currentHeight: ''
    }))
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  // IMT ==================================

  //<h1>{dataArr.length>0?moment(dataArr[dataArr.length-1].id).format('DD.MM.YYYY'):'Sorry, no data found'}</h1>

  render() {
    const {start, modal, currentWeight, desirableWeight, currentHeight, dataArr} = this.state;
     
    return (
      <div className='App'>
        {/* <StartPage startWeighing={this.startWeighing} start={start}></StartPage> */}
        {/* <StartInputPage modal={modal} toggleModal={this.toggleModal} currentWeight={currentWeight} desirableWeight={desirableWeight} currentHeight={currentHeight} collectData={this.collectData} inputChange={this.inputChange}/> */}
        <IMT/>
      </div>
    );
  }
}

export default App;
