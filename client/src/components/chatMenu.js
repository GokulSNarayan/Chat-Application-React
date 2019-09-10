import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText,NavItem,Nav } from 'reactstrap';

const ChatMenu = (props) => {

    return (
        <div className={"navbar-nav "+props.class}>
            <Nav>
            <NavItem>
            <CardTitle>{props.user_name}</CardTitle>
            </NavItem>
            </Nav>
        </div>
    )

}
export default ChatMenu;