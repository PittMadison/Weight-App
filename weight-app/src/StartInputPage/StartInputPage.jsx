import React from 'react';
import './StartInputPage.css';

const StartInputPage = ({modal, currentWeight, desirableWeight, currentHeight, collectData, inputChange, toggleModal, dataArr}) => {
    return (
        <div className={modal?'StartInputPage StartInputPage--moveRight':'StartInputPage StartInputPage--moveLeft'}>
            <p className='StartInputPage__Text'><span className='StartInputPageButton--name'>Save weight</span></p>
            <div className="StartInputPage__Container">
                <form onSubmit={collectData} action="submit" className="StartInputPageContainer__Form">
                    <label htmlFor="userWeight"><span>Your current weight(kg):</span>
                    <input onChange={inputChange} type="text" name='currentWeight' value={currentWeight} className="StartInputPageContainer__Input"/>
                    </label>
                    <label htmlFor="userWantWeight"><span>Your desirable weight(kg):</span>
                    <input onChange={inputChange} type="text" name='desirableWeight' value={desirableWeight} className="StartInputPageContainer__Input"/>
                    </label>
                    <label htmlFor="userHeight"><span>Your height(cm):</span>
                    <input onChange={inputChange} type="text" name='currentHeight' value={currentHeight} className="StartInputPageContainer__Input"/>
                    </label>
                    <button onClick={toggleModal} type='submit' data-name='modal' className="StartInputPageContainer__Button">Save</button>
                </form>
                    <button onClick={toggleModal} data-name='modal' disabled={dataArr.length?false:true} type='button'className="StartInputPageContainer__Button">Cancel</button>
            </div>
        </div>
    );
};

export default StartInputPage;