import React from 'react';
import './DesirableWeight.css';

const DesirableWeight = ({dataArr}) => {
    return (
        <div className='DesirableWeight'>
        <p className="DesirableWeight__Title">Desirable Weight:</p>
        <p className="DesirableWeight__Info">{dataArr.length>0?dataArr[0].desirableWeight+' kg':'Sorry, no data found'}</p>
        <p className="DesirableWeight__Date">Difference: {dataArr.length>0?Math.abs(dataArr[0].currentWeight-dataArr[0].desirableWeight)+' kg':'Sorry, no data found'}</p>
        </div>
    );
};

export default DesirableWeight;