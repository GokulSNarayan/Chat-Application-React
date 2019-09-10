import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText,NavItem,Nav } from 'reactstrap';
// import { render } from 'timeago.js';
import Contacts from '../components/contacts';

class ChatMenu extends React.Component{
    constructor(props) {
        super(props)

        this.state ={
            users:[{name:'Gekko'},{name:"Vivek"},{name:"Sagar Gujaraticsccc"}]
        }
    }
    
render(){

    return (
        <div className={"navbar-nav "}>
            <Nav>
            <NavItem>
                {this.state.users.map(user => {
                    return(
                        <Contacts
                        name={user.name} />
                    )
                })}
            </NavItem>
            </Nav>
        </div>
    )
} 

}
export default ChatMenu;