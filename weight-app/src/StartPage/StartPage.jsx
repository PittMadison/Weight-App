import React from 'react';
import './StartPage.css';

const StartPage = ({toggleModal, start}) => {
    return (
        <div className={start ? 'StartPageContainer StartPageContainer--moveRight' : 'StartPageContainer'}>
        <button onClick={toggleModal} data-name='start' className='StartPageContainer__button'>Start Weighing Now!</button>
        </div>
    );
};

export default StartPage;