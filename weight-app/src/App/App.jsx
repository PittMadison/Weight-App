import React, { Component } from 'react';
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

  componentDidMount () {
    let userData = JSON.parse(localStorage.getItem('userWeight'));
    if (userData!==null){
    this.setState({
      dataArr: [userData],
      BM: userData.BM
    })
  }   
    
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
      BM: this.countBMI(this.state.currentWeight, this.state.currentHeight)
    }

    this.setState (prev=>({
      BM: this.countBMI(this.state.currentWeight, this.state.currentHeight),
      dataArr: [newObj ],
      currentWeight: '',
      desirableWeight: '',
      currentHeight: '',
    }))
    localStorage.setItem('userWeight', JSON.stringify(newObj))
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


  render() {
    const {start, modal, currentWeight, desirableWeight, currentHeight, BM, dataArr} = this.state;
     
    return (
      <div className='App'>
        <StartPage startWeighing={this.startWeighing} start={start}></StartPage>
        <StartInputPage dataArr={dataArr} modal={modal} toggleModal={this.toggleModal} currentWeight={currentWeight} desirableWeight={desirableWeight} currentHeight={currentHeight} collectData={this.collectData} inputChange={this.inputChange}/>
        <Header toggleModal={this.toggleModal}/>
        <BMI BM={BM} dataArr={dataArr}/>
      </div>
    );
  }
}

export default App;
