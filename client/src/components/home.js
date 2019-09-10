import React from 'react';
import logo from '../logo.svg';

const home = (props) => {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Atom Chat</p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            </a>
        </div>
    )
}
export default home;