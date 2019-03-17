import React from 'react';
import './Weight.css';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import MomentLocaleUtils, {
    formatDate,
  } from 'react-day-picker/moment';
  
import 'moment/locale/uk';


const Weight = ({intermediate, interWeight, date, time, collectData, inputChange, toggleModal, dayPickerValue}) => {
    console.log(DayPickerInput)
    return (
        <div className={intermediate?'WeightInputPage WeightInputPage--moveRight':'WeightInputPage WeightInputPage--moveLeft'}>
            <p className='WeightInputPage__Text'><span className='WeightInputPageButton--name'>Set new progress breakpoint</span></p>
            <div className="WeightInputPage__Container">
                <form onSubmit={collectData} data-name='intermediate' action="submit" className="WeightInputPageContainer__Form">
                    <label htmlFor="intWeight"><span>Weight(kg):</span>
                    <input onChange={inputChange} type="text" name='interWeight' value={interWeight} className="WeightInputPageContainer__Input"/>
                    </label>
                    <label htmlFor="userDate"><span>Date:</span>
                    <DayPickerInput inputProps={{ style: { width: 108.637} }} onDayChange={dayPickerValue} formatDate={formatDate} format="L" placeholder={`${formatDate(new Date(), 'L', 'uk')}`} dayPickerProps={{locale: 'uk', localeUtils: MomentLocaleUtils,}}/>

                    </label>
                    <label htmlFor="userTime"><span>Time:</span>
                    <input onChange={inputChange} type="text" name='time' value={time} className="WeightInputPageContainer__Input"/>
                    </label>
                    <button onClick={toggleModal} data-name='intermediate' type='submit' className="WeightInputPageContainer__Button">Save</button>
                </form>
                    <button onClick={toggleModal} data-name='intermediate' type='button'className="WeightInputPageContainer__Button">Cancel</button>
            </div>
        </div>
    );
};

export default Weight;

