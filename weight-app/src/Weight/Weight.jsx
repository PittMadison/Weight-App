import React from 'react';
import './Weight.css';

const Weight = ({intermediate, currentWeight, desirableWeight, currentHeight, collectData, inputChange, toggleModal, dataArr}) => {
    return (
        <div className={intermediate?'WeightInputPage WeightInputPage--moveRight':'WeightInputPage WeightInputPage--moveLeft'}>
            <p className='WeightInputPage__Text'><span className='WeightInputPageButton--name'>Save weight</span></p>
            <div className="WeightInputPage__Container">
                <form onSubmit={collectData} action="submit" className="WeightInputPageContainer__Form">
                    <label htmlFor="userWeight"><span>Your current weight(kg):</span>
                    <input onChange={inputChange} type="text" name='currentWeight' value={currentWeight} className="WeightInputPageContainer__Input"/>
                    </label>
                    <label htmlFor="userWantWeight"><span>Your desirable weight(kg):</span>
                    <input onChange={inputChange} type="text" name='desirableWeight' value={desirableWeight} className="WeightInputPageContainer__Input"/>
                    </label>
                    <label htmlFor="userHeight"><span>Your height(cm):</span>
                    <input onChange={inputChange} type="text" name='currentHeight' value={currentHeight} className="WeightInputPageContainer__Input"/>
                    </label>
                    <button onClick={toggleModal} type='submit' className="WeightInputPageContainer__Button">Save</button>
                </form>
                    <button onClick={toggleModal} data-name='intermediate' disabled={dataArr.length?false:true} type='button'className="WeightInputPageContainer__Button">Cancel</button>
            </div>
        </div>
    );
};

export default Weight;