import React from 'react';
import './Header.css';

const Header = ({toggleModal}) => {
    return (
        <header className="Header">
        <button onClick={toggleModal} className="PlusButton">+</button>
        </header>
    );
};

export default Header;