import React from 'react';
import SpeedoMeter from 'react-d3-speedometer';
import CurrentWeight from '../CurrentWeight/CurrentWeight';
import DesirableWeight from '../DesirableWeight/DesirableWeight';
import './BMI.css'


const BMI = ({BM, dataArr}) => { 
    return (
       <div className="BMI">
       <div className="BMIWeight">
        <CurrentWeight dataArr={dataArr}/>
        <DesirableWeight dataArr={dataArr}/>
       </div>
       <h4 className='BMI__title'>BMI - Body Mass Index</h4>
       <SpeedoMeter width='295' height='180' value={BM} minValue='0' maxValue='60' segments='4' endColor='#FF471A' startColor='#33CC33'/>
       <p className='BMI__sourceInfo'>BMI = {BM}&emsp;
       <span>(W:{dataArr.length>0?dataArr[0].currentWeight +' kg':'Sorry, no data found'}</span>,
       <span>H:{dataArr.length>0?dataArr[0].currentHeight +' cm':'Sorry, no data found'})</span></p>
       </div>
    );
};

export default BMI;