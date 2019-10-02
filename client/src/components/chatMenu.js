import React from 'react';
import {NavItem,Nav } from 'reactstrap';
// import { render } from 'timeago.js';
import Contacts from '../components/contacts';

class ChatMenu extends React.Component{
    constructor(props) {
        super(props)

        this.state ={
            users:[{id:0,name:'Gekko'},{id:1,name:"Vivek"},{id:2,name:"Sagar Gujaraticsccc"}]
        }
    }
    
render(){

    return (
        <div className="px-2">
            <Nav>
            <NavItem>
                {this.state.users.map(user => {
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

}
export default ChatMenu;