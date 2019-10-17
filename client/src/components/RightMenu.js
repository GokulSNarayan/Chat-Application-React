import React, {useState} from 'react';
import {NavItem,Nav } from 'reactstrap';
// import { render } from 'timeago.js';
import Contacts from './contacts';

const RightMenu = (props) => {
    const [users,setUsers] = useState(props.users);

    return (
        <div className="px-2" style={{backgroundColor:"#2F3136"}}>
            <h4 className="p-2" style={{color:"#8E9297"}}>ONLINE</h4>
            <Nav className="px-2">
            <NavItem>
                {users.map(user => {
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
export default RightMenu;