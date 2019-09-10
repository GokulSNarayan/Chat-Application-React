import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, } from 'reactstrap';

const Chat = (props) => {

    return (
        <div id={props.id} className={props.class}>
        <Card className="chat">
            <CardBody>

        <CardTitle className="cardTitle">{props.user_name}</CardTitle>
        <CardText>{props.message}</CardText>
            </CardBody>
        </Card>
        </div>
    )

}
export default Chat;