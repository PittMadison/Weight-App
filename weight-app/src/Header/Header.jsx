import React from 'react';
import './Header.css';

const Header = ({toggleModal}) => {
    let left = '>';
    let right = '<';
    return (
        <header className="Header">
        <button  onClick={toggleModal} data-name='modal' className="LeftButton">{left}</button>
        <button onClick={toggleModal} data-name='intermediate' className="RightButton">{right}</button>
        </header>
    );
};

export default Header;