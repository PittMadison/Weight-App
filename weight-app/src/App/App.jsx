import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import StartPage from '../StartPage/StartPage';
import StartInputPage from '../StartInputPage/StartInputPage';
import BMI from '../BMI/BMI'
import Header from '../Header/Header';

class App extends Component {

  state = {
    start: false,
    modal: true,
    dataArr: [],
    currentWeight: '',
    desirableWeight: '',
    currentHeight: '',
    BM: 0
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
      id: Date.now(),
    }

    this.setState (prev=>({
      BM: this.countBMI(this.state.currentWeight, this.state.currentHeight),
      dataArr: [...prev.dataArr, newObj ],
      currentWeight: '',
      desirableWeight: '',
      currentHeight: '',
    }))
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  // BMI ==================================

  countBMI = (weight, height) => {
    const BMI = Math.round(weight / Math.pow(height/100,2));
    return BMI;
  }

  //<h1>{dataArr.length>0?moment(dataArr[dataArr.length-1].id).format('DD.MM.YYYY'):'Sorry, no data found'}</h1>

  render() {
    const {start, modal, currentWeight, desirableWeight, currentHeight, BM} = this.state;
     
    return (
      <div className='App'>
        <StartPage startWeighing={this.startWeighing} start={start}></StartPage>
        <StartInputPage modal={modal} toggleModal={this.toggleModal} currentWeight={currentWeight} desirableWeight={desirableWeight} currentHeight={currentHeight} collectData={this.collectData} inputChange={this.inputChange}/>
        <Header toggleModal={this.toggleModal}/>
        <BMI BM={BM}/>
      </div>
    );
  }
}

export default App;
