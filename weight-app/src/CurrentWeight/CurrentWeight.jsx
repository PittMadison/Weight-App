import React from 'react';
import moment from 'moment';
import './CurrentWeight.css';

const CurrentWeight = ({dataArr}) => {
    
    return (
        <div className='CurrentWeight'>
        <p className="CurrentWeight__Title">Current Weight:</p>
        <p className="CurrentWeight__Info">{dataArr.length>0?dataArr[0].currentWeight +' kg':'Sorry, no data found'}</p>
        <p className="CurrentWeight__Date">{dataArr.length>0?moment(dataArr[0].id).format('DD.MM.YYYY'):'Sorry, no data found'}</p>
        </div>

    );
};

export default CurrentWeight;