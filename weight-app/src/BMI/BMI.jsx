import React from 'react';
import SpeedoMeter from 'react-d3-speedometer';
import CurrentWeight from '../CurrentWeight/CurrentWeight';
import DesirableWeight from '../DesirableWeight/DesirableWeight';
import './BMI.css'


const BMI = ({BM}) => {
    
    return (
       <div className="BMI">
       <div className="BMIWeight">
        <CurrentWeight/>
        <DesirableWeight/>
       </div>
       <h4 className='BMI__title'>BMI - Body Mass Index</h4>
       <SpeedoMeter width='295' height='295' value={BM} minValue='0' maxValue='60' segments='4' endColor='#FF471A' startColor='#33CC33'/>
       </div>
    );
};

export default BMI;