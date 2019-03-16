import React, { Component } from 'react';
import './App.css';
import StartPage from '../StartPage/StartPage';
import StartInputPage from '../StartInputPage/StartInputPage';
import Weight from '../Weight/Weight'
import BMI from '../BMI/BMI'
import Header from '../Header/Header';
import History from '../History/History';


class App extends Component {

  state = {
    start: false,
    modal: true,
    intermediate: false,
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

    this.setState ({
      BM: this.countBMI(this.state.currentWeight, this.state.currentHeight),
      dataArr: [newObj ],
      currentWeight: '',
      desirableWeight: '',
      currentHeight: '',
    },()=>localStorage.setItem('userWeight', JSON.stringify(newObj)))
    
  }

  toggleModal = (e) => {
    let name = e.target.dataset.name
    this.setState({
      [name]: !this.state[name]
    })
  }

  // BMI ==================================

  countBMI = (weight, height) => {
    const BMI = Math.round(weight / Math.pow(height/100,2));
    return BMI;
  }


  render() {
    const {start, modal, intermediate, currentWeight, desirableWeight, currentHeight, BM, dataArr} = this.state;
     
    return (
      <div className='App'>
        <StartPage toggleModal={this.toggleModal} start={start}></StartPage>
        <StartInputPage dataArr={dataArr} modal={modal} toggleModal={this.toggleModal} currentWeight={currentWeight} desirableWeight={desirableWeight} currentHeight={currentHeight} collectData={this.collectData} inputChange={this.inputChange}/>
        <Weight dataArr={dataArr} intermediate={intermediate} toggleModal={this.toggleModal} currentWeight={currentWeight} desirableWeight={desirableWeight} currentHeight={currentHeight} collectData={this.collectData} inputChange={this.inputChange}/>        
        <Header toggleModal={this.toggleModal} modal={modal} intermediate={intermediate}/>
        <BMI BM={BM} dataArr={dataArr}/>
        <History/>
      </div>
    );
  }
}

export default App;
