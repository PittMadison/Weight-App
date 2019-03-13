import React from 'react';
import './StartPage.css';

const StartPage = ({startWeighing, start}) => {
    return (
        <div className={start ? 'StartPageContainer StartPageContainer--moveRight' : 'StartPageContainer'}>
        <button onClick={startWeighing} className='StartPageContainer__button'>Start Weighing Now!</button>
        </div>
    );
};

export default StartPage;