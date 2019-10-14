import React from 'react';
import {NavItem,Nav } from 'reactstrap';
// import { render } from 'timeago.js';
import Contacts from '../components/contacts';

const ChatMenu = (props) => {

    return (
        <div className="px-2" style={{backgroundColor:"#2F3136"}}>
            <Nav>
            <NavItem>
                {props.users.map(user => {
                    return(
                        <Contacts
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        />
                    )
                })}
            </NavItem>
            </Nav>
        </div>
    )
}
export default ChatMenu;